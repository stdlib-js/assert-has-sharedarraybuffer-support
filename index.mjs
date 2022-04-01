// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-sharedarraybuffer@esm/index.mjs";var e="function"==typeof SharedArrayBuffer?SharedArrayBuffer:null,t=r,n=e;var a=function(){var r,e,a;if("function"!=typeof n)return!1;try{a=(e=new n(16)).slice(4,8),r=t(e)&&t(a)&&16===e.byteLength&&4===a.byteLength}catch(e){r=!1}return r};export{a as default};
//# sourceMappingURL=index.mjs.map
