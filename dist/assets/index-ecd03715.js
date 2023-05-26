(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nd={exports:{}},Mo={},Od={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ni=Symbol.for("react.element"),Tm=Symbol.for("react.portal"),Pm=Symbol.for("react.fragment"),Rm=Symbol.for("react.strict_mode"),xm=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),Om=Symbol.for("react.context"),Am=Symbol.for("react.forward_ref"),Dm=Symbol.for("react.suspense"),Lm=Symbol.for("react.memo"),Mm=Symbol.for("react.lazy"),Tu=Symbol.iterator;function jm(e){return e===null||typeof e!="object"?null:(e=Tu&&e[Tu]||e["@@iterator"],typeof e=="function"?e:null)}var Ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dd=Object.assign,Ld={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=Ld,this.updater=n||Ad}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Md(){}Md.prototype=Xn.prototype;function al(e,t,n){this.props=e,this.context=t,this.refs=Ld,this.updater=n||Ad}var ll=al.prototype=new Md;ll.constructor=al;Dd(ll,Xn.prototype);ll.isPureReactComponent=!0;var Pu=Array.isArray,jd=Object.prototype.hasOwnProperty,ul={current:null},Ud={key:!0,ref:!0,__self:!0,__source:!0};function Fd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)jd.call(t,r)&&!Ud.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ni,type:e,key:o,ref:s,props:i,_owner:ul.current}}function Um(e,t){return{$$typeof:ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ni}function Fm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ru=/\/+/g;function cs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fm(""+e.key):t.toString(36)}function Fi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ni:case Tm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+cs(s,0):r,Pu(i)?(n="",e!=null&&(n=e.replace(Ru,"$&/")+"/"),Fi(i,t,n,"",function(u){return u})):i!=null&&(cl(i)&&(i=Um(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ru,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Pu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+cs(o,a);s+=Fi(o,t,n,l,i)}else if(l=jm(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+cs(o,a++),s+=Fi(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function vi(e,t,n){if(e==null)return e;var r=[],i=0;return Fi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function zm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},zi={transition:null},$m={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:zi,ReactCurrentOwner:ul};L.Children={map:vi,forEach:function(e,t,n){vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vi(e,function(){t++}),t},toArray:function(e){return vi(e,function(t){return t})||[]},only:function(e){if(!cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Xn;L.Fragment=Pm;L.Profiler=xm;L.PureComponent=al;L.StrictMode=Rm;L.Suspense=Dm;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$m;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ul.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)jd.call(t,l)&&!Ud.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ni,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:Om,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nm,_context:e},e.Consumer=e};L.createElement=Fd;L.createFactory=function(e){var t=Fd.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Am,render:e}};L.isValidElement=cl;L.lazy=function(e){return{$$typeof:Mm,_payload:{_status:-1,_result:e},_init:zm}};L.memo=function(e,t){return{$$typeof:Lm,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=zi.transition;zi.transition={};try{e()}finally{zi.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return fe.current.useCallback(e,t)};L.useContext=function(e){return fe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};L.useEffect=function(e,t){return fe.current.useEffect(e,t)};L.useId=function(){return fe.current.useId()};L.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return fe.current.useMemo(e,t)};L.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};L.useRef=function(e){return fe.current.useRef(e)};L.useState=function(e){return fe.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return fe.current.useTransition()};L.version="18.2.0";Od.exports=L;var S=Od.exports;const tn=Cm(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm=S,Bm=Symbol.for("react.element"),Vm=Symbol.for("react.fragment"),Hm=Object.prototype.hasOwnProperty,Wm=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Km={key:!0,ref:!0,__self:!0,__source:!0};function zd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Hm.call(t,r)&&!Km.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Bm,type:e,key:o,ref:s,props:i,_owner:Wm.current}}Mo.Fragment=Vm;Mo.jsx=zd;Mo.jsxs=zd;Nd.exports=Mo;var _=Nd.exports,ta={},$d={exports:{}},Te={},bd={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,O){var A=C.length;C.push(O);e:for(;0<A;){var G=A-1>>>1,Z=C[G];if(0<i(Z,O))C[G]=O,C[A]=Z,A=G;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var O=C[0],A=C.pop();if(A!==O){C[0]=A;e:for(var G=0,Z=C.length,mi=Z>>>1;G<mi;){var Kt=2*(G+1)-1,us=C[Kt],Gt=Kt+1,gi=C[Gt];if(0>i(us,A))Gt<Z&&0>i(gi,us)?(C[G]=gi,C[Gt]=A,G=Gt):(C[G]=us,C[Kt]=A,G=Kt);else if(Gt<Z&&0>i(gi,A))C[G]=gi,C[Gt]=A,G=Gt;else break e}}return O}function i(C,O){var A=C.sortIndex-O.sortIndex;return A!==0?A:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,h=null,m=3,g=!1,v=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=C)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function y(C){if(w=!1,p(C),!v)if(n(l)!==null)v=!0,as(I);else{var O=n(u);O!==null&&ls(y,O.startTime-C)}}function I(C,O){v=!1,w&&(w=!1,f(x),x=-1),g=!0;var A=m;try{for(p(O),h=n(l);h!==null&&(!(h.expirationTime>O)||C&&!Le());){var G=h.callback;if(typeof G=="function"){h.callback=null,m=h.priorityLevel;var Z=G(h.expirationTime<=O);O=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(l)&&r(l),p(O)}else r(l);h=n(l)}if(h!==null)var mi=!0;else{var Kt=n(u);Kt!==null&&ls(y,Kt.startTime-O),mi=!1}return mi}finally{h=null,m=A,g=!1}}var T=!1,P=null,x=-1,z=5,D=-1;function Le(){return!(e.unstable_now()-D<z)}function or(){if(P!==null){var C=e.unstable_now();D=C;var O=!0;try{O=P(!0,C)}finally{O?sr():(T=!1,P=null)}}else T=!1}var sr;if(typeof c=="function")sr=function(){c(or)};else if(typeof MessageChannel<"u"){var Cu=new MessageChannel,km=Cu.port2;Cu.port1.onmessage=or,sr=function(){km.postMessage(null)}}else sr=function(){R(or,0)};function as(C){P=C,T||(T=!0,sr())}function ls(C,O){x=R(function(){C(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,as(I))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var A=m;m=O;try{return C()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var A=m;m=C;try{return O()}finally{m=A}},e.unstable_scheduleCallback=function(C,O,A){var G=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?G+A:G):A=G,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,C={id:d++,callback:O,priorityLevel:C,startTime:A,expirationTime:Z,sortIndex:-1},A>G?(C.sortIndex=A,t(u,C),n(l)===null&&C===n(u)&&(w?(f(x),x=-1):w=!0,ls(y,A-G))):(C.sortIndex=Z,t(l,C),v||g||(v=!0,as(I))),C},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(C){var O=m;return function(){var A=m;m=O;try{return C.apply(this,arguments)}finally{m=A}}}})(Bd);bd.exports=Bd;var Gm=bd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd=S,Ce=Gm;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hd=new Set,Ar={};function gn(e,t){Vn(e,t),Vn(e+"Capture",t)}function Vn(e,t){for(Ar[e]=t,e=0;e<t.length;e++)Hd.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),na=Object.prototype.hasOwnProperty,Qm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xu={},Nu={};function qm(e){return na.call(Nu,e)?!0:na.call(xu,e)?!1:Qm.test(e)?Nu[e]=!0:(xu[e]=!0,!1)}function Ym(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jm(e,t,n,r){if(t===null||typeof t>"u"||Ym(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var dl=/[\-:]([a-z])/g;function fl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dl,fl);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dl,fl);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dl,fl);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function hl(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jm(t,n,i,r)&&(n=null),r||i===null?qm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yi=Symbol.for("react.element"),En=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),pl=Symbol.for("react.strict_mode"),ra=Symbol.for("react.profiler"),Wd=Symbol.for("react.provider"),Kd=Symbol.for("react.context"),ml=Symbol.for("react.forward_ref"),ia=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),gl=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Gd=Symbol.for("react.offscreen"),Ou=Symbol.iterator;function ar(e){return e===null||typeof e!="object"?null:(e=Ou&&e[Ou]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,ds;function mr(e){if(ds===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ds=t&&t[1]||""}return`
`+ds+e}var fs=!1;function hs(e,t){if(!e||fs)return"";fs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{fs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function Xm(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=hs(e.type,!1),e;case 11:return e=hs(e.type.render,!1),e;case 1:return e=hs(e.type,!0),e;default:return""}}function sa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case En:return"Portal";case ra:return"Profiler";case pl:return"StrictMode";case ia:return"Suspense";case oa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kd:return(e.displayName||"Context")+".Consumer";case Wd:return(e._context.displayName||"Context")+".Provider";case ml:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gl:return t=e.displayName||null,t!==null?t:sa(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return sa(e(t))}catch{}}return null}function Zm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sa(t);case 8:return t===pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function eg(e){var t=Qd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=eg(e))}function qd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function eo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function aa(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yd(e,t){t=t.checked,t!=null&&hl(e,"checked",t,!1)}function la(e,t){Yd(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ua(e,t.type,n):t.hasOwnProperty("defaultValue")&&ua(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Du(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ua(e,t,n){(t!=="number"||eo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ca(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(gr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function Jd(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function da(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _i,Zd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_i=_i||document.createElement("div"),_i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tg=["Webkit","ms","Moz","O"];Object.keys(Er).forEach(function(e){tg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Er[t]=Er[e]})});function ef(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Er.hasOwnProperty(e)&&Er[e]?(""+t).trim():t+"px"}function tf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ef(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ng=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(e,t){if(t){if(ng[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pa=null;function vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ma=null,Mn=null,jn=null;function ju(e){if(e=oi(e)){if(typeof ma!="function")throw Error(E(280));var t=e.stateNode;t&&(t=$o(t),ma(e.stateNode,e.type,t))}}function nf(e){Mn?jn?jn.push(e):jn=[e]:Mn=e}function rf(){if(Mn){var e=Mn,t=jn;if(jn=Mn=null,ju(e),t)for(e=0;e<t.length;e++)ju(t[e])}}function of(e,t){return e(t)}function sf(){}var ps=!1;function af(e,t,n){if(ps)return e(t,n);ps=!0;try{return of(e,t,n)}finally{ps=!1,(Mn!==null||jn!==null)&&(sf(),rf())}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=$o(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var ga=!1;if(lt)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){ga=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{ga=!1}function rg(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Sr=!1,to=null,no=!1,va=null,ig={onError:function(e){Sr=!0,to=e}};function og(e,t,n,r,i,o,s,a,l){Sr=!1,to=null,rg.apply(ig,arguments)}function sg(e,t,n,r,i,o,s,a,l){if(og.apply(this,arguments),Sr){if(Sr){var u=to;Sr=!1,to=null}else throw Error(E(198));no||(no=!0,va=u)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Uu(e){if(vn(e)!==e)throw Error(E(188))}function ag(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Uu(i),e;if(o===r)return Uu(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function uf(e){return e=ag(e),e!==null?cf(e):null}function cf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cf(e);if(t!==null)return t;e=e.sibling}return null}var df=Ce.unstable_scheduleCallback,Fu=Ce.unstable_cancelCallback,lg=Ce.unstable_shouldYield,ug=Ce.unstable_requestPaint,Q=Ce.unstable_now,cg=Ce.unstable_getCurrentPriorityLevel,yl=Ce.unstable_ImmediatePriority,ff=Ce.unstable_UserBlockingPriority,ro=Ce.unstable_NormalPriority,dg=Ce.unstable_LowPriority,hf=Ce.unstable_IdlePriority,jo=null,Ge=null;function fg(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(jo,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:mg,hg=Math.log,pg=Math.LN2;function mg(e){return e>>>=0,e===0?32:31-(hg(e)/pg|0)|0}var Ei=64,Si=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function io(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=vr(a):(o&=s,o!==0&&(r=vr(o)))}else s=n&~i,s!==0?r=vr(s):o!==0&&(r=vr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),i=1<<n,r|=e[n],t&=~i;return r}function gg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ze(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=gg(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function ya(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pf(){var e=Ei;return Ei<<=1,!(Ei&4194240)&&(Ei=64),e}function ms(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ri(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function yg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ze(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function wl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function mf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gf,_l,vf,yf,wf,wa=!1,Ii=[],Rt=null,xt=null,Nt=null,Mr=new Map,jr=new Map,wt=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zu(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function ur(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=oi(t),t!==null&&_l(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _g(e,t,n,r,i){switch(t){case"focusin":return Rt=ur(Rt,e,t,n,r,i),!0;case"dragenter":return xt=ur(xt,e,t,n,r,i),!0;case"mouseover":return Nt=ur(Nt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mr.set(o,ur(Mr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,jr.set(o,ur(jr.get(o)||null,e,t,n,r,i)),!0}return!1}function _f(e){var t=Jt(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=lf(n),t!==null){e.blockedOn=t,wf(e.priority,function(){vf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pa=r,n.target.dispatchEvent(r),pa=null}else return t=oi(n),t!==null&&_l(t),e.blockedOn=n,!1;t.shift()}return!0}function $u(e,t,n){$i(e)&&n.delete(t)}function Eg(){wa=!1,Rt!==null&&$i(Rt)&&(Rt=null),xt!==null&&$i(xt)&&(xt=null),Nt!==null&&$i(Nt)&&(Nt=null),Mr.forEach($u),jr.forEach($u)}function cr(e,t){e.blockedOn===t&&(e.blockedOn=null,wa||(wa=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Eg)))}function Ur(e){function t(i){return cr(i,e)}if(0<Ii.length){cr(Ii[0],e);for(var n=1;n<Ii.length;n++){var r=Ii[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&cr(Rt,e),xt!==null&&cr(xt,e),Nt!==null&&cr(Nt,e),Mr.forEach(t),jr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)_f(n),n.blockedOn===null&&wt.shift()}var Un=pt.ReactCurrentBatchConfig,oo=!0;function Sg(e,t,n,r){var i=j,o=Un.transition;Un.transition=null;try{j=1,El(e,t,n,r)}finally{j=i,Un.transition=o}}function Ig(e,t,n,r){var i=j,o=Un.transition;Un.transition=null;try{j=4,El(e,t,n,r)}finally{j=i,Un.transition=o}}function El(e,t,n,r){if(oo){var i=_a(e,t,n,r);if(i===null)Cs(e,t,r,so,n),zu(e,r);else if(_g(i,e,t,n,r))r.stopPropagation();else if(zu(e,r),t&4&&-1<wg.indexOf(e)){for(;i!==null;){var o=oi(i);if(o!==null&&gf(o),o=_a(e,t,n,r),o===null&&Cs(e,t,r,so,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Cs(e,t,r,null,n)}}var so=null;function _a(e,t,n,r){if(so=null,e=vl(r),e=Jt(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return so=e,null}function Ef(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cg()){case yl:return 1;case ff:return 4;case ro:case dg:return 16;case hf:return 536870912;default:return 16}default:return 16}}var Ct=null,Sl=null,bi=null;function Sf(){if(bi)return bi;var e,t=Sl,n=t.length,r,i="value"in Ct?Ct.value:Ct.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return bi=i.slice(e,1<r?1-r:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function bu(){return!1}function Pe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ki:bu,this.isPropagationStopped=bu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Pe(Zn),ii=W({},Zn,{view:0,detail:0}),kg=Pe(ii),gs,vs,dr,Uo=W({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(gs=e.screenX-dr.screenX,vs=e.screenY-dr.screenY):vs=gs=0,dr=e),gs)},movementY:function(e){return"movementY"in e?e.movementY:vs}}),Bu=Pe(Uo),Cg=W({},Uo,{dataTransfer:0}),Tg=Pe(Cg),Pg=W({},ii,{relatedTarget:0}),ys=Pe(Pg),Rg=W({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),xg=Pe(Rg),Ng=W({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Og=Pe(Ng),Ag=W({},Zn,{data:0}),Vu=Pe(Ag),Dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mg[e])?!!t[e]:!1}function kl(){return jg}var Ug=W({},ii,{key:function(e){if(e.key){var t=Dg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fg=Pe(Ug),zg=W({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hu=Pe(zg),$g=W({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),bg=Pe($g),Bg=W({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vg=Pe(Bg),Hg=W({},Uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wg=Pe(Hg),Kg=[9,13,27,32],Cl=lt&&"CompositionEvent"in window,Ir=null;lt&&"documentMode"in document&&(Ir=document.documentMode);var Gg=lt&&"TextEvent"in window&&!Ir,If=lt&&(!Cl||Ir&&8<Ir&&11>=Ir),Wu=String.fromCharCode(32),Ku=!1;function kf(e,t){switch(e){case"keyup":return Kg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function Qg(e,t){switch(e){case"compositionend":return Cf(t);case"keypress":return t.which!==32?null:(Ku=!0,Wu);case"textInput":return e=t.data,e===Wu&&Ku?null:e;default:return null}}function qg(e,t){if(In)return e==="compositionend"||!Cl&&kf(e,t)?(e=Sf(),bi=Sl=Ct=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return If&&t.locale!=="ko"?null:t.data;default:return null}}var Yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yg[e.type]:t==="textarea"}function Tf(e,t,n,r){nf(r),t=ao(t,"onChange"),0<t.length&&(n=new Il("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var kr=null,Fr=null;function Jg(e){Uf(e,0)}function Fo(e){var t=Tn(e);if(qd(t))return e}function Xg(e,t){if(e==="change")return t}var Pf=!1;if(lt){var ws;if(lt){var _s="oninput"in document;if(!_s){var Qu=document.createElement("div");Qu.setAttribute("oninput","return;"),_s=typeof Qu.oninput=="function"}ws=_s}else ws=!1;Pf=ws&&(!document.documentMode||9<document.documentMode)}function qu(){kr&&(kr.detachEvent("onpropertychange",Rf),Fr=kr=null)}function Rf(e){if(e.propertyName==="value"&&Fo(Fr)){var t=[];Tf(t,Fr,e,vl(e)),af(Jg,t)}}function Zg(e,t,n){e==="focusin"?(qu(),kr=t,Fr=n,kr.attachEvent("onpropertychange",Rf)):e==="focusout"&&qu()}function ev(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(Fr)}function tv(e,t){if(e==="click")return Fo(t)}function nv(e,t){if(e==="input"||e==="change")return Fo(t)}function rv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:rv;function zr(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!na.call(t,i)||!be(e[i],t[i]))return!1}return!0}function Yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ju(e,t){var n=Yu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yu(n)}}function xf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nf(){for(var e=window,t=eo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=eo(e.document)}return t}function Tl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function iv(e){var t=Nf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xf(n.ownerDocument.documentElement,n)){if(r!==null&&Tl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ju(n,o);var s=Ju(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ov=lt&&"documentMode"in document&&11>=document.documentMode,kn=null,Ea=null,Cr=null,Sa=!1;function Xu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sa||kn==null||kn!==eo(r)||(r=kn,"selectionStart"in r&&Tl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cr&&zr(Cr,r)||(Cr=r,r=ao(Ea,"onSelect"),0<r.length&&(t=new Il("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function Ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionend:Ci("Transition","TransitionEnd")},Es={},Of={};lt&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function zo(e){if(Es[e])return Es[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Of)return Es[e]=t[n];return e}var Af=zo("animationend"),Df=zo("animationiteration"),Lf=zo("animationstart"),Mf=zo("transitionend"),jf=new Map,Zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){jf.set(e,t),gn(t,[e])}for(var Ss=0;Ss<Zu.length;Ss++){var Is=Zu[Ss],sv=Is.toLowerCase(),av=Is[0].toUpperCase()+Is.slice(1);Bt(sv,"on"+av)}Bt(Af,"onAnimationEnd");Bt(Df,"onAnimationIteration");Bt(Lf,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(Mf,"onTransitionEnd");Vn("onMouseEnter",["mouseout","mouseover"]);Vn("onMouseLeave",["mouseout","mouseover"]);Vn("onPointerEnter",["pointerout","pointerover"]);Vn("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function ec(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sg(r,t,void 0,e),e.currentTarget=null}function Uf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ec(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ec(i,a,u),o=l}}}if(no)throw e=va,no=!1,va=null,e}function $(e,t){var n=t[Pa];n===void 0&&(n=t[Pa]=new Set);var r=e+"__bubble";n.has(r)||(Ff(t,e,2,!1),n.add(r))}function ks(e,t,n){var r=0;t&&(r|=4),Ff(n,e,r,t)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[Ti]){e[Ti]=!0,Hd.forEach(function(n){n!=="selectionchange"&&(lv.has(n)||ks(n,!1,e),ks(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ti]||(t[Ti]=!0,ks("selectionchange",!1,t))}}function Ff(e,t,n,r){switch(Ef(t)){case 1:var i=Sg;break;case 4:i=Ig;break;default:i=El}n=i.bind(null,t,n,e),i=void 0,!ga||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Cs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Jt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}af(function(){var u=o,d=vl(n),h=[];e:{var m=jf.get(e);if(m!==void 0){var g=Il,v=e;switch(e){case"keypress":if(Bi(n)===0)break e;case"keydown":case"keyup":g=Fg;break;case"focusin":v="focus",g=ys;break;case"focusout":v="blur",g=ys;break;case"beforeblur":case"afterblur":g=ys;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=bg;break;case Af:case Df:case Lf:g=xg;break;case Mf:g=Vg;break;case"scroll":g=kg;break;case"wheel":g=Wg;break;case"copy":case"cut":case"paste":g=Og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Hu}var w=(t&4)!==0,R=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Lr(c,f),y!=null&&w.push(br(c,y,p)))),R)break;c=c.return}0<w.length&&(m=new g(m,v,null,n,d),h.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==pa&&(v=n.relatedTarget||n.fromElement)&&(Jt(v)||v[ut]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Jt(v):null,v!==null&&(R=vn(v),v!==R||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=Bu,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Hu,y="onPointerLeave",f="onPointerEnter",c="pointer"),R=g==null?m:Tn(g),p=v==null?m:Tn(v),m=new w(y,c+"leave",g,n,d),m.target=R,m.relatedTarget=p,y=null,Jt(d)===u&&(w=new w(f,c+"enter",v,n,d),w.target=p,w.relatedTarget=R,y=w),R=y,g&&v)t:{for(w=g,f=v,c=0,p=w;p;p=wn(p))c++;for(p=0,y=f;y;y=wn(y))p++;for(;0<c-p;)w=wn(w),c--;for(;0<p-c;)f=wn(f),p--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=wn(w),f=wn(f)}w=null}else w=null;g!==null&&tc(h,m,g,w,!1),v!==null&&R!==null&&tc(h,R,v,w,!0)}}e:{if(m=u?Tn(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var I=Xg;else if(Gu(m))if(Pf)I=nv;else{I=ev;var T=Zg}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=tv);if(I&&(I=I(e,u))){Tf(h,I,n,d);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&ua(m,"number",m.value)}switch(T=u?Tn(u):window,e){case"focusin":(Gu(T)||T.contentEditable==="true")&&(kn=T,Ea=u,Cr=null);break;case"focusout":Cr=Ea=kn=null;break;case"mousedown":Sa=!0;break;case"contextmenu":case"mouseup":case"dragend":Sa=!1,Xu(h,n,d);break;case"selectionchange":if(ov)break;case"keydown":case"keyup":Xu(h,n,d)}var P;if(Cl)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else In?kf(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(If&&n.locale!=="ko"&&(In||x!=="onCompositionStart"?x==="onCompositionEnd"&&In&&(P=Sf()):(Ct=d,Sl="value"in Ct?Ct.value:Ct.textContent,In=!0)),T=ao(u,x),0<T.length&&(x=new Vu(x,e,null,n,d),h.push({event:x,listeners:T}),P?x.data=P:(P=Cf(n),P!==null&&(x.data=P)))),(P=Gg?Qg(e,n):qg(e,n))&&(u=ao(u,"onBeforeInput"),0<u.length&&(d=new Vu("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=P))}Uf(h,t)})}function br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ao(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Lr(e,n),o!=null&&r.unshift(br(e,o,i)),o=Lr(e,t),o!=null&&r.push(br(e,o,i))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Lr(n,o),l!=null&&s.unshift(br(n,l,a))):i||(l=Lr(n,o),l!=null&&s.push(br(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var uv=/\r\n?/g,cv=/\u0000|\uFFFD/g;function nc(e){return(typeof e=="string"?e:""+e).replace(uv,`
`).replace(cv,"")}function Pi(e,t,n){if(t=nc(t),nc(e)!==t&&n)throw Error(E(425))}function lo(){}var Ia=null,ka=null;function Ca(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,dv=typeof clearTimeout=="function"?clearTimeout:void 0,rc=typeof Promise=="function"?Promise:void 0,fv=typeof queueMicrotask=="function"?queueMicrotask:typeof rc<"u"?function(e){return rc.resolve(null).then(e).catch(hv)}:Ta;function hv(e){setTimeout(function(){throw e})}function Ts(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ur(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),Ke="__reactFiber$"+er,Br="__reactProps$"+er,ut="__reactContainer$"+er,Pa="__reactEvents$"+er,pv="__reactListeners$"+er,mv="__reactHandles$"+er;function Jt(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ic(e);e!==null;){if(n=e[Ke])return n;e=ic(e)}return t}e=n,n=e.parentNode}return null}function oi(e){return e=e[Ke]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function $o(e){return e[Br]||null}var Ra=[],Pn=-1;function Vt(e){return{current:e}}function b(e){0>Pn||(e.current=Ra[Pn],Ra[Pn]=null,Pn--)}function F(e,t){Pn++,Ra[Pn]=e.current,e.current=t}var bt={},le=Vt(bt),ve=Vt(!1),an=bt;function Hn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function uo(){b(ve),b(le)}function oc(e,t,n){if(le.current!==bt)throw Error(E(168));F(le,t),F(ve,n)}function zf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Zm(e)||"Unknown",i));return W({},n,r)}function co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,an=le.current,F(le,e),F(ve,ve.current),!0}function sc(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=zf(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,b(ve),b(le),F(le,e)):b(ve),F(ve,n)}var nt=null,bo=!1,Ps=!1;function $f(e){nt===null?nt=[e]:nt.push(e)}function gv(e){bo=!0,$f(e)}function Ht(){if(!Ps&&nt!==null){Ps=!0;var e=0,t=j;try{var n=nt;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,bo=!1}catch(i){throw nt!==null&&(nt=nt.slice(e+1)),df(yl,Ht),i}finally{j=t,Ps=!1}}return null}var Rn=[],xn=0,fo=null,ho=0,Re=[],xe=0,ln=null,rt=1,it="";function Qt(e,t){Rn[xn++]=ho,Rn[xn++]=fo,fo=e,ho=t}function bf(e,t,n){Re[xe++]=rt,Re[xe++]=it,Re[xe++]=ln,ln=e;var r=rt;e=it;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var o=32-ze(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,rt=1<<32-ze(t)+i|n<<i|r,it=o+e}else rt=1<<o|n<<i|r,it=e}function Pl(e){e.return!==null&&(Qt(e,1),bf(e,1,0))}function Rl(e){for(;e===fo;)fo=Rn[--xn],Rn[xn]=null,ho=Rn[--xn],Rn[xn]=null;for(;e===ln;)ln=Re[--xe],Re[xe]=null,it=Re[--xe],Re[xe]=null,rt=Re[--xe],Re[xe]=null}var Ie=null,Se=null,B=!1,Fe=null;function Bf(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ac(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Se=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:rt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,Se=null,!0):!1;default:return!1}}function xa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Na(e){if(B){var t=Se;if(t){var n=t;if(!ac(e,t)){if(xa(e))throw Error(E(418));t=Ot(n.nextSibling);var r=Ie;t&&ac(e,t)?Bf(r,n):(e.flags=e.flags&-4097|2,B=!1,Ie=e)}}else{if(xa(e))throw Error(E(418));e.flags=e.flags&-4097|2,B=!1,Ie=e}}}function lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Ri(e){if(e!==Ie)return!1;if(!B)return lc(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ca(e.type,e.memoizedProps)),t&&(t=Se)){if(xa(e))throw Vf(),Error(E(418));for(;t;)Bf(e,t),t=Ot(t.nextSibling)}if(lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ie?Ot(e.stateNode.nextSibling):null;return!0}function Vf(){for(var e=Se;e;)e=Ot(e.nextSibling)}function Wn(){Se=Ie=null,B=!1}function xl(e){Fe===null?Fe=[e]:Fe.push(e)}var vv=pt.ReactCurrentBatchConfig;function je(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var po=Vt(null),mo=null,Nn=null,Nl=null;function Ol(){Nl=Nn=mo=null}function Al(e){var t=po.current;b(po),e._currentValue=t}function Oa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){mo=e,Nl=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Nl!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(mo===null)throw Error(E(308));Nn=e,mo.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var Xt=null;function Dl(e){Xt===null?Xt=[e]:Xt.push(e)}function Hf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dl(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function Ll(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,Dl(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function Vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wl(e,n)}}function uc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function go(e,t,n,r){var i=e.updateQueue;yt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(m=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(g,h,m);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(g,h,m):v,m==null)break e;h=W({},h,m);break e;case 2:yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=h):d=d.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);cn|=s,e.lanes=s,e.memoizedState=h}}function cc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Kf=new Vd.Component().refs;function Aa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bo={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=Lt(e),o=at(r,i);o.payload=t,n!=null&&(o.callback=n),t=At(e,o,i),t!==null&&($e(t,e,i,r),Vi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=Lt(e),o=at(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=At(e,o,i),t!==null&&($e(t,e,i,r),Vi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=Lt(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=At(e,i,r),t!==null&&($e(t,e,r,n),Vi(t,e,r))}};function dc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(i,o):!0}function Gf(e,t,n){var r=!1,i=bt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(i=ye(t)?an:le.current,r=t.contextTypes,o=(r=r!=null)?Hn(e,i):bt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function fc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bo.enqueueReplaceState(t,t.state,null)}function Da(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Kf,Ll(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ae(o):(o=ye(t)?an:le.current,i.context=Hn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Aa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Bo.enqueueReplaceState(i,i.state,null),go(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Kf&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function xi(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hc(e){var t=e._init;return t(e._payload)}function Qf(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Mt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,y){return c===null||c.tag!==6?(c=Ls(p,f.mode,y),c.return=f,c):(c=i(c,p),c.return=f,c)}function l(f,c,p,y){var I=p.type;return I===Sn?d(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===vt&&hc(I)===c.type)?(y=i(c,p.props),y.ref=fr(f,c,p),y.return=f,y):(y=qi(p.type,p.key,p.props,null,f.mode,y),y.ref=fr(f,c,p),y.return=f,y)}function u(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Ms(p,f.mode,y),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function d(f,c,p,y,I){return c===null||c.tag!==7?(c=rn(p,f.mode,y,I),c.return=f,c):(c=i(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ls(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case yi:return p=qi(c.type,c.key,c.props,null,f.mode,p),p.ref=fr(f,null,c),p.return=f,p;case En:return c=Ms(c,f.mode,p),c.return=f,c;case vt:var y=c._init;return h(f,y(c._payload),p)}if(gr(c)||ar(c))return c=rn(c,f.mode,p,null),c.return=f,c;xi(f,c)}return null}function m(f,c,p,y){var I=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return I!==null?null:a(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yi:return p.key===I?l(f,c,p,y):null;case En:return p.key===I?u(f,c,p,y):null;case vt:return I=p._init,m(f,c,I(p._payload),y)}if(gr(p)||ar(p))return I!==null?null:d(f,c,p,y,null);xi(f,p)}return null}function g(f,c,p,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(c,f,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yi:return f=f.get(y.key===null?p:y.key)||null,l(c,f,y,I);case En:return f=f.get(y.key===null?p:y.key)||null,u(c,f,y,I);case vt:var T=y._init;return g(f,c,p,T(y._payload),I)}if(gr(y)||ar(y))return f=f.get(p)||null,d(c,f,y,I,null);xi(c,y)}return null}function v(f,c,p,y){for(var I=null,T=null,P=c,x=c=0,z=null;P!==null&&x<p.length;x++){P.index>x?(z=P,P=null):z=P.sibling;var D=m(f,P,p[x],y);if(D===null){P===null&&(P=z);break}e&&P&&D.alternate===null&&t(f,P),c=o(D,c,x),T===null?I=D:T.sibling=D,T=D,P=z}if(x===p.length)return n(f,P),B&&Qt(f,x),I;if(P===null){for(;x<p.length;x++)P=h(f,p[x],y),P!==null&&(c=o(P,c,x),T===null?I=P:T.sibling=P,T=P);return B&&Qt(f,x),I}for(P=r(f,P);x<p.length;x++)z=g(P,f,x,p[x],y),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?x:z.key),c=o(z,c,x),T===null?I=z:T.sibling=z,T=z);return e&&P.forEach(function(Le){return t(f,Le)}),B&&Qt(f,x),I}function w(f,c,p,y){var I=ar(p);if(typeof I!="function")throw Error(E(150));if(p=I.call(p),p==null)throw Error(E(151));for(var T=I=null,P=c,x=c=0,z=null,D=p.next();P!==null&&!D.done;x++,D=p.next()){P.index>x?(z=P,P=null):z=P.sibling;var Le=m(f,P,D.value,y);if(Le===null){P===null&&(P=z);break}e&&P&&Le.alternate===null&&t(f,P),c=o(Le,c,x),T===null?I=Le:T.sibling=Le,T=Le,P=z}if(D.done)return n(f,P),B&&Qt(f,x),I;if(P===null){for(;!D.done;x++,D=p.next())D=h(f,D.value,y),D!==null&&(c=o(D,c,x),T===null?I=D:T.sibling=D,T=D);return B&&Qt(f,x),I}for(P=r(f,P);!D.done;x++,D=p.next())D=g(P,f,x,D.value,y),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?x:D.key),c=o(D,c,x),T===null?I=D:T.sibling=D,T=D);return e&&P.forEach(function(or){return t(f,or)}),B&&Qt(f,x),I}function R(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Sn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yi:e:{for(var I=p.key,T=c;T!==null;){if(T.key===I){if(I=p.type,I===Sn){if(T.tag===7){n(f,T.sibling),c=i(T,p.props.children),c.return=f,f=c;break e}}else if(T.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===vt&&hc(I)===T.type){n(f,T.sibling),c=i(T,p.props),c.ref=fr(f,T,p),c.return=f,f=c;break e}n(f,T);break}else t(f,T);T=T.sibling}p.type===Sn?(c=rn(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=qi(p.type,p.key,p.props,null,f.mode,y),y.ref=fr(f,c,p),y.return=f,f=y)}return s(f);case En:e:{for(T=p.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Ms(p,f.mode,y),c.return=f,f=c}return s(f);case vt:return T=p._init,R(f,c,T(p._payload),y)}if(gr(p))return v(f,c,p,y);if(ar(p))return w(f,c,p,y);xi(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=Ls(p,f.mode,y),c.return=f,f=c),s(f)):n(f,c)}return R}var Kn=Qf(!0),qf=Qf(!1),si={},Qe=Vt(si),Vr=Vt(si),Hr=Vt(si);function Zt(e){if(e===si)throw Error(E(174));return e}function Ml(e,t){switch(F(Hr,t),F(Vr,e),F(Qe,si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:da(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=da(t,e)}b(Qe),F(Qe,t)}function Gn(){b(Qe),b(Vr),b(Hr)}function Yf(e){Zt(Hr.current);var t=Zt(Qe.current),n=da(t,e.type);t!==n&&(F(Vr,e),F(Qe,n))}function jl(e){Vr.current===e&&(b(Qe),b(Vr))}var V=Vt(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rs=[];function Ul(){for(var e=0;e<Rs.length;e++)Rs[e]._workInProgressVersionPrimary=null;Rs.length=0}var Hi=pt.ReactCurrentDispatcher,xs=pt.ReactCurrentBatchConfig,un=0,H=null,J=null,ee=null,yo=!1,Tr=!1,Wr=0,yv=0;function oe(){throw Error(E(321))}function Fl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function zl(e,t,n,r,i,o){if(un=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hi.current=e===null||e.memoizedState===null?Sv:Iv,e=n(r,i),Tr){o=0;do{if(Tr=!1,Wr=0,25<=o)throw Error(E(301));o+=1,ee=J=null,t.updateQueue=null,Hi.current=kv,e=n(r,i)}while(Tr)}if(Hi.current=wo,t=J!==null&&J.next!==null,un=0,ee=J=H=null,yo=!1,t)throw Error(E(300));return e}function $l(){var e=Wr!==0;return Wr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function De(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(E(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function Kr(e,t){return typeof t=="function"?t(e):t}function Ns(e){var t=De(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((un&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,H.lanes|=d,cn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,be(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,cn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Os(e){var t=De(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);be(o,t.memoizedState)||(ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Jf(){}function Xf(e,t){var n=H,r=De(),i=t(),o=!be(r.memoizedState,i);if(o&&(r.memoizedState=i,ge=!0),r=r.queue,bl(th.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Gr(9,eh.bind(null,n,r,i,t),void 0,null),te===null)throw Error(E(349));un&30||Zf(n,t,i)}return i}function Zf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function eh(e,t,n,r){t.value=n,t.getSnapshot=r,nh(t)&&rh(e)}function th(e,t,n){return n(function(){nh(t)&&rh(e)})}function nh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function rh(e){var t=ct(e,1);t!==null&&$e(t,e,1,-1)}function pc(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ev.bind(null,H,e),[t.memoizedState,e]}function Gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ih(){return De().memoizedState}function Wi(e,t,n,r){var i=We();H.flags|=e,i.memoizedState=Gr(1|t,n,void 0,r===void 0?null:r)}function Vo(e,t,n,r){var i=De();r=r===void 0?null:r;var o=void 0;if(J!==null){var s=J.memoizedState;if(o=s.destroy,r!==null&&Fl(r,s.deps)){i.memoizedState=Gr(t,n,o,r);return}}H.flags|=e,i.memoizedState=Gr(1|t,n,o,r)}function mc(e,t){return Wi(8390656,8,e,t)}function bl(e,t){return Vo(2048,8,e,t)}function oh(e,t){return Vo(4,2,e,t)}function sh(e,t){return Vo(4,4,e,t)}function ah(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lh(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4,4,ah.bind(null,t,e),n)}function Bl(){}function uh(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ch(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dh(e,t,n){return un&21?(be(n,t)||(n=pf(),H.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function wv(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=xs.transition;xs.transition={};try{e(!1),t()}finally{j=n,xs.transition=r}}function fh(){return De().memoizedState}function _v(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hh(e))ph(t,n);else if(n=Hf(e,t,n,r),n!==null){var i=de();$e(n,e,r,i),mh(n,t,r)}}function Ev(e,t,n){var r=Lt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hh(e))ph(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,be(a,s)){var l=t.interleaved;l===null?(i.next=i,Dl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Hf(e,t,i,r),n!==null&&(i=de(),$e(n,e,r,i),mh(n,t,r))}}function hh(e){var t=e.alternate;return e===H||t!==null&&t===H}function ph(e,t){Tr=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wl(e,n)}}var wo={readContext:Ae,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Sv={readContext:Ae,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:mc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4194308,4,ah.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wi(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_v.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:pc,useDebugValue:Bl,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=pc(!1),t=e[0];return e=wv.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=We();if(B){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),te===null)throw Error(E(349));un&30||Zf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,mc(th.bind(null,r,o,e),[e]),r.flags|=2048,Gr(9,eh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=We(),t=te.identifierPrefix;if(B){var n=it,r=rt;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Iv={readContext:Ae,useCallback:uh,useContext:Ae,useEffect:bl,useImperativeHandle:lh,useInsertionEffect:oh,useLayoutEffect:sh,useMemo:ch,useReducer:Ns,useRef:ih,useState:function(){return Ns(Kr)},useDebugValue:Bl,useDeferredValue:function(e){var t=De();return dh(t,J.memoizedState,e)},useTransition:function(){var e=Ns(Kr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Jf,useSyncExternalStore:Xf,useId:fh,unstable_isNewReconciler:!1},kv={readContext:Ae,useCallback:uh,useContext:Ae,useEffect:bl,useImperativeHandle:lh,useInsertionEffect:oh,useLayoutEffect:sh,useMemo:ch,useReducer:Os,useRef:ih,useState:function(){return Os(Kr)},useDebugValue:Bl,useDeferredValue:function(e){var t=De();return J===null?t.memoizedState=e:dh(t,J.memoizedState,e)},useTransition:function(){var e=Os(Kr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Jf,useSyncExternalStore:Xf,useId:fh,unstable_isNewReconciler:!1};function Qn(e,t){try{var n="",r=t;do n+=Xm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function As(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function La(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cv=typeof WeakMap=="function"?WeakMap:Map;function gh(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Eo||(Eo=!0,Ha=r),La(e,t)},n}function vh(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){La(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){La(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function gc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zv.bind(null,e,t,n),t.then(e,e))}function vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,At(n,t,1))),n.lanes|=1),e)}var Tv=pt.ReactCurrentOwner,ge=!1;function ce(e,t,n,r){t.child=e===null?qf(t,null,n,r):Kn(t,e.child,n,r)}function wc(e,t,n,r,i){n=n.render;var o=t.ref;return Fn(t,i),r=zl(e,t,n,r,o,i),n=$l(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(B&&n&&Pl(t),t.flags|=1,ce(e,t,r,i),t.child)}function _c(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Yl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,yh(e,t,o,r,i)):(e=qi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:zr,n(s,r)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=Mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function yh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(zr(o,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,dt(e,t,i)}return Ma(e,t,n,r,i)}function wh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(An,Ee),Ee|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(An,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,F(An,Ee),Ee|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,F(An,Ee),Ee|=r;return ce(e,t,i,n),t.child}function _h(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ma(e,t,n,r,i){var o=ye(n)?an:le.current;return o=Hn(t,o),Fn(t,i),n=zl(e,t,n,r,o,i),r=$l(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(B&&r&&Pl(t),t.flags|=1,ce(e,t,n,i),t.child)}function Ec(e,t,n,r,i){if(ye(n)){var o=!0;co(t)}else o=!1;if(Fn(t,i),t.stateNode===null)Ki(e,t),Gf(t,n,r),Da(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=ye(n)?an:le.current,u=Hn(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&fc(t,s,r,u),yt=!1;var m=t.memoizedState;s.state=m,go(t,r,s,i),l=t.memoizedState,a!==r||m!==l||ve.current||yt?(typeof d=="function"&&(Aa(t,n,d,r),l=t.memoizedState),(a=yt||dc(t,n,a,r,m,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Wf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:je(t.type,a),s.props=u,h=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ae(l):(l=ye(n)?an:le.current,l=Hn(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||m!==l)&&fc(t,s,r,l),yt=!1,m=t.memoizedState,s.state=m,go(t,r,s,i);var v=t.memoizedState;a!==h||m!==v||ve.current||yt?(typeof g=="function"&&(Aa(t,n,g,r),v=t.memoizedState),(u=yt||dc(t,n,u,r,m,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ja(e,t,n,r,o,i)}function ja(e,t,n,r,i,o){_h(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&sc(t,n,!1),dt(e,t,o);r=t.stateNode,Tv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Kn(t,e.child,null,o),t.child=Kn(t,null,a,o)):ce(e,t,a,o),t.memoizedState=r.state,i&&sc(t,n,!0),t.child}function Eh(e){var t=e.stateNode;t.pendingContext?oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oc(e,t.context,!1),Ml(e,t.containerInfo)}function Sc(e,t,n,r,i){return Wn(),xl(i),t.flags|=256,ce(e,t,n,r),t.child}var Ua={dehydrated:null,treeContext:null,retryLane:0};function Fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sh(e,t,n){var r=t.pendingProps,i=V.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(V,i&1),e===null)return Na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ko(s,r,0,null),e=rn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fa(n),t.memoizedState=Ua,e):Vl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Pv(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Mt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Mt(a,o):(o=rn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Fa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ua,r}return o=e.child,e=o.sibling,r=Mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vl(e,t){return t=Ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ni(e,t,n,r){return r!==null&&xl(r),Kn(t,e.child,null,n),e=Vl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=As(Error(E(422))),Ni(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ko({mode:"visible",children:r.children},i,0,null),o=rn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Kn(t,e.child,null,s),t.child.memoizedState=Fa(s),t.memoizedState=Ua,o);if(!(t.mode&1))return Ni(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=As(o,r,void 0),Ni(e,t,s,r)}if(a=(s&e.childLanes)!==0,ge||a){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ct(e,i),$e(r,e,i,-1))}return ql(),r=As(Error(E(421))),Ni(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$v.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Se=Ot(i.nextSibling),Ie=t,B=!0,Fe=null,e!==null&&(Re[xe++]=rt,Re[xe++]=it,Re[xe++]=ln,rt=e.id,it=e.overflow,ln=t),t=Vl(t,r.children),t.flags|=4096,t)}function Ic(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oa(e.return,t,n)}function Ds(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ih(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ic(e,n,t);else if(e.tag===19)Ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ds(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ds(t,!0,n,null,o);break;case"together":Ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rv(e,t,n){switch(t.tag){case 3:Eh(t),Wn();break;case 5:Yf(t);break;case 1:ye(t.type)&&co(t);break;case 4:Ml(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(po,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Sh(e,t,n):(F(V,V.current&1),e=dt(e,t,n),e!==null?e.sibling:null);F(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ih(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,wh(e,t,n)}return dt(e,t,n)}var kh,za,Ch,Th;kh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};za=function(){};Ch=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zt(Qe.current);var o=null;switch(n){case"input":i=aa(e,i),r=aa(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=ca(e,i),r=ca(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lo)}fa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ar.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Th=function(e,t,n,r){n!==r&&(t.flags|=4)};function hr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xv(e,t,n){var r=t.pendingProps;switch(Rl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ye(t.type)&&uo(),se(t),null;case 3:return r=t.stateNode,Gn(),b(ve),b(le),Ul(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fe!==null&&(Ga(Fe),Fe=null))),za(e,t),se(t),null;case 5:jl(t);var i=Zt(Hr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ch(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return se(t),null}if(e=Zt(Qe.current),Ri(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ke]=t,r[Br]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<yr.length;i++)$(yr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Au(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":Lu(r,o),$("invalid",r)}fa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Pi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Pi(r.textContent,a,e),i=["children",""+a]):Ar.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&$("scroll",r)}switch(n){case"input":wi(r),Du(r,o,!0);break;case"textarea":wi(r),Mu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=lo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ke]=t,e[Br]=r,kh(e,t,!1,!1),t.stateNode=e;e:{switch(s=ha(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<yr.length;i++)$(yr[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":Au(e,r),i=aa(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),$("invalid",e);break;case"textarea":Lu(e,r),i=ca(e,r),$("invalid",e);break;default:i=r}fa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?tf(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Dr(e,l):typeof l=="number"&&Dr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ar.hasOwnProperty(o)?l!=null&&o==="onScroll"&&$("scroll",e):l!=null&&hl(e,o,l,s))}switch(n){case"input":wi(e),Du(e,r,!1);break;case"textarea":wi(e),Mu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Th(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Zt(Hr.current),Zt(Qe.current),Ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ke]=t,(o=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:Pi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=t,t.stateNode=r}return se(t),null;case 13:if(b(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Se!==null&&t.mode&1&&!(t.flags&128))Vf(),Wn(),t.flags|=98560,o=!1;else if(o=Ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[Ke]=t}else Wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Fe!==null&&(Ga(Fe),Fe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):ql())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Gn(),za(e,t),e===null&&$r(t.stateNode.containerInfo),se(t),null;case 10:return Al(t.type._context),se(t),null;case 17:return ye(t.type)&&uo(),se(t),null;case 19:if(b(V),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)hr(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=vo(e),s!==null){for(t.flags|=128,hr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>qn&&(t.flags|=128,r=!0,hr(o,!1),t.lanes=4194304)}else{if(!r)if(e=vo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!B)return se(t),null}else 2*Q()-o.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,hr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=V.current,F(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Ql(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Nv(e,t){switch(Rl(t),t.tag){case 1:return ye(t.type)&&uo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),b(ve),b(le),Ul(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jl(t),null;case 13:if(b(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(V),null;case 4:return Gn(),null;case 10:return Al(t.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var Oi=!1,ae=!1,Ov=typeof WeakSet=="function"?WeakSet:Set,k=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function $a(e,t,n){try{n()}catch(r){K(e,t,r)}}var kc=!1;function Av(e,t){if(Ia=oo,e=Nf(),Tl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,h=e,m=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ka={focusedElem:e,selectionRange:n},oo=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,R=v.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:je(t.type,w),R);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){K(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return v=kc,kc=!1,v}function Pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&$a(t,n,o)}i=i.next}while(i!==r)}}function Ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ba(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ph(e){var t=e.alternate;t!==null&&(e.alternate=null,Ph(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[Br],delete t[Pa],delete t[pv],delete t[mv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rh(e){return e.tag===5||e.tag===3||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lo));else if(r!==4&&(e=e.child,e!==null))for(Ba(e,t,n),e=e.sibling;e!==null;)Ba(e,t,n),e=e.sibling}function Va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Va(e,t,n),e=e.sibling;e!==null;)Va(e,t,n),e=e.sibling}var ne=null,Ue=!1;function mt(e,t,n){for(n=n.child;n!==null;)xh(e,t,n),n=n.sibling}function xh(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(jo,n)}catch{}switch(n.tag){case 5:ae||On(n,t);case 6:var r=ne,i=Ue;ne=null,mt(e,t,n),ne=r,Ue=i,ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?Ts(e.parentNode,n):e.nodeType===1&&Ts(e,n),Ur(e)):Ts(ne,n.stateNode));break;case 4:r=ne,i=Ue,ne=n.stateNode.containerInfo,Ue=!0,mt(e,t,n),ne=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&$a(n,t,s),i=i.next}while(i!==r)}mt(e,t,n);break;case 1:if(!ae&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,mt(e,t,n),ae=r):mt(e,t,n);break;default:mt(e,t,n)}}function Tc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ov),t.forEach(function(r){var i=bv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ue=!1;break e;case 3:ne=a.stateNode.containerInfo,Ue=!0;break e;case 4:ne=a.stateNode.containerInfo,Ue=!0;break e}a=a.return}if(ne===null)throw Error(E(160));xh(o,s,i),ne=null,Ue=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nh(t,e),t=t.sibling}function Nh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),He(e),r&4){try{Pr(3,e,e.return),Ho(3,e)}catch(w){K(e,e.return,w)}try{Pr(5,e,e.return)}catch(w){K(e,e.return,w)}}break;case 1:Me(t,e),He(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(Me(t,e),He(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var i=e.stateNode;try{Dr(i,"")}catch(w){K(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Yd(i,o),ha(a,s);var u=ha(a,o);for(s=0;s<l.length;s+=2){var d=l[s],h=l[s+1];d==="style"?tf(i,h):d==="dangerouslySetInnerHTML"?Zd(i,h):d==="children"?Dr(i,h):hl(i,d,h,u)}switch(a){case"input":la(i,o);break;case"textarea":Jd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Ln(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Br]=o}catch(w){K(e,e.return,w)}}break;case 6:if(Me(t,e),He(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){K(e,e.return,w)}}break;case 3:if(Me(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ur(t.containerInfo)}catch(w){K(e,e.return,w)}break;case 4:Me(t,e),He(e);break;case 13:Me(t,e),He(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Kl=Q())),r&4&&Tc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||d,Me(t,e),ae=u):Me(t,e),He(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(k=e,d=e.child;d!==null;){for(h=k=d;k!==null;){switch(m=k,g=m.child,m.tag){case 0:case 11:case 14:case 15:Pr(4,m,m.return);break;case 1:On(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){K(r,n,w)}}break;case 5:On(m,m.return);break;case 22:if(m.memoizedState!==null){Rc(h);continue}}g!==null?(g.return=m,k=g):Rc(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ef("display",s))}catch(w){K(e,e.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){K(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Me(t,e),He(e),r&4&&Tc(e);break;case 21:break;default:Me(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rh(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dr(i,""),r.flags&=-33);var o=Cc(e);Va(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Cc(e);Ba(e,a,s);break;default:throw Error(E(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dv(e,t,n){k=e,Oh(e)}function Oh(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var i=k,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Oi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=Oi;var u=ae;if(Oi=s,(ae=l)&&!u)for(k=i;k!==null;)s=k,l=s.child,s.tag===22&&s.memoizedState!==null?xc(i):l!==null?(l.return=s,k=l):xc(i);for(;o!==null;)k=o,Oh(o),o=o.sibling;k=i,Oi=a,ae=u}Pc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,k=o):Pc(e)}}function Pc(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Ho(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&cc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Ur(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ae||t.flags&512&&ba(t)}catch(m){K(t,t.return,m)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Rc(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function xc(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ho(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var o=t.return;try{ba(t)}catch(l){K(t,o,l)}break;case 5:var s=t.return;try{ba(t)}catch(l){K(t,s,l)}}}catch(l){K(t,t.return,l)}if(t===e){k=null;break}var a=t.sibling;if(a!==null){a.return=t.return,k=a;break}k=t.return}}var Lv=Math.ceil,_o=pt.ReactCurrentDispatcher,Hl=pt.ReactCurrentOwner,Oe=pt.ReactCurrentBatchConfig,M=0,te=null,q=null,re=0,Ee=0,An=Vt(0),X=0,Qr=null,cn=0,Wo=0,Wl=0,Rr=null,me=null,Kl=0,qn=1/0,tt=null,Eo=!1,Ha=null,Dt=null,Ai=!1,Tt=null,So=0,xr=0,Wa=null,Gi=-1,Qi=0;function de(){return M&6?Q():Gi!==-1?Gi:Gi=Q()}function Lt(e){return e.mode&1?M&2&&re!==0?re&-re:vv.transition!==null?(Qi===0&&(Qi=pf()),Qi):(e=j,e!==0||(e=window.event,e=e===void 0?16:Ef(e.type)),e):1}function $e(e,t,n,r){if(50<xr)throw xr=0,Wa=null,Error(E(185));ri(e,n,r),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(Wo|=n),X===4&&_t(e,re)),we(e,r),n===1&&M===0&&!(t.mode&1)&&(qn=Q()+500,bo&&Ht()))}function we(e,t){var n=e.callbackNode;vg(e,t);var r=io(e,e===te?re:0);if(r===0)n!==null&&Fu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fu(n),t===1)e.tag===0?gv(Nc.bind(null,e)):$f(Nc.bind(null,e)),fv(function(){!(M&6)&&Ht()}),n=null;else{switch(mf(r)){case 1:n=yl;break;case 4:n=ff;break;case 16:n=ro;break;case 536870912:n=hf;break;default:n=ro}n=zh(n,Ah.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ah(e,t){if(Gi=-1,Qi=0,M&6)throw Error(E(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=io(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Io(e,r);else{t=r;var i=M;M|=2;var o=Lh();(te!==e||re!==t)&&(tt=null,qn=Q()+500,nn(e,t));do try{Uv();break}catch(a){Dh(e,a)}while(1);Ol(),_o.current=o,M=i,q!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(i=ya(e),i!==0&&(r=i,t=Ka(e,i))),t===1)throw n=Qr,nn(e,0),_t(e,r),we(e,Q()),n;if(t===6)_t(e,r);else{if(i=e.current.alternate,!(r&30)&&!Mv(i)&&(t=Io(e,r),t===2&&(o=ya(e),o!==0&&(r=o,t=Ka(e,o))),t===1))throw n=Qr,nn(e,0),_t(e,r),we(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:qt(e,me,tt);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=Kl+500-Q(),10<t)){if(io(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ta(qt.bind(null,e,me,tt),t);break}qt(e,me,tt);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ze(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lv(r/1960))-r,10<r){e.timeoutHandle=Ta(qt.bind(null,e,me,tt),r);break}qt(e,me,tt);break;case 5:qt(e,me,tt);break;default:throw Error(E(329))}}}return we(e,Q()),e.callbackNode===n?Ah.bind(null,e):null}function Ka(e,t){var n=Rr;return e.current.memoizedState.isDehydrated&&(nn(e,t).flags|=256),e=Io(e,t),e!==2&&(t=me,me=n,t!==null&&Ga(t)),e}function Ga(e){me===null?me=e:me.push.apply(me,e)}function Mv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!be(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~Wl,t&=~Wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function Nc(e){if(M&6)throw Error(E(327));zn();var t=io(e,0);if(!(t&1))return we(e,Q()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=ya(e);r!==0&&(t=r,n=Ka(e,r))}if(n===1)throw n=Qr,nn(e,0),_t(e,t),we(e,Q()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qt(e,me,tt),we(e,Q()),null}function Gl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(qn=Q()+500,bo&&Ht())}}function dn(e){Tt!==null&&Tt.tag===0&&!(M&6)&&zn();var t=M;M|=1;var n=Oe.transition,r=j;try{if(Oe.transition=null,j=1,e)return e()}finally{j=r,Oe.transition=n,M=t,!(M&6)&&Ht()}}function Ql(){Ee=An.current,b(An)}function nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dv(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Rl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uo();break;case 3:Gn(),b(ve),b(le),Ul();break;case 5:jl(r);break;case 4:Gn();break;case 13:b(V);break;case 19:b(V);break;case 10:Al(r.type._context);break;case 22:case 23:Ql()}n=n.return}if(te=e,q=e=Mt(e.current,null),re=Ee=t,X=0,Qr=null,Wl=Wo=cn=0,me=Rr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Xt=null}return e}function Dh(e,t){do{var n=q;try{if(Ol(),Hi.current=wo,yo){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yo=!1}if(un=0,ee=J=H=null,Tr=!1,Wr=0,Hl.current=null,n===null||n.return===null){X=1,Qr=t,q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=vc(s);if(g!==null){g.flags&=-257,yc(g,s,a,o,t),g.mode&1&&gc(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){gc(o,u,t),ql();break e}l=Error(E(426))}}else if(B&&a.mode&1){var R=vc(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),yc(R,s,a,o,t),xl(Qn(l,a));break e}}o=l=Qn(l,a),X!==4&&(X=2),Rr===null?Rr=[o]:Rr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=gh(o,l,t);uc(o,f);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Dt===null||!Dt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=vh(o,a,t);uc(o,y);break e}}o=o.return}while(o!==null)}jh(n)}catch(I){t=I,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function Lh(){var e=_o.current;return _o.current=wo,e===null?wo:e}function ql(){(X===0||X===3||X===2)&&(X=4),te===null||!(cn&268435455)&&!(Wo&268435455)||_t(te,re)}function Io(e,t){var n=M;M|=2;var r=Lh();(te!==e||re!==t)&&(tt=null,nn(e,t));do try{jv();break}catch(i){Dh(e,i)}while(1);if(Ol(),M=n,_o.current=r,q!==null)throw Error(E(261));return te=null,re=0,X}function jv(){for(;q!==null;)Mh(q)}function Uv(){for(;q!==null&&!lg();)Mh(q)}function Mh(e){var t=Fh(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?jh(e):q=t,Hl.current=null}function jh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Nv(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,q=null;return}}else if(n=xv(n,t,Ee),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function qt(e,t,n){var r=j,i=Oe.transition;try{Oe.transition=null,j=1,Fv(e,t,n,r)}finally{Oe.transition=i,j=r}return null}function Fv(e,t,n,r){do zn();while(Tt!==null);if(M&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(yg(e,o),e===te&&(q=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ai||(Ai=!0,zh(ro,function(){return zn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Oe.transition,Oe.transition=null;var s=j;j=1;var a=M;M|=4,Hl.current=null,Av(e,n),Nh(n,e),iv(ka),oo=!!Ia,ka=Ia=null,e.current=n,Dv(n),ug(),M=a,j=s,Oe.transition=o}else e.current=n;if(Ai&&(Ai=!1,Tt=e,So=i),o=e.pendingLanes,o===0&&(Dt=null),fg(n.stateNode),we(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Eo)throw Eo=!1,e=Ha,Ha=null,e;return So&1&&e.tag!==0&&zn(),o=e.pendingLanes,o&1?e===Wa?xr++:(xr=0,Wa=e):xr=0,Ht(),null}function zn(){if(Tt!==null){var e=mf(So),t=Oe.transition,n=j;try{if(Oe.transition=null,j=16>e?16:e,Tt===null)var r=!1;else{if(e=Tt,Tt=null,So=0,M&6)throw Error(E(331));var i=M;for(M|=4,k=e.current;k!==null;){var o=k,s=o.child;if(k.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:Pr(8,d,o)}var h=d.child;if(h!==null)h.return=d,k=h;else for(;k!==null;){d=k;var m=d.sibling,g=d.return;if(Ph(d),d===u){k=null;break}if(m!==null){m.return=g,k=m;break}k=g}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}k=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,k=s;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,k=f;break e}k=o.return}}var c=e.current;for(k=c;k!==null;){s=k;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,k=p;else e:for(s=c;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ho(9,a)}}catch(I){K(a,a.return,I)}if(a===s){k=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,k=y;break e}k=a.return}}if(M=i,Ht(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(jo,e)}catch{}r=!0}return r}finally{j=n,Oe.transition=t}}return!1}function Oc(e,t,n){t=Qn(n,t),t=gh(e,t,1),e=At(e,t,1),t=de(),e!==null&&(ri(e,1,t),we(e,t))}function K(e,t,n){if(e.tag===3)Oc(e,e,n);else for(;t!==null;){if(t.tag===3){Oc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Qn(n,e),e=vh(t,e,1),t=At(t,e,1),e=de(),t!==null&&(ri(t,1,e),we(t,e));break}}t=t.return}}function zv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>Q()-Kl?nn(e,0):Wl|=n),we(e,t)}function Uh(e,t){t===0&&(e.mode&1?(t=Si,Si<<=1,!(Si&130023424)&&(Si=4194304)):t=1);var n=de();e=ct(e,t),e!==null&&(ri(e,t,n),we(e,n))}function $v(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uh(e,n)}function bv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Uh(e,n)}var Fh;Fh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,Rv(e,t,n);ge=!!(e.flags&131072)}else ge=!1,B&&t.flags&1048576&&bf(t,ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ki(e,t),e=t.pendingProps;var i=Hn(t,le.current);Fn(t,n),i=zl(null,t,r,e,i,n);var o=$l();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,co(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ll(t),i.updater=Bo,t.stateNode=i,i._reactInternals=t,Da(t,r,e,n),t=ja(null,t,r,!0,o,n)):(t.tag=0,B&&o&&Pl(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ki(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Vv(r),e=je(r,e),i){case 0:t=Ma(null,t,r,e,n);break e;case 1:t=Ec(null,t,r,e,n);break e;case 11:t=wc(null,t,r,e,n);break e;case 14:t=_c(null,t,r,je(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),Ma(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),Ec(e,t,r,i,n);case 3:e:{if(Eh(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Wf(e,t),go(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qn(Error(E(423)),t),t=Sc(e,t,r,n,i);break e}else if(r!==i){i=Qn(Error(E(424)),t),t=Sc(e,t,r,n,i);break e}else for(Se=Ot(t.stateNode.containerInfo.firstChild),Ie=t,B=!0,Fe=null,n=qf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===i){t=dt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Yf(t),e===null&&Na(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ca(r,i)?s=null:o!==null&&Ca(r,o)&&(t.flags|=32),_h(e,t),ce(e,t,s,n),t.child;case 6:return e===null&&Na(t),null;case 13:return Sh(e,t,n);case 4:return Ml(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),wc(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,F(po,r._currentValue),r._currentValue=s,o!==null)if(be(o.value,s)){if(o.children===i.children&&!ve.current){t=dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=at(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Oa(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Oa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fn(t,n),i=Ae(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=je(r,t.pendingProps),i=je(r.type,i),_c(e,t,r,i,n);case 15:return yh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),Ki(e,t),t.tag=1,ye(r)?(e=!0,co(t)):e=!1,Fn(t,n),Gf(t,r,i),Da(t,r,i,n),ja(null,t,r,!0,e,n);case 19:return Ih(e,t,n);case 22:return wh(e,t,n)}throw Error(E(156,t.tag))};function zh(e,t){return df(e,t)}function Bv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Bv(e,t,n,r)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vv(e){if(typeof e=="function")return Yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ml)return 11;if(e===gl)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Yl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Sn:return rn(n.children,i,o,t);case pl:s=8,i|=8;break;case ra:return e=Ne(12,n,t,i|2),e.elementType=ra,e.lanes=o,e;case ia:return e=Ne(13,n,t,i),e.elementType=ia,e.lanes=o,e;case oa:return e=Ne(19,n,t,i),e.elementType=oa,e.lanes=o,e;case Gd:return Ko(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wd:s=10;break e;case Kd:s=9;break e;case ml:s=11;break e;case gl:s=14;break e;case vt:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function rn(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Ko(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Gd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ls(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Ms(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ms(0),this.expirationTimes=ms(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ms(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jl(e,t,n,r,i,o,s,a,l){return e=new Hv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ll(o),e}function Wv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $h(e){if(!e)return bt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ye(n))return zf(e,n,t)}return t}function bh(e,t,n,r,i,o,s,a,l){return e=Jl(n,r,!0,e,i,o,s,a,l),e.context=$h(null),n=e.current,r=de(),i=Lt(n),o=at(r,i),o.callback=t??null,At(n,o,i),e.current.lanes=i,ri(e,i,r),we(e,r),e}function Go(e,t,n,r){var i=t.current,o=de(),s=Lt(i);return n=$h(n),t.context===null?t.context=n:t.pendingContext=n,t=at(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=At(i,t,s),e!==null&&($e(e,i,s,o),Vi(e,i,s)),s}function ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xl(e,t){Ac(e,t),(e=e.alternate)&&Ac(e,t)}function Kv(){return null}var Bh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zl(e){this._internalRoot=e}Qo.prototype.render=Zl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Go(e,t,null,null)};Qo.prototype.unmount=Zl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Go(null,e,null,null)}),t[ut]=null}};function Qo(e){this._internalRoot=e}Qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=yf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&_f(e)}};function eu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dc(){}function Gv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ko(s);o.call(u)}}var s=bh(t,r,e,0,null,!1,!1,"",Dc);return e._reactRootContainer=s,e[ut]=s.current,$r(e.nodeType===8?e.parentNode:e),dn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ko(l);a.call(u)}}var l=Jl(e,0,!1,null,null,!1,!1,"",Dc);return e._reactRootContainer=l,e[ut]=l.current,$r(e.nodeType===8?e.parentNode:e),dn(function(){Go(t,l,n,r)}),l}function Yo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ko(s);a.call(l)}}Go(t,s,e,i)}else s=Gv(n,t,e,i,r);return ko(s)}gf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(wl(t,n|1),we(t,Q()),!(M&6)&&(qn=Q()+500,Ht()))}break;case 13:dn(function(){var r=ct(e,1);if(r!==null){var i=de();$e(r,e,1,i)}}),Xl(e,1)}};_l=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=de();$e(t,e,134217728,n)}Xl(e,134217728)}};vf=function(e){if(e.tag===13){var t=Lt(e),n=ct(e,t);if(n!==null){var r=de();$e(n,e,t,r)}Xl(e,t)}};yf=function(){return j};wf=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};ma=function(e,t,n){switch(t){case"input":if(la(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$o(r);if(!i)throw Error(E(90));qd(r),la(r,i)}}}break;case"textarea":Jd(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};of=Gl;sf=dn;var Qv={usingClientEntryPoint:!1,Events:[oi,Tn,$o,nf,rf,Gl]},pr={findFiberByHostInstance:Jt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qv={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uf(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||Kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Di.isDisabled&&Di.supportsFiber)try{jo=Di.inject(qv),Ge=Di}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!eu(t))throw Error(E(200));return Wv(e,t,null,n)};Te.createRoot=function(e,t){if(!eu(e))throw Error(E(299));var n=!1,r="",i=Bh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Jl(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,$r(e.nodeType===8?e.parentNode:e),new Zl(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=uf(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return dn(e)};Te.hydrate=function(e,t,n){if(!qo(t))throw Error(E(200));return Yo(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!eu(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Bh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=bh(t,null,e,1,n??null,i,!1,o,s),e[ut]=t.current,$r(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qo(t)};Te.render=function(e,t,n){if(!qo(t))throw Error(E(200));return Yo(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!qo(e))throw Error(E(40));return e._reactRootContainer?(dn(function(){Yo(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Te.unstable_batchedUpdates=Gl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Yo(e,t,n,!1,r)};Te.version="18.2.0-next-9e3b772b8-20220608";function Vh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vh)}catch(e){console.error(e)}}Vh(),$d.exports=Te;var Yv=$d.exports,Lc=Yv;ta.createRoot=Lc.createRoot,ta.hydrateRoot=Lc.hydrateRoot;/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qr(){return qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qr.apply(this,arguments)}var Pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pt||(Pt={}));const Mc="popstate";function Jv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Qa("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Hh(i)}return Zv(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function tu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Xv(){return Math.random().toString(36).substr(2,8)}function jc(e,t){return{usr:e.state,key:e.key,idx:t}}function Qa(e,t,n,r){return n===void 0&&(n=null),qr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?tr(t):t,{state:n,key:t&&t.key||r||Xv()})}function Hh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function tr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Zv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Pt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(qr({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function h(){a=Pt.Pop;let R=d(),f=R==null?null:R-u;u=R,l&&l({action:a,location:w.location,delta:f})}function m(R,f){a=Pt.Push;let c=Qa(w.location,R,f);n&&n(c,R),u=d()+1;let p=jc(c,u),y=w.createHref(c);try{s.pushState(p,"",y)}catch{i.location.assign(y)}o&&l&&l({action:a,location:w.location,delta:1})}function g(R,f){a=Pt.Replace;let c=Qa(w.location,R,f);n&&n(c,R),u=d();let p=jc(c,u),y=w.createHref(c);s.replaceState(p,"",y),o&&l&&l({action:a,location:w.location,delta:0})}function v(R){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof R=="string"?R:Hh(R);return Y(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let w={get action(){return a},get location(){return e(i,s)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Mc,h),l=R,()=>{i.removeEventListener(Mc,h),l=null}},createHref(R){return t(i,R)},createURL:v,encodeLocation(R){let f=v(R);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:g,go(R){return s.go(R)}};return w}var Uc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Uc||(Uc={}));function ey(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?tr(t):t,i=Gh(r.pathname||"/",n);if(i==null)return null;let o=Wh(e);ty(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=cy(o[a],hy(i));return s}function Wh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Y(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=on([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Wh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:ly(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Kh(o.path))i(o,s,l)}),t}function Kh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Kh(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function ty(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:uy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ny=/^:\w+$/,ry=3,iy=2,oy=1,sy=10,ay=-2,Fc=e=>e==="*";function ly(e,t){let n=e.split("/"),r=n.length;return n.some(Fc)&&(r+=ay),t&&(r+=iy),n.filter(i=>!Fc(i)).reduce((i,o)=>i+(ny.test(o)?ry:o===""?oy:sy),r)}function uy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function cy(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=dy({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let h=a.route;o.push({params:r,pathname:on([i,d.pathname]),pathnameBase:vy(on([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=on([i,d.pathnameBase]))}return o}function dy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{if(d==="*"){let m=a[h]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=py(a[h]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function fy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),tu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function hy(e){try{return decodeURI(e)}catch(t){return tu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function py(e,t){try{return decodeURIComponent(e)}catch(n){return tu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Gh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function my(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?tr(e):e;return{pathname:n?n.startsWith("/")?n:gy(n,t):t,search:yy(r),hash:wy(i)}}function gy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function js(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=tr(e):(i=qr({},e),Y(!i.pathname||!i.pathname.includes("?"),js("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),js("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),js("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?t[h]:"/"}let l=my(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const on=e=>e.join("/").replace(/\/\/+/g,"/"),vy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _y(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Yh=["post","put","patch","delete"];new Set(Yh);const Ey=["get",...Yh];new Set(Ey);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Co.apply(this,arguments)}const nu=S.createContext(null),Sy=S.createContext(null),Jo=S.createContext(null),Xo=S.createContext(null),Wt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Jh=S.createContext(null);function ai(){return S.useContext(Xo)!=null}function ru(){return ai()||Y(!1),S.useContext(Xo).location}function Xh(e){S.useContext(Jo).static||S.useLayoutEffect(e)}function Zh(){let{isDataRoute:e}=S.useContext(Wt);return e?Uy():Iy()}function Iy(){ai()||Y(!1);let e=S.useContext(nu),{basename:t,navigator:n}=S.useContext(Jo),{matches:r}=S.useContext(Wt),{pathname:i}=ru(),o=JSON.stringify(Qh(r).map(l=>l.pathnameBase)),s=S.useRef(!1);return Xh(()=>{s.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let d=qh(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:on([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const ky=S.createContext(null);function Cy(e){let t=S.useContext(Wt).outlet;return t&&S.createElement(ky.Provider,{value:e},t)}function Ty(e,t){return Py(e,t)}function Py(e,t,n){ai()||Y(!1);let{navigator:r}=S.useContext(Jo),{matches:i}=S.useContext(Wt),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=ru(),u;if(t){var d;let w=typeof t=="string"?tr(t):t;a==="/"||(d=w.pathname)!=null&&d.startsWith(a)||Y(!1),u=w}else u=l;let h=u.pathname||"/",m=a==="/"?h:h.slice(a.length)||"/",g=ey(e,{pathname:m}),v=Ay(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:on([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:on([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&v?S.createElement(Xo.Provider,{value:{location:Co({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pt.Pop}},v):v}function Ry(){let e=jy(),t=_y(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,o)}const xy=S.createElement(Ry,null);class Ny extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(Wt.Provider,{value:this.props.routeContext},S.createElement(Jh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Oy(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(nu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Wt.Provider,{value:t},r)}function Ay(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||Y(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let d=l.route.id?s==null?void 0:s[l.route.id]:null,h=null;n&&(h=l.route.errorElement||xy);let m=t.concat(o.slice(0,u+1)),g=()=>{let v;return d?v=h:l.route.Component?v=S.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,S.createElement(Oy,{match:l,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(Ny,{location:n.location,revalidation:n.revalidation,component:h,error:d,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var qa;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(qa||(qa={}));var Yr;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Yr||(Yr={}));function Dy(e){let t=S.useContext(nu);return t||Y(!1),t}function Ly(e){let t=S.useContext(Sy);return t||Y(!1),t}function My(e){let t=S.useContext(Wt);return t||Y(!1),t}function ep(e){let t=My(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function jy(){var e;let t=S.useContext(Jh),n=Ly(Yr.UseRouteError),r=ep(Yr.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Uy(){let{router:e}=Dy(qa.UseNavigateStable),t=ep(Yr.UseNavigateStable),n=S.useRef(!1);return Xh(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Co({fromRouteId:t},o)))},[e,t])}function Fy(e){let{to:t,replace:n,state:r,relative:i}=e;ai()||Y(!1);let{matches:o}=S.useContext(Wt),{pathname:s}=ru(),a=Zh(),l=qh(t,Qh(o).map(d=>d.pathnameBase),s,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function zy(e){return Cy(e.context)}function _n(e){Y(!1)}function $y(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pt.Pop,navigator:o,static:s=!1}=e;ai()&&Y(!1);let a=t.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=tr(r));let{pathname:u="/",search:d="",hash:h="",state:m=null,key:g="default"}=r,v=S.useMemo(()=>{let w=Gh(u,a);return w==null?null:{location:{pathname:w,search:d,hash:h,state:m,key:g},navigationType:i}},[a,u,d,h,m,g,i]);return v==null?null:S.createElement(Jo.Provider,{value:l},S.createElement(Xo.Provider,{children:n,value:v}))}function by(e){let{children:t,location:n}=e;return Ty(Ya(t),n)}var zc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(zc||(zc={}));new Promise(()=>{});function Ya(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Ya(r.props.children,o));return}r.type!==_n&&Y(!1),!r.props.index||!r.props.children||Y(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ya(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function By(e){let{basename:t,children:n,window:r}=e,i=S.useRef();i.current==null&&(i.current=Jv({window:r,v5Compat:!0}));let o=i.current,[s,a]=S.useState({action:o.action,location:o.location});return S.useLayoutEffect(()=>o.listen(a),[o]),S.createElement($y,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}var $c;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})($c||($c={}));var bc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bc||(bc={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const tp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Vy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},np={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,h=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[d],n[h],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(tp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Vy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new Hy;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Hy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wy=function(e){const t=tp(e);return np.encodeByteArray(t,!0)},rp=function(e){return Wy(e).replace(/\./g,"")},ip=function(e){try{return np.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ky(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gy=()=>Ky().__FIREBASE_DEFAULTS__,Qy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},qy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ip(e[1]);return t&&JSON.parse(t)},iu=()=>{try{return Gy()||Qy()||qy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Yy=e=>{var t,n;return(n=(t=iu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},op=()=>{var e;return(e=iu())===null||e===void 0?void 0:e.config},sp=e=>{var t;return(t=iu())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function ap(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Zy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e0(){const e=ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function lp(){try{return typeof indexedDB=="object"}catch{return!1}}function up(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function t0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="FirebaseError";class et extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=n0,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yn.prototype.create)}}class yn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?r0(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new et(i,a,r)}}function r0(e,t){return e.replace(i0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const i0=/\{\$([^}]+)}/g;function o0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Jr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Bc(o)&&Bc(s)){if(!Jr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function wr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function _r(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function s0(e,t){const n=new a0(e,t);return n.subscribe.bind(n)}class a0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");l0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Us),i.error===void 0&&(i.error=Us),i.complete===void 0&&(i.complete=Us);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function l0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Us(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=1e3,c0=2,d0=4*60*60*1e3,f0=.5;function Vc(e,t=u0,n=c0){const r=t*Math.pow(n,e),i=Math.round(f0*r*(Math.random()-.5)*2);return Math.min(d0,r+i)}/**
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
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Jy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(m0(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:p0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p0(e){return e===Yt?void 0:e}function m0(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new h0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const v0={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},y0=U.INFO,w0={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},_0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=w0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ou{constructor(t){this.name=t,this._logLevel=y0,this._logHandler=_0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?v0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const E0=(e,t)=>t.some(n=>e instanceof n);let Hc,Wc;function S0(){return Hc||(Hc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I0(){return Wc||(Wc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cp=new WeakMap,Ja=new WeakMap,dp=new WeakMap,Fs=new WeakMap,su=new WeakMap;function k0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(jt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&cp.set(n,e)}).catch(()=>{}),su.set(t,e),t}function C0(e){if(Ja.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Ja.set(e,t)}let Xa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ja.get(e);if(t==="objectStoreNames")return e.objectStoreNames||dp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function T0(e){Xa=e(Xa)}function P0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(zs(this),t,...n);return dp.set(r,t.sort?t.sort():[t]),jt(r)}:I0().includes(e)?function(...t){return e.apply(zs(this),t),jt(cp.get(this))}:function(...t){return jt(e.apply(zs(this),t))}}function R0(e){return typeof e=="function"?P0(e):(e instanceof IDBTransaction&&C0(e),E0(e,S0())?new Proxy(e,Xa):e)}function jt(e){if(e instanceof IDBRequest)return k0(e);if(Fs.has(e))return Fs.get(e);const t=R0(e);return t!==e&&(Fs.set(e,t),su.set(t,e)),t}const zs=e=>su.get(e);function x0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=jt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(jt(s.result),l.oldVersion,l.newVersion,jt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const N0=["get","getKey","getAll","getAllKeys","count"],O0=["put","add","delete","clear"],$s=new Map;function Kc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if($s.get(t))return $s.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=O0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||N0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $s.set(t,o),o}T0(e=>({...e,get:(t,n,r)=>Kc(t,n)||e.get(t,n,r),has:(t,n)=>!!Kc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(D0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function D0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Za="@firebase/app",Gc="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new ou("@firebase/app"),L0="@firebase/app-compat",M0="@firebase/analytics-compat",j0="@firebase/analytics",U0="@firebase/app-check-compat",F0="@firebase/app-check",z0="@firebase/auth",$0="@firebase/auth-compat",b0="@firebase/database",B0="@firebase/database-compat",V0="@firebase/functions",H0="@firebase/functions-compat",W0="@firebase/installations",K0="@firebase/installations-compat",G0="@firebase/messaging",Q0="@firebase/messaging-compat",q0="@firebase/performance",Y0="@firebase/performance-compat",J0="@firebase/remote-config",X0="@firebase/remote-config-compat",Z0="@firebase/storage",e1="@firebase/storage-compat",t1="@firebase/firestore",n1="@firebase/firestore-compat",r1="firebase",i1="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="[DEFAULT]",o1={[Za]:"fire-core",[L0]:"fire-core-compat",[j0]:"fire-analytics",[M0]:"fire-analytics-compat",[F0]:"fire-app-check",[U0]:"fire-app-check-compat",[z0]:"fire-auth",[$0]:"fire-auth-compat",[b0]:"fire-rtdb",[B0]:"fire-rtdb-compat",[V0]:"fire-fn",[H0]:"fire-fn-compat",[W0]:"fire-iid",[K0]:"fire-iid-compat",[G0]:"fire-fcm",[Q0]:"fire-fcm-compat",[q0]:"fire-perf",[Y0]:"fire-perf-compat",[J0]:"fire-rc",[X0]:"fire-rc-compat",[Z0]:"fire-gcs",[e1]:"fire-gcs-compat",[t1]:"fire-fst",[n1]:"fire-fst-compat","fire-js":"fire-js",[r1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map,tl=new Map;function s1(e,t){try{e.container.addComponent(t)}catch(n){fn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ft(e){const t=e.name;if(tl.has(t))return fn.debug(`There were multiple attempts to register component ${t}.`),!1;tl.set(t,e);for(const n of To.values())s1(n,e);return!0}function nr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ut=new yn("app","Firebase",a1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=i1;function fp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:el,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});if(n||(n=op()),!n)throw Ut.create("no-options");const o=To.get(i);if(o){if(Jr(n,o.options)&&Jr(r,o.config))return o;throw Ut.create("duplicate-app",{appName:i})}const s=new g0(i);for(const l of tl.values())s.addComponent(l);const a=new l1(n,r,s);return To.set(i,a),a}function hp(e=el){const t=To.get(e);if(!t&&e===el&&op())return fp();if(!t)throw Ut.create("no-app",{appName:e});return t}function qe(e,t,n){var r;let i=(r=o1[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),fn.warn(a.join(" "));return}ft(new Ze(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const u1="firebase-heartbeat-database",c1=1,Xr="firebase-heartbeat-store";let bs=null;function pp(){return bs||(bs=x0(u1,c1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Xr)}}}).catch(e=>{throw Ut.create("idb-open",{originalErrorMessage:e.message})})),bs}async function d1(e){try{return await(await pp()).transaction(Xr).objectStore(Xr).get(mp(e))}catch(t){if(t instanceof et)fn.warn(t.message);else{const n=Ut.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});fn.warn(n.message)}}}async function Qc(e,t){try{const r=(await pp()).transaction(Xr,"readwrite");await r.objectStore(Xr).put(t,mp(e)),await r.done}catch(n){if(n instanceof et)fn.warn(n.message);else{const r=Ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fn.warn(r.message)}}}function mp(e){return`${e.name}!${e.options.appId}`}/**
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
 */const f1=1024,h1=30*24*60*60*1e3;class p1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new g1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=h1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qc(),{heartbeatsToSend:n,unsentEntries:r}=m1(this._heartbeatsCache.heartbeats),i=rp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qc(){return new Date().toISOString().substring(0,10)}function m1(e,t=f1){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Yc(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class g1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lp()?up().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await d1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Yc(e){return rp(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(e){ft(new Ze("platform-logger",t=>new A0(t),"PRIVATE")),ft(new Ze("heartbeat",t=>new p1(t),"PRIVATE")),qe(Za,Gc,e),qe(Za,Gc,"esm2017"),qe("fire-js","")}v1("");function au(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function gp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const y1=gp,vp=new yn("auth","Firebase",gp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new ou("@firebase/auth");function w1(e,...t){Po.logLevel<=U.WARN&&Po.warn(`Auth (${ui}): ${e}`,...t)}function Yi(e,...t){Po.logLevel<=U.ERROR&&Po.error(`Auth (${ui}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e,...t){throw lu(e,...t)}function Ye(e,...t){return lu(e,...t)}function _1(e,t,n){const r=Object.assign(Object.assign({},y1()),{[t]:n});return new yn("auth","Firebase",r).create(t,{appName:e.name})}function lu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return vp.create(e,...t)}function N(e,t,...n){if(!e)throw lu(t,...n)}function ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Yi(t),new Error(t)}function ht(e,t){e||ot(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function E1(){return Jc()==="http:"||Jc()==="https:"}function Jc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E1()||ap()||"connection"in navigator)?navigator.onLine:!0}function I1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,n){this.shortDelay=t,this.longDelay=n,ht(n>t,"Short delay should be less than long delay!"),this.isMobile=Xy()||Zy()}get(){return S1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(e,t){ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=new ci(3e4,6e4);function di(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function rr(e,t,n,r,i={}){return wp(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=li(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),yp.fetch()(_p(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function wp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},k1),t);try{const i=new T1(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Li(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Li(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Li(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Li(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _1(e,d,u);Be(e,d)}}catch(i){if(i instanceof et)throw i;Be(e,"network-request-failed",{message:String(i)})}}async function Zo(e,t,n,r,i={}){const o=await rr(e,t,n,r,i);return"mfaPendingCredential"in o&&Be(e,"multi-factor-auth-required",{_serverResponse:o}),o}function _p(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?uu(e.config,i):`${e.config.apiScheme}://${i}`}class T1{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),C1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Li(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ye(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(e,t){return rr(e,"POST","/v1/accounts:delete",t)}async function R1(e,t){return rr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function x1(e,t=!1){const n=Ve(e),r=await n.getIdToken(t),i=cu(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Nr(Bs(i.auth_time)),issuedAtTime:Nr(Bs(i.iat)),expirationTime:Nr(Bs(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Bs(e){return Number(e)*1e3}function cu(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Yi("JWT malformed, contained fewer than 3 sections"),null;try{const i=ip(n);return i?JSON.parse(i):(Yi("Failed to decode base64 JWT payload"),null)}catch(i){return Yi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function N1(e){const t=cu(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof et&&O1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function O1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nr(this.lastLoginAt),this.creationTime=Nr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Zr(e,R1(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?M1(o.providerUserInfo):[],a=L1(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Ep(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function D1(e){const t=Ve(e);await Ro(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function L1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function M1(e){return e.map(t=>{var{providerId:n}=t,r=au(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(e,t){const n=await wp(e,{},async()=>{const r=li({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=_p(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):N1(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await j1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ei;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class sn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=au(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new A1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ep(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Zr(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return x1(this,t)}reload(){return D1(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new sn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ro(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Zr(this,P1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:y,isAnonymous:I,providerData:T,stsTokenManager:P}=n;N(p&&P,t,"internal-error");const x=ei.fromJSON(this.name,P);N(typeof p=="string",t,"internal-error"),gt(h,t.name),gt(m,t.name),N(typeof y=="boolean",t,"internal-error"),N(typeof I=="boolean",t,"internal-error"),gt(g,t.name),gt(v,t.name),gt(w,t.name),gt(R,t.name),gt(f,t.name),gt(c,t.name);const z=new sn({uid:p,auth:t,email:m,emailVerified:y,displayName:h,isAnonymous:I,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:x,createdAt:f,lastLoginAt:c});return T&&Array.isArray(T)&&(z.providerData=T.map(D=>Object.assign({},D))),R&&(z._redirectEventId=R),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new ei;i.updateFromServerResponse(n);const o=new sn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ro(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=new Map;function st(e){ht(e instanceof Function,"Expected a class definition");let t=Xc.get(e);return t?(ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Xc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Sp.type="NONE";const Zc=Sp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e,t,n){return`firebase:${e}:${t}:${n}`}class $n{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ji(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ji("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?sn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new $n(st(Zc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||st(Zc);const s=Ji(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const h=sn._fromJSON(t,d);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new $n(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new $n(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Cp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ip(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pp(t))return"Blackberry";if(Rp(t))return"Webos";if(du(t))return"Safari";if((t.includes("chrome/")||kp(t))&&!t.includes("edge/"))return"Chrome";if(Tp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ip(e=ue()){return/firefox\//i.test(e)}function du(e=ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function kp(e=ue()){return/crios\//i.test(e)}function Cp(e=ue()){return/iemobile/i.test(e)}function Tp(e=ue()){return/android/i.test(e)}function Pp(e=ue()){return/blackberry/i.test(e)}function Rp(e=ue()){return/webos/i.test(e)}function es(e=ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function U1(e=ue()){var t;return es(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function F1(){return e0()&&document.documentMode===10}function xp(e=ue()){return es(e)||Tp(e)||Rp(e)||Pp(e)||/windows phone/i.test(e)||Cp(e)}function z1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(e,t=[]){let n;switch(e){case"Browser":n=ed(ue());break;case"Worker":n=`${ed(ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}async function Op(e,t){return rr(e,"GET","/v2/recaptchaConfig",di(e,t))}function td(e){return e!==void 0&&e.enterprise!==void 0}class Ap{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Dp(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Ye("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",$1().appendChild(r)})}function b1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const B1="https://www.google.com/recaptcha/enterprise.js?render=",V1="recaptcha-enterprise",H1="NO_RECAPTCHA";class Lp{constructor(t){this.type=V1,this.auth=fi(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{Op(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Ap(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;td(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(H1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&td(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}Dp(B1+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function nd(e,t,n,r=!1){const i=new Lp(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
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
 */class W1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rd(this),this.idTokenSubscription=new rd(this),this.beforeStateQueue=new W1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $n.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ro(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=I1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ve(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(t))})}async initializeRecaptchaConfig(){const t=await Op(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ap(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Lp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new yn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&st(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return N(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Np(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&w1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fi(e){return Ve(e)}class rd{constructor(t){this.auth=t,this.observer=null,this.addObserver=s0(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(e,t){const n=nr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Jr(o,t??{}))return i;Be(i,"already-initialized")}return n.initialize({options:t})}function Q1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function q1(e,t,n){const r=fi(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Mp(t),{host:s,port:a}=Y1(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||J1()}function Mp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Y1(e){const t=Mp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:id(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:id(s)}}}function id(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function J1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(t){return ot("not implemented")}_linkToIdToken(t,n){return ot("not implemented")}_getReauthenticationResolver(t){return ot("not implemented")}}async function X1(e,t){return rr(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(e,t){return Zo(e,"POST","/v1/accounts:signInWithPassword",di(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(e,t){return Zo(e,"POST","/v1/accounts:signInWithEmailLink",di(e,t))}async function ew(e,t){return Zo(e,"POST","/v1/accounts:signInWithEmailLink",di(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends fu{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ti(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ti(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await nd(t,r,"signInWithPassword");return Vs(t,i)}else return Vs(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await nd(t,r,"signInWithPassword");return Vs(t,o)}else return Promise.reject(i)});case"emailLink":return Z1(t,{email:this._email,oobCode:this._password});default:Be(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return X1(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ew(t,{idToken:n,email:this._email,oobCode:this._password});default:Be(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t){return Zo(e,"POST","/v1/accounts:signInWithIdp",di(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="http://localhost";class hn extends fu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new hn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=au(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new hn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return bn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,bn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,bn(t,n)}buildRequest(){const t={requestUri:tw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=li(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rw(e){const t=wr(_r(e)).link,n=t?wr(_r(t)).deep_link_id:null,r=wr(_r(e)).deep_link_id;return(r?wr(_r(r)).link:null)||r||n||t||e}class hu{constructor(t){var n,r,i,o,s,a;const l=wr(_r(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=nw((i=l.mode)!==null&&i!==void 0?i:null);N(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=rw(t);try{return new hu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.providerId=ir.PROVIDER_ID}static credential(t,n){return ti._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=hu.parseLink(n);return N(r,"argument-error"),ti._fromEmailAndCode(t,r.code,r.tenantId)}}ir.PROVIDER_ID="password";ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends jp{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends hi{constructor(){super("facebook.com")}static credential(t){return hn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends hi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return hn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return St.credential(n,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends hi{constructor(){super("github.com")}static credential(t){return hn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return It.credential(t.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends hi{constructor(){super("twitter.com")}static credential(t,n){return hn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await sn._fromIdTokenResponse(t,r,i),s=od(r);return new Yn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=od(r);return new Yn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function od(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends et{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new xo(t,n,r,i)}}function Up(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(e,o,t,r):o})}async function iw(e,t,n=!1){const r=await Zr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Yn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Zr(e,Up(r,i,t,e),n);N(o.idToken,r,"internal-error");const s=cu(o.idToken);N(s,r,"internal-error");const{sub:a}=s;return N(e.uid===a,r,"user-mismatch"),Yn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fp(e,t,n=!1){const r="signIn",i=await Up(e,r,t),o=await Yn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function sw(e,t){return Fp(fi(e),t)}function aw(e,t,n){return sw(Ve(e),ir.credential(t,n))}function lw(e,t,n,r){return Ve(e).onIdTokenChanged(t,n,r)}function uw(e,t,n){return Ve(e).beforeAuthStateChanged(t,n)}function cw(e,t,n,r){return Ve(e).onAuthStateChanged(t,n,r)}function dw(e){return Ve(e).signOut()}const No="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(){const e=ue();return du(e)||es(e)}const hw=1e3,pw=10;class $p extends zp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fw()&&z1(),this.fallbackToPolling=xp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);F1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,pw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}$p.type="LOCAL";const mw=$p;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp extends zp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}bp.type="SESSION";const Bp=bp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ts(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await gw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ts.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=pu("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function yw(e){Je().location.href=e}/**
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
 */function Vp(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function ww(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _w(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Ew(){return Vp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="firebaseLocalStorageDb",Sw=1,Oo="firebaseLocalStorage",Wp="fbase_key";class pi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ns(e,t){return e.transaction([Oo],t?"readwrite":"readonly").objectStore(Oo)}function Iw(){const e=indexedDB.deleteDatabase(Hp);return new pi(e).toPromise()}function rl(){const e=indexedDB.open(Hp,Sw);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Oo,{keyPath:Wp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Oo)?t(r):(r.close(),await Iw(),t(await rl()))})})}async function sd(e,t,n){const r=ns(e,!0).put({[Wp]:t,value:n});return new pi(r).toPromise()}async function kw(e,t){const n=ns(e,!1).get(t),r=await new pi(n).toPromise();return r===void 0?null:r.value}function ad(e,t){const n=ns(e,!0).delete(t);return new pi(n).toPromise()}const Cw=800,Tw=3;class Kp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Tw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ts._getInstance(Ew()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ww(),!this.activeServiceWorker)return;this.sender=new vw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||_w()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await rl();return await sd(t,No,"1"),await ad(t,No),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>kw(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ad(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=ns(i,!1).getAll();return new pi(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kp.type="LOCAL";const Pw=Kp;new ci(3e4,6e4);/**
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
 */function Rw(e,t){return t?st(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends fu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return bn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return bn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return bn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function xw(e){return Fp(e.auth,new mu(e),e.bypassAuthState)}function Nw(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),ow(n,new mu(e),e.bypassAuthState)}async function Ow(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),iw(n,new mu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return xw;case"linkViaPopup":case"linkViaRedirect":return Ow;case"reauthViaPopup":case"reauthViaRedirect":return Nw;default:Be(this.auth,"internal-error")}}resolve(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=new ci(2e3,1e4);class Dn extends Gp{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const t=pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Aw.get())};t()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="pendingRedirect",Xi=new Map;class Lw extends Gp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Xi.get(this.auth._key());if(!t){try{const r=await Mw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Xi.set(this.auth._key(),t)}return this.bypassAuthState||Xi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mw(e,t){const n=Fw(t),r=Uw(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jw(e,t){Xi.set(e._key(),t)}function Uw(e){return st(e._redirectPersistence)}function Fw(e){return Ji(Dw,e.config.apiKey,e.name)}async function zw(e,t,n=!1){const r=fi(e),i=Rw(r,t),s=await new Lw(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=10*60*1e3;class bw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Bw(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Qp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$w&&this.cachedEventUids.clear(),this.cachedEventUids.has(ld(t))}saveEventToCache(t){this.cachedEventUids.add(ld(t)),this.lastProcessedEventTime=Date.now()}}function ld(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Qp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Bw(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(e,t={}){return rr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ww=/^https?/;async function Kw(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Vw(e);for(const n of t)try{if(Gw(n))return}catch{}Be(e,"unauthorized-domain")}function Gw(e){const t=nl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!Ww.test(n))return!1;if(Hw.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Qw=new ci(3e4,6e4);function ud(){const e=Je().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function qw(e){return new Promise((t,n)=>{var r,i,o;function s(){ud(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ud(),n(Ye(e,"network-request-failed"))},timeout:Qw.get()})}if(!((i=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Je().gapi)===null||o===void 0)&&o.load)s();else{const a=b1("iframefcb");return Je()[a]=()=>{gapi.load?s():n(Ye(e,"network-request-failed"))},Dp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Zi=null,t})}let Zi=null;function Yw(e){return Zi=Zi||qw(e),Zi}/**
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
 */const Jw=new ci(5e3,15e3),Xw="__/auth/iframe",Zw="emulator/auth/iframe",e_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n_(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?uu(t,Zw):`https://${e.config.authDomain}/${Xw}`,r={apiKey:t.apiKey,appName:e.name,v:ui},i=t_.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${li(r).slice(1)}`}async function r_(e){const t=await Yw(e),n=Je().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:n_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Ye(e,"network-request-failed"),a=Je().setTimeout(()=>{o(s)},Jw.get());function l(){Je().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const i_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o_=500,s_=600,a_="_blank",l_="http://localhost";class cd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u_(e,t,n,r=o_,i=s_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},i_),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ue().toLowerCase();n&&(a=kp(u)?a_:n),Ip(u)&&(t=t||l_,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[g,v])=>`${m}${g}=${v},`,"");if(U1(u)&&a!=="_self")return c_(t||"",a),new cd(null);const h=window.open(t||"",a,d);N(h,e,"popup-blocked");try{h.focus()}catch{}return new cd(h)}function c_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const d_="__/auth/handler",f_="emulator/auth/handler",h_=encodeURIComponent("fac");async function dd(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ui,eventId:i};if(t instanceof jp){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",o0(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries(o||{}))s[d]=h}if(t instanceof hi){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(s.scopes=d.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${h_}=${encodeURIComponent(l)}`:"";return`${p_(e)}?${li(a).slice(1)}${u}`}function p_({config:e}){return e.emulator?uu(e,f_):`https://${e.authDomain}/${d_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="webStorageSupport";class m_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bp,this._completeRedirectFn=zw,this._overrideRedirectResult=jw}async _openPopup(t,n,r,i){var o;ht((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await dd(t,n,r,nl(),i);return u_(t,s,pu())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await dd(t,n,r,nl(),i);return yw(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await r_(t),r=new bw(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Hs,{type:Hs},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Hs];s!==void 0&&n(!!s),Be(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Kw(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return xp()||du()||es()}}const g_=m_;var fd="@firebase/auth",hd="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function w_(e){ft(new Ze("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;N(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Np(e)},u=new K1(r,i,o,l);return Q1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ft(new Ze("auth-internal",t=>{const n=fi(t.getProvider("auth").getImmediate());return(r=>new v_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(fd,hd,y_(e)),qe(fd,hd,"esm2017")}/**
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
 */const __=5*60,E_=sp("authIdTokenMaxAge")||__;let pd=null;const S_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>E_)return;const i=n==null?void 0:n.token;pd!==i&&(pd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function I_(e=hp()){const t=nr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=G1(e,{popupRedirectResolver:g_,persistence:[Pw,mw,Bp]}),r=sp("authTokenSyncURL");if(r){const o=S_(r);uw(n,o,()=>o(n.currentUser)),lw(n,s=>o(s))}const i=Yy("auth");return i&&q1(n,`http://${i}`),n}w_("Browser");const rs=S.createContext({}),k_=({children:e})=>{const t=I_(),[n]=S.useState(!0),[r,i]=S.useState(null),[o,s]=S.useState(!0),[a,l]=S.useState("");S.useEffect(()=>cw(t,u),[]);const u=()=>{i(t.currentUser),s(!1)},d=(m,g)=>{s(!0),aw(t,m,g).then(()=>{}).catch(()=>{l(!0),s(!1)})},h=()=>{s(!0),dw(t).then(()=>{}).catch(()=>{s(!1)})};return _.jsx(rs.Provider,{value:{couldLogin:n,signIn:d,signOut:h,user:r,loading:o,err:a},children:e})},C_="_loader_hm3et_5",T_="_titleContainer_hm3et_25",P_="_title_hm3et_25",R_="_typing_hm3et_1",Ws={loader:C_,titleContainer:T_,title:P_,typing:R_},x_="_background_idb63_1",N_="_flowers_idb63_6",O_="_wheat_idb63_20",A_="_details_idb63_32",Mi={background:x_,flowers:N_,wheat:O_,details:A_},D_="/assets/flowers-196b5b19.png",L_="/assets/wheat-6ddf021a.png",M_="/assets/details-e0934b85.png";function gu(){return _.jsxs("div",{className:Mi.background,children:[_.jsx("img",{src:D_,className:Mi.flowers}),_.jsx("img",{src:L_,className:Mi.wheat}),_.jsx("img",{src:M_,className:Mi.details})]})}const j_="_wrap_ie2xg_1",U_="_container_ie2xg_12",md={wrap:j_,container:U_},F_=e=>{const[t,n]=S.useState(),[r,i]=S.useState(),[o,s]=S.useState(),[a,l]=S.useState();return setInterval(()=>{const d=new Date(e).getTime(),h=new Date().getTime(),m=d-h,g=1e3,v=g*60,w=v*60,R=w*24,f=Math.floor(m/R),c=Math.floor(m%R/w),p=Math.floor(m%w/v),y=Math.floor(m%v/g);n(f),i(c),s(p),l(y)},1e3),[t,r,o,a]},z_="_preCard_1c9ab_1",$_="_text_1c9ab_34",b_={preCard:z_,in:"_in_1c9ab_1",text:$_},B_="/assets/1-3e5e40af.jpg",V_="/assets/2-28143cb1.jpg",H_="/assets/3-9b63cf82.jpg",W_="/assets/4-7f1eddfc.jpg";function ji(e){const[t,n]=S.useState(),r=()=>{n(!0)},i=()=>{n(!1)};function o(s){if(s===1)return B_;if(s===2)return V_;if(s===3)return H_;if(s===4)return W_}return _.jsx("div",{className:b_.preCard,style:t?{background:`url(${o(e.numberPhoto)}) no-repeat  center`,backgroundSize:"cover",transition:"2s",zIndex:"4",width:"130px"}:{},onMouseEnter:r,onMouseLeave:i,children:e.children})}function pe({style:e,text:t}){return _.jsx("span",{className:e,children:t})}const K_="_a_1c793_8",G_="_button_1c793_22",Q_="_textButton_1c793_49",q_="_containerButton_1c793_61",Ui={a:K_,button:G_,textButton:Q_,containerButton:q_};function Bn({text:e,link:t,children:n,action:r}){return _.jsxs("div",{className:Ui.containerButton,children:[_.jsx("a",{className:Ui.a,href:t,target:"_blank",children:_.jsx("button",{className:Ui.button,onClick:r,children:n})}),_.jsx("h1",{className:Ui.textButton,children:e})]})}var qp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gd=tn.createContext&&tn.createContext(qp),Ft=globalThis&&globalThis.__assign||function(){return Ft=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ft.apply(this,arguments)},Y_=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Yp(e){return e&&e.map(function(t,n){return tn.createElement(t.tag,Ft({key:n},t.attr),Yp(t.child))})}function vu(e){return function(t){return tn.createElement(J_,Ft({attr:Ft({},e.attr)},t),Yp(e.child))}}function J_(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=Y_(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),tn.createElement("svg",Ft({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Ft(Ft({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&tn.createElement("title",null,o),e.children)};return gd!==void 0?tn.createElement(gd.Consumer,null,function(n){return t(n)}):t(qp)}function X_(e){return vu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 16C123.5 16 16 123.5 16 256c0 132.6 107.5 240 240 240 132.6 0 240-107.4 240-240S388.6 16 256 16zm0 60c99.4 0 180 80.6 180 180s-80.6 180-180 180S76 355.4 76 256 156.6 76 256 76zm91.3 64.2c-6.5 0-12.5 2.4-16.8 8.2-52 70.1-69 96.5-106 169.8-8.4-11.1-65.6-72.4-93.9-94.1-14.2-10.9-41.3 27.2-31.6 37.1C142.6 306.1 220.1 406 232.7 405c21.4-1.7 75.1-136.8 148.8-233.7 8-10.4-15-31.3-34.2-31.1z"}}]})(e)}function Z_(e){return vu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.518 78.38c-6.55.117-12.45 1.736-17.35 4.91-7.465 4.84-11.765 12.904-13.063 21.34-2.595 16.874 4.747 36.355 19.862 52.31C154.08 172.893 177.643 185 208 185h2.438l-9.118-18.234c-22.194-1.554-38.46-10.777-49.287-22.205-11.885-12.545-16.543-28.064-15.138-37.19.702-4.564 2.402-7.25 5.062-8.974 2.66-1.724 7.113-2.875 14.756-1.326 13.078 2.65 34.233 13.948 62.205 39.284L220.27 135h23.408c-35.31-34.8-62.215-51.278-83.39-55.57-2.715-.55-5.363-.887-7.925-1.006-.96-.045-1.91-.06-2.845-.043zm212.964 0c-.935-.016-1.885 0-2.845.044-2.562.12-5.21.455-7.924 1.006-21.176 4.292-48.082 20.77-83.39 55.57h23.406l1.352 1.354c27.972-25.336 49.127-36.633 62.205-39.284 7.643-1.55 12.096-.398 14.756 1.326 2.66 1.725 4.36 4.41 5.062 8.973 1.405 9.126-3.253 24.645-15.138 37.19-10.827 11.43-27.093 20.652-49.287 22.206L301.562 185H304c30.357 0 53.92-12.106 69.033-28.06 15.115-15.955 22.457-35.436 19.862-52.31-1.298-8.436-5.598-16.5-13.063-21.34-4.9-3.174-10.8-4.793-17.35-4.91zM227.73 153l-8.78 8.777L229.564 183h52.875l10.61-21.223-8.777-8.777h-56.54zM73 201v46h142v-46H73zm160 0v270h46V201h-46zm64 0v46h142v-46H297zm-192 64v206h110V265H105zm192 0v206h110V265H297z"}}]})(e)}function eE(e){return vu({tag:"svg",attr:{viewBox:"0 0 288 512"},child:[{tag:"path",attr:{d:"M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"}}]})(e)}function tE({enableTop:e=!0,enableMiddle:t=!0,enableBottom:n=!0}){const[r,i,o,s]=F_("2024-10-21"),a="https://api.whatsapp.com/send/?phone=5521976618713&text=Ol%C3%A1%2C+confirmo+minha+presen%C3%A7a+na+Festa+da+Jennyni.+Dia+02+de+Junho%2C+%C3%A0s+21h.+Nome+Completo%3A&type=phone_number&app_absent=0",l="https://drive.google.com/file/d/1mi5u9Q6fc5w_nuhlMWDqVDRjNHy87mhs/view?usp=sharing",u="https://goo.gl/maps/S2ykJjg2UxoPWTmd8",[d,h]=S.useState(),m=()=>{h(!0)},g=()=>{h(!1)},v=f=>f?_.jsxs("section",{className:md.container,children:[_.jsx(pe,{text:"Wendding",style:"wendding"}),_.jsx(pe,{text:"Haylton & Camile",style:"name"}),_.jsx(pe,{text:"Save The Date",style:"titulo"})]}):"",w=f=>f?_.jsxs(_.Fragment,{children:[_.jsxs(ji,{numberPhoto:1,onMouseEnter:m,onMouseLeave:g,children:[_.jsx(pe,{style:d?"text:hover":"text",text:r,isHoverSet:d}),_.jsx(pe,{style:"nameBox",text:"Days",isHoverSet:d})]}),_.jsxs(ji,{numberPhoto:2,children:[_.jsx(pe,{style:"text",text:i}),_.jsx(pe,{style:"nameBox",text:"Hours"})]}),_.jsxs(ji,{numberPhoto:3,children:[_.jsx(pe,{style:"text",text:o}),_.jsx(pe,{style:"nameBox",text:"Minutes"})]}),_.jsxs(ji,{numberPhoto:4,children:[_.jsx(pe,{style:"text",text:s}),_.jsx(pe,{style:"nameBox",text:"Seconds"})]}),_.jsx(pe,{text:"22 | Outubro | 17H",style:"date"})]}):"",R=f=>f?_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",padding:"40px"},children:[_.jsx(pe,{text:"Assim, eles já não são dois, mas sim uma só carne. ",style:"textDate"}),_.jsx(pe,{text:"Portanto, o que Deus uniu, ninguém separe. Mateus 19:6 ",style:"textDate"})]}),_.jsx(Bn,{link:u,text:"Local",style:"nameBox",children:_.jsx(eE,{style:{color:"white",fontSize:"50px"}})}),_.jsx(Bn,{link:a,text:"Confirmar Presença",style:"nameBox",children:_.jsx(X_,{style:{color:"white",fontSize:"50px"}})}),_.jsx(Bn,{link:l,text:"Sugestão de presente",style:"nameBox",children:_.jsx(Z_,{style:{color:"white",fontSize:"50px"}})})]}):"";return _.jsx(_.Fragment,{children:_.jsxs("div",{className:md.wrap,children:[v(e),w(t),R(n)]})})}const nE="_container_55e6b_1",rE={container:nE};function yu({enableTop:e,enableMiddle:t,enableBottom:n}){return _.jsx(_.Fragment,{children:_.jsx("div",{className:rE.container,children:_.jsx(tE,{enableTop:e,enableMiddle:t,enableBottom:n})})})}function vd(){return _.jsxs("div",{className:"App",children:[_.jsx(gu,{}),_.jsx(yu,{enableTop:void 0,enableMiddle:void 0,enableBottom:void 0})]})}var Jp={},Jn={};Object.defineProperty(Jn,"__esModule",{value:!0});Jn.cssValue=Jn.parseLengthAndUnit=void 0;var iE={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Xp(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return iE[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}Jn.parseLengthAndUnit=Xp;function oE(e){var t=Xp(e);return"".concat(t.value).concat(t.unit)}Jn.cssValue=oE;var is={};Object.defineProperty(is,"__esModule",{value:!0});is.createAnimation=void 0;var sE=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var o=i.sheet,s=`
    @keyframes `.concat(r,` {
      `).concat(t,`
    }
  `);return o&&o.insertRule(s,0),r};is.createAnimation=sE;var Ao=Xe&&Xe.__assign||function(){return Ao=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ao.apply(this,arguments)},aE=Xe&&Xe.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),lE=Xe&&Xe.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),uE=Xe&&Xe.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&aE(t,e,n);return lE(t,e),t},cE=Xe&&Xe.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(Jp,"__esModule",{value:!0});var Ks=uE(S),Gs=Jn,Zp=is,dE=(0,Zp.createAnimation)("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),fE=(0,Zp.createAnimation)("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left");function hE(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?"#000000":r,o=e.speedMultiplier,s=o===void 0?1:o,a=e.cssOverride,l=a===void 0?{}:a,u=e.size,d=u===void 0?60:u,h=cE(e,["loading","color","speedMultiplier","cssOverride","size"]),m=(0,Gs.parseLengthAndUnit)(d),g=m.value,v=m.unit,w=Ao({display:"inherit",width:(0,Gs.cssValue)(d),height:(0,Gs.cssValue)(d),position:"relative"},l),R=function(f){return{position:"absolute",top:"0",left:"0",width:"".concat(g).concat(v),height:"".concat(g).concat(v),border:"".concat(g/10).concat(v," solid ").concat(i),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(f===1?dE:fE," ").concat(2/s,"s 0s infinite linear")}};return n?Ks.createElement("span",Ao({style:w},h),Ks.createElement("span",{style:R(1)}),Ks.createElement("span",{style:R(2)})):null}var pE=Jp.default=hE;const mE="_containerButtons_1diw6_1",gE={containerButtons:mE};function vE(){const{signOut:e,user:t}=S.useContext(rs);return _.jsxs("div",{className:"App",children:[_.jsxs("div",{children:[_.jsx(gu,{}),_.jsx(yu,{enableBottom:!1})]}),_.jsxs("div",{className:gE.containerButtons,children:[_.jsx(Bn,{action:()=>e(),text:"Logout"}),_.jsx(Bn,{}),_.jsx(Bn,{})]})]})}const yE={in:"_in_cmsio_1"};function yd({type:e,onChange:t,placeholder:n}){return _.jsx("input",{className:yE.input,type:e,onChange:r=>{t(r.target.value)},placeholder:n})}const wE="_containerMid_xn7ff_1",_E="_containerLogin_xn7ff_9",EE="_form_xn7ff_31",SE="_change_xn7ff_1",IE="_typing_xn7ff_1",Qs={containerMid:wE,containerLogin:_E,form:EE,change:SE,typing:IE};function kE(){const{user:e,signIn:t}=S.useContext(rs),n=Zh(),[r,i]=S.useState(),[o,s]=S.useState();S.useEffect(()=>{e&&n("/admin")},[e]);const a=async(l,u)=>{t(l,u)};return _.jsxs("div",{className:"App",children:[_.jsx(gu,{}),_.jsxs("div",{className:Qs.containerMid,children:[_.jsx(yu,{enableTop:!0,enableMiddle:!1,enableBottom:!1}),_.jsxs("div",{className:Qs.containerLogin,children:[_.jsx(yd,{type:"text",onChange:i,placeholder:"Email"}),_.jsx(yd,{type:"password",onChange:s,placeholder:"Password"})]}),_.jsx("div",{className:Qs.buttons,children:_.jsx("button",{onClick:()=>{a(r,o)},children:"Login"})})]})]})}const CE=()=>{const{user:e}=S.useContext(rs);return e?_.jsx(zy,{}):_.jsx(Fy,{to:"/login"})};function TE(){const[e,t]=S.useState(!0);S.useEffect(()=>{setTimeout(()=>{t(!1)},3e3)},[]);const n=` 
    display: flex;
    justify-content:center;
    align-self:center;
    margin: auto;
    border-color: red;
  `;return e?_.jsx(_.Fragment,{children:_.jsx("div",{children:_.jsxs(_.Fragment,{children:[_.jsx("div",{className:Ws.titleContainer,children:_.jsx("h1",{className:Ws.title,children:"a wedding is coming"})}),_.jsx("div",{className:Ws.loader,children:_.jsx(pE,{color:"#8c3f0d",isLoading:e,css:n,size:50})})]})})}):_.jsx(_.Fragment,{children:_.jsx(k_,{children:_.jsx(By,{children:_.jsxs(by,{children:[_.jsx(_n,{path:"/counter",element:_.jsx(vd,{})}),_.jsx(_n,{path:"*",element:_.jsx(vd,{})}),_.jsx(_n,{path:"/login",element:_.jsx(kE,{})}),_.jsx(_n,{element:_.jsx(CE,{}),children:_.jsx(_n,{path:"/admin",element:_.jsx(vE,{})})})]})})})})}var PE="firebase",RE="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe(PE,RE,"app");const xE=(e,t)=>t.some(n=>e instanceof n);let wd,_d;function NE(){return wd||(wd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OE(){return _d||(_d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const em=new WeakMap,il=new WeakMap,tm=new WeakMap,qs=new WeakMap,wu=new WeakMap;function AE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(zt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&em.set(n,e)}).catch(()=>{}),wu.set(t,e),t}function DE(e){if(il.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});il.set(e,t)}let ol={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return il.get(e);if(t==="objectStoreNames")return e.objectStoreNames||tm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function LE(e){ol=e(ol)}function ME(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ys(this),t,...n);return tm.set(r,t.sort?t.sort():[t]),zt(r)}:OE().includes(e)?function(...t){return e.apply(Ys(this),t),zt(em.get(this))}:function(...t){return zt(e.apply(Ys(this),t))}}function jE(e){return typeof e=="function"?ME(e):(e instanceof IDBTransaction&&DE(e),xE(e,NE())?new Proxy(e,ol):e)}function zt(e){if(e instanceof IDBRequest)return AE(e);if(qs.has(e))return qs.get(e);const t=jE(e);return t!==e&&(qs.set(e,t),wu.set(t,e)),t}const Ys=e=>wu.get(e);function UE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=zt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(zt(s.result),l.oldVersion,l.newVersion,zt(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const FE=["get","getKey","getAll","getAllKeys","count"],zE=["put","add","delete","clear"],Js=new Map;function Ed(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Js.get(t))return Js.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=zE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FE.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Js.set(t,o),o}LE(e=>({...e,get:(t,n,r)=>Ed(t,n)||e.get(t,n,r),has:(t,n)=>!!Ed(t,n)||e.has(t,n)}));const nm="@firebase/installations",_u="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=1e4,im=`w:${_u}`,om="FIS_v2",$E="https://firebaseinstallations.googleapis.com/v1",bE=60*60*1e3,BE="installations",VE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},pn=new yn(BE,VE,HE);function sm(e){return e instanceof et&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am({projectId:e}){return`${$E}/projects/${e}/installations`}function lm(e){return{token:e.token,requestStatus:2,expiresIn:KE(e.expiresIn),creationTime:Date.now()}}async function um(e,t){const r=(await t.json()).error;return pn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function cm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function WE(e,{refreshToken:t}){const n=cm(e);return n.append("Authorization",GE(t)),n}async function dm(e){const t=await e();return t.status>=500&&t.status<600?e():t}function KE(e){return Number(e.replace("s","000"))}function GE(e){return`${om} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=am(e),i=cm(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:om,appId:e.appId,sdkVersion:im},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await dm(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:lm(u.authToken)}}else throw await um("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=/^[cdef][\w-]{21}$/,sl="";function JE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=XE(e);return YE.test(n)?n:sl}catch{return sl}}function XE(e){return qE(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=new Map;function pm(e,t){const n=os(e);mm(n,t),ZE(n,t)}function mm(e,t){const n=hm.get(e);if(n)for(const r of n)r(t)}function ZE(e,t){const n=eS();n&&n.postMessage({key:e,fid:t}),tS()}let en=null;function eS(){return!en&&"BroadcastChannel"in self&&(en=new BroadcastChannel("[Firebase] FID Change"),en.onmessage=e=>{mm(e.data.key,e.data.fid)}),en}function tS(){hm.size===0&&en&&(en.close(),en=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="firebase-installations-database",rS=1,mn="firebase-installations-store";let Xs=null;function Eu(){return Xs||(Xs=UE(nS,rS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(mn)}}})),Xs}async function Do(e,t){const n=os(e),i=(await Eu()).transaction(mn,"readwrite"),o=i.objectStore(mn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&pm(e,t.fid),t}async function gm(e){const t=os(e),r=(await Eu()).transaction(mn,"readwrite");await r.objectStore(mn).delete(t),await r.done}async function ss(e,t){const n=os(e),i=(await Eu()).transaction(mn,"readwrite"),o=i.objectStore(mn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&pm(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(e){let t;const n=await ss(e.appConfig,r=>{const i=iS(r),o=oS(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===sl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function iS(e){const t=e||{fid:JE(),registrationStatus:0};return vm(t)}function oS(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(pn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=sS(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:aS(e)}:{installationEntry:t}}async function sS(e,t){try{const n=await QE(e,t);return Do(e.appConfig,n)}catch(n){throw sm(n)&&n.customData.serverCode===409?await gm(e.appConfig):await Do(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function aS(e){let t=await Sd(e.appConfig);for(;t.registrationStatus===1;)await fm(100),t=await Sd(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Su(e);return r||n}return t}function Sd(e){return ss(e,t=>{if(!t)throw pn.create("installation-not-found");return vm(t)})}function vm(e){return lS(e)?{fid:e.fid,registrationStatus:0}:e}function lS(e){return e.registrationStatus===1&&e.registrationTime+rm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS({appConfig:e,heartbeatServiceProvider:t},n){const r=cS(e,n),i=WE(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:im,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await dm(()=>fetch(r,a));if(l.ok){const u=await l.json();return lm(u)}else throw await um("Generate Auth Token",l)}function cS(e,{fid:t}){return`${am(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iu(e,t=!1){let n;const r=await ss(e.appConfig,o=>{if(!ym(o))throw pn.create("not-registered");const s=o.authToken;if(!t&&hS(s))return o;if(s.requestStatus===1)return n=dS(e,t),o;{if(!navigator.onLine)throw pn.create("app-offline");const a=mS(o);return n=fS(e,a),a}});return n?await n:r.authToken}async function dS(e,t){let n=await Id(e.appConfig);for(;n.authToken.requestStatus===1;)await fm(100),n=await Id(e.appConfig);const r=n.authToken;return r.requestStatus===0?Iu(e,t):r}function Id(e){return ss(e,t=>{if(!ym(t))throw pn.create("not-registered");const n=t.authToken;return gS(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function fS(e,t){try{const n=await uS(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Do(e.appConfig,r),n}catch(n){if(sm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await gm(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Do(e.appConfig,r)}throw n}}function ym(e){return e!==void 0&&e.registrationStatus===2}function hS(e){return e.requestStatus===2&&!pS(e)}function pS(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+bE}function mS(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function gS(e){return e.requestStatus===1&&e.requestTime+rm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(e){const t=e,{installationEntry:n,registrationPromise:r}=await Su(t);return r?r.catch(console.error):Iu(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(e,t=!1){const n=e;return await wS(n),(await Iu(n,t)).token}async function wS(e){const{registrationPromise:t}=await Su(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(e){if(!e||!e.options)throw Zs("App Configuration");if(!e.name)throw Zs("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Zs(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Zs(e){return pn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="installations",ES="installations-internal",SS=e=>{const t=e.getProvider("app").getImmediate(),n=_S(t),r=nr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},IS=e=>{const t=e.getProvider("app").getImmediate(),n=nr(t,wm).getImmediate();return{getId:()=>vS(n),getToken:i=>yS(n,i)}};function kS(){ft(new Ze(wm,SS,"PUBLIC")),ft(new Ze(ES,IS,"PRIVATE"))}kS();qe(nm,_u);qe(nm,_u,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="analytics",CS="firebase_id",TS="origin",PS=60*1e3,RS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ku="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=new ou("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ke=new yn("analytics","Analytics",xS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(e){if(!e.startsWith(ku)){const t=ke.create("invalid-gtag-resource",{gtagURL:e});return _e.warn(t.message),""}return e}function _m(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function OS(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function AS(e,t){const n=OS("firebase-js-sdk-policy",{createScriptURL:NS}),r=document.createElement("script"),i=`${ku}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function DS(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function LS(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await _m(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){_e.error(a)}e("config",i,o)}async function MS(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await _m(n);for(const l of s){const u=a.find(h=>h.measurementId===l),d=u&&t[u.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){_e.error(o)}}function jS(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await MS(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await LS(e,t,n,r,a,l)}else if(o==="consent"){const[a]=s;e("consent","update",a)}else if(o==="get"){const[a,l,u]=s;e("get",a,l,u)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){_e.error(a)}}return i}function US(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=jS(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function FS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ku)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=30,$S=1e3;class bS{constructor(t={},n=$S){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Em=new bS;function BS(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function VS(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:BS(r)},o=RS.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw ke.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function HS(e,t=Em,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw ke.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw ke.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new GS;return setTimeout(async()=>{a.abort()},n!==void 0?n:PS),Sm({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Sm(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Em){var o;const{appId:s,measurementId:a}=e;try{await WS(r,t)}catch(l){if(a)return _e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await VS(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!KS(u)){if(i.deleteThrottleMetadata(s),a)return _e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const d=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Vc(n,i.intervalMillis,zS):Vc(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,h),_e.debug(`Calling attemptFetch again in ${d} millis`),Sm(e,h,r,i)}}function WS(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(ke.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function KS(e){if(!(e instanceof et)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class GS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function QS(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(){if(lp())try{await up()}catch(e){return _e.warn(ke.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return _e.warn(ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function YS(e,t,n,r,i,o,s){var a;const l=HS(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&_e.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>_e.error(g)),t.push(l);const u=qS().then(g=>{if(g)return r.getId()}),[d,h]=await Promise.all([l,u]);FS(o)||AS(o,d.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[TS]="firebase",m.update=!0,h!=null&&(m[CS]=h),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(t){this.app=t}_delete(){return delete Or[this.app.options.appId],Promise.resolve()}}let Or={},kd=[];const Cd={};let ea="dataLayer",XS="gtag",Td,Im,Pd=!1;function ZS(){const e=[];if(ap()&&e.push("This is a browser extension environment."),t0()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ke.create("invalid-analytics-context",{errorInfo:t});_e.warn(n.message)}}function eI(e,t,n){ZS();const r=e.options.appId;if(!r)throw ke.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)_e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ke.create("no-api-key");if(Or[r]!=null)throw ke.create("already-exists",{id:r});if(!Pd){DS(ea);const{wrappedGtag:o,gtagCore:s}=US(Or,kd,Cd,ea,XS);Im=o,Td=s,Pd=!0}return Or[r]=YS(e,kd,Cd,t,Td,ea,n),new JS(e)}function tI(e=hp()){e=Ve(e);const t=nr(e,Lo);return t.isInitialized()?t.getImmediate():nI(e)}function nI(e,t={}){const n=nr(e,Lo);if(n.isInitialized()){const i=n.getImmediate();if(Jr(t,n.getOptions()))return i;throw ke.create("already-initialized")}return n.initialize({options:t})}function rI(e,t,n,r){e=Ve(e),QS(Im,Or[e.app.options.appId],t,n,r).catch(i=>_e.error(i))}const Rd="@firebase/analytics",xd="0.10.0";function iI(){ft(new Ze(Lo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return eI(r,i,n)},"PUBLIC")),ft(new Ze("analytics-internal",e,"PRIVATE")),qe(Rd,xd),qe(Rd,xd,"esm2017");function e(t){try{const n=t.getProvider(Lo).getImmediate();return{logEvent:(r,i,o)=>rI(n,r,i,o)}}catch(n){throw ke.create("interop-component-reg-failed",{reason:n})}}}iI();const oI={apiKey:"AIzaSyBhTx_jyQ9XXDXbwN_8G3StDaWk8ixpOrU",authDomain:"mywendding.web.app",projectId:"mywendding",storageBucket:"mywendding.appspot.com",messagingSenderId:"297404197510",appId:"1:297404197510:web:51e391cdc5fcdca56a7f07",measurementId:"G-66KL1Q1VMH"},sI=fp(oI);tI(sI);ta.createRoot(document.getElementById("root")).render(_.jsx(TE,{}));
