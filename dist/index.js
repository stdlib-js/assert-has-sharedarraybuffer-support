"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(v,f){"use strict";var y=typeof SharedArrayBuffer=="function"?SharedArrayBuffer:null;f.exports=y});var o=t(function(b,s){"use strict";var i=require("@stdlib/assert-is-sharedarraybuffer"),n=u();function c(){var e,r,a;if(typeof n!="function")return!1;try{r=new n(16),a=r.slice(4,8),e=i(r)&&i(a)&&r.byteLength===16&&a.byteLength===4}catch(l){e=!1}return e}s.exports=c});var h=o();module.exports=h;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
