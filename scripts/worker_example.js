// worker_example.js

// importScripts('another_js_lib.js','yet_another_js_lib.js');

this.onmessage = function (event) {
    postMessage('Worker calismaya basladi.');
    var data = event.data;

    var currentSet = 1;
    for (var currentProcess = 0; currentProcess <= data.processCount; currentProcess++) {
        if (currentProcess == data.processCount) {
            postMessage(currentSet + '. set bitti.');

            currentSet++;
            currentProcess = 0;
            
            if (currentSet > data.setCount) {
                break;
            }
        }
    }
    postMessage('Worker calismayi bitirdi.');
    close();
};

