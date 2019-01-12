import * as wasm from "rust-wasm-hash";
import crypto from 'crypto';

function log(msg) {
  var div = document.getElementById('console');
  div.innerHTML += msg + '\n';
  console.log(msg);
}

function measure(func, n = 5) {
  var sum = 0;
  for(var i=0; i<n; i++) {
    var start = performance.now();
    func();
    var end = performance.now();
    var elapsed = Math.round(end - start)
    log("try " + (i+1) + " -> " + elapsed + " ms");
    sum += elapsed;
  }
  var ave = Math.round(sum / n);
  log("average: " + ave + " ms");
  return ave;
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

var input = document.querySelector('#file_input');
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

var input2 = document.querySelector('#file_input2');
input2.addEventListener('change', function() {
  var file = input2.files[0];
  if(file == null) return;
  var reader = new FileReader();
  reader.onerror = function(err) {
    console.error(err);
  };
  reader.onload = function() {
    wasm_convert_image(reader.result);
  };
  reader.readAsArrayBuffer(file);
}, false);



function wasm_convert_image(buf) {
  showImage(new Uint8Array(buf), "sourceImage");
  var result = wasm.convert_image(new Uint8Array(buf));
  showImage(result, "targetImage");
}

var showImage = function(buf, targetId) {
  var binaryData = "";
  for (var i = 0, len = buf.byteLength; i < len; i++) {
    binaryData += String.fromCharCode(buf[i]);
  }
  var img = document.getElementById(targetId);
  img.src = "data:image/jpeg;base64," + window.btoa(binaryData);
}

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
