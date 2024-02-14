"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(v,f){
var y=typeof SharedArrayBuffer=="function"?SharedArrayBuffer:null;f.exports=y
});var o=t(function(b,s){
var i=require('@stdlib/assert-is-sharedarraybuffer/dist'),n=u();function c(){var e,r,a;if(typeof n!="function")return!1;try{r=new n(16),a=r.slice(4,8),e=i(r)&&i(a)&&r.byteLength===16&&a.byteLength===4}catch(l){e=!1}return e}s.exports=c
});var h=o();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
