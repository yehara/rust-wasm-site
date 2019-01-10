import * as wasm from "rust-wasm-hash";
import jsSHA from "jssha";

var n = 10000000;

function buf2hex(buffer) { // buffer is an ArrayBuffer
  return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

function measure(func) {
  var start = performance.now();
  func();
  var end = performance.now();
  console.log(end - start);
}

function wasm_hash() {
  console.log(wasm.hash(n));
}


function js_hash() {
  var sha = new jsSHA("SHA-1", "ARRAYBUFFER");
  var input = new Uint8Array([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]).buffer;
  for(var i=0; i<n; ++i) { 
    sha.update(input);
  }
  var hash = sha.getHash("ARRAYBUFFER");
  console.log(buf2hex(hash));
}

measure(wasm_hash);
measure(js_hash);

