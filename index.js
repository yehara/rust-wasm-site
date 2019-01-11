import * as wasm from "rust-wasm-hash";
import jsSHA from "jssha";
import crypto from 'crypto';

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

//measure(wasm_hash);
//measure(js_hash);


function js_hash_array(buf) {
  var hash = crypto.createHash('sha1');
  hash.update(new Buffer(buf));
  console.log("js_hash_array: " + hash.digest('hex'));
} 
function wasm_hash_array(buf) {
  var hash = wasm.hash_array(new Uint8Array(buf));
  console.log("wasm_hash_array: " + hash);
}

var input = document.querySelector('input[type=file]');
input.addEventListener('change', function() {
  var file = input.files[0];
  if(file == null) return;
  var reader = new FileReader();
  reader.onerror = function(err) {
    console.error(err);
  };
  reader.onload = function() {
    measure(function(){ wasm_hash_array(reader.result); });
    measure(function(){ js_hash_array(reader.result); });
  };
  reader.readAsArrayBuffer(file);

}, false);


function tarai(x, y, z) {
  if(x <= y){
    return y;
  }
  return tarai(tarai(x-1, y, z), tarai(y-1, z, x), tarai(z-1, x, y));
}

function start_tarai() {
  (function (x, y, z) {
    console.log("start x:" + x + " y:" + y + " z:" + z);
    measure(function () {
      console.log("js_tarai: " + tarai(x, y, z));
    });
    measure(function () {
      console.log("wasm_tarai: " + wasm.tarai(x, y, z));
    });
  })(12, 6, 0);
}

document.querySelector('#start_tarai').addEventListener("click", function(){
  start_tarai();
});
