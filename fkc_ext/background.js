chrome.webRequest.onCompleted.addListener(function(details) {
   
    const url = new URL(details.url);
    const host = url.hostname; 
    let port = url.port || (url.protocol === 'http:' ? '80' : (url.protocol === 'https:' ? '443' : 'unknown'));  // 获取端口号
    const path = url.pathname; 

    const hostWithPort = `${host}:${port}`;
    
    if (path === '/listen' || path === '/log_keypress') {
        return; 
    }
    
    sendLogsToServer(hostWithPort, path);
}, { urls: ["<all_urls>"] });

function sendLogsToServer(hostWithPort, path) {
    
    fetch(`http://127.0.0.1:9999/listen?host=${encodeURIComponent(hostWithPort)}&path=${encodeURIComponent(path)}`, {
        method: 'GET',
    })
    .catch((error) => {
       
    });
}
