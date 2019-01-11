import * as wasm from "rust-wasm-hash";
import jsSHA from "jssha";
import crypto from 'crypto';

function log(msg) {
  var div = document.getElementById('console');
  div.innerHTML += msg + '\n';
  console.log(msg);
}

function measure(func) {
  var start = performance.now();
  func();
  var end = performance.now();
  log(Math.round(end - start) + " ms");
}

function js_hash_array(buf) {
  var hash = crypto.createHash('sha1');
  hash.update(new Buffer(buf));
  log("js_hash_array: " + hash.digest('hex'));
} 
function wasm_hash_array(buf) {
  var hash = wasm.hash_array(new Uint8Array(buf));
  log("wasm_hash_array: " + hash);
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
    measure(function(){ js_hash_array(reader.result); });
    measure(function(){ wasm_hash_array(reader.result); });
  };
  reader.readAsArrayBuffer(file);
}, false);


/*
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
      log("js_tarai: " + tarai(x, y, z));
    });
    measure(function () {
      log("wasm_tarai: " + wasm.tarai(x, y, z));
    });
  })(14, 7, 0);
}

document.querySelector('#start_tarai').addEventListener("click", function(){
  start_tarai();
});
*/
