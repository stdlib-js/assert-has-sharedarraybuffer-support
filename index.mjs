// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-sharedarraybuffer@v0.2.2-esm/index.mjs";var e="function"==typeof SharedArrayBuffer?SharedArrayBuffer:null;function t(){var t,n,f;if("function"!=typeof e)return!1;try{f=(n=new e(16)).slice(4,8),t=r(n)&&r(f)&&16===n.byteLength&&4===f.byteLength}catch(r){t=!1}return t}export{t as default};
//# sourceMappingURL=index.mjs.map
