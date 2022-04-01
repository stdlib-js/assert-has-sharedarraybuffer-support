<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# SharedArrayBuffer Support

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Detect native [`SharedArrayBuffer`][mdn-sharedarraybuffer] support.



<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
import hasSharedArrayBufferSupport from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-sharedarraybuffer-support@esm/index.mjs';
```

#### hasSharedArrayBufferSupport()

Detects if a runtime environment supports [`SharedArrayBuffer`][mdn-sharedarraybuffer].

```javascript
var bool = hasSharedArrayBufferSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import hasSharedArrayBufferSupport from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-sharedarraybuffer-support@esm/index.mjs';

var bool = hasSharedArrayBufferSupport();
if ( bool ) {
    console.log( 'Environment has SharedArrayBuffer support.' );
} else {
    console.log( 'Environment lacks SharedArrayBuffer support.' );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/has-arraybuffer-support`][@stdlib/assert/has-arraybuffer-support]</span><span class="delimiter">: </span><span class="description">detect native ArrayBuffer support.</span>
-   <span class="package-name">[`@stdlib/assert/has-float32array-support`][@stdlib/assert/has-float32array-support]</span><span class="delimiter">: </span><span class="description">detect native Float32Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-float64array-support`][@stdlib/assert/has-float64array-support]</span><span class="delimiter">: </span><span class="description">detect native Float64Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-int16array-support`][@stdlib/assert/has-int16array-support]</span><span class="delimiter">: </span><span class="description">detect native Int16Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-int32array-support`][@stdlib/assert/has-int32array-support]</span><span class="delimiter">: </span><span class="description">detect native Int32Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-int8array-support`][@stdlib/assert/has-int8array-support]</span><span class="delimiter">: </span><span class="description">detect native Int8Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-node-buffer-support`][@stdlib/assert/has-node-buffer-support]</span><span class="delimiter">: </span><span class="description">detect native Buffer support.</span>
-   <span class="package-name">[`@stdlib/assert/has-uint16array-support`][@stdlib/assert/has-uint16array-support]</span><span class="delimiter">: </span><span class="description">detect native Uint16Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-uint32array-support`][@stdlib/assert/has-uint32array-support]</span><span class="delimiter">: </span><span class="description">detect native Uint32Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-uint8array-support`][@stdlib/assert/has-uint8array-support]</span><span class="delimiter">: </span><span class="description">detect native Uint8Array support.</span>
-   <span class="package-name">[`@stdlib/assert/has-uint8clampedarray-support`][@stdlib/assert/has-uint8clampedarray-support]</span><span class="delimiter">: </span><span class="description">detect native Uint8ClampedArray support.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-has-sharedarraybuffer-support.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-has-sharedarraybuffer-support

[test-image]: https://github.com/stdlib-js/assert-has-sharedarraybuffer-support/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-has-sharedarraybuffer-support/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-has-sharedarraybuffer-support/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-has-sharedarraybuffer-support?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-has-sharedarraybuffer-support.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-has-sharedarraybuffer-support/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-has-sharedarraybuffer-support/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-has-sharedarraybuffer-support/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-has-sharedarraybuffer-support/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-has-sharedarraybuffer-support/main/LICENSE

[mdn-sharedarraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer

<!-- <related-links> -->

[@stdlib/assert/has-arraybuffer-support]: https://github.com/stdlib-js/assert-has-arraybuffer-support/tree/esm

[@stdlib/assert/has-float32array-support]: https://github.com/stdlib-js/assert-has-float32array-support/tree/esm

[@stdlib/assert/has-float64array-support]: https://github.com/stdlib-js/assert-has-float64array-support/tree/esm

[@stdlib/assert/has-int16array-support]: https://github.com/stdlib-js/assert-has-int16array-support/tree/esm

[@stdlib/assert/has-int32array-support]: https://github.com/stdlib-js/assert-has-int32array-support/tree/esm

[@stdlib/assert/has-int8array-support]: https://github.com/stdlib-js/assert-has-int8array-support/tree/esm

[@stdlib/assert/has-node-buffer-support]: https://github.com/stdlib-js/assert-has-node-buffer-support/tree/esm

[@stdlib/assert/has-uint16array-support]: https://github.com/stdlib-js/assert-has-uint16array-support/tree/esm

[@stdlib/assert/has-uint32array-support]: https://github.com/stdlib-js/assert-has-uint32array-support/tree/esm

[@stdlib/assert/has-uint8array-support]: https://github.com/stdlib-js/assert-has-uint8array-support/tree/esm

[@stdlib/assert/has-uint8clampedarray-support]: https://github.com/stdlib-js/assert-has-uint8clampedarray-support/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
