var log_lines = 0
var max_log_lines = 5


document.getElementById("log_slider").oninput = function() {
    max_log_lines = this.value
    drawById("log_head", "LOG (" + log_lines + "/" + max_log_lines + "):")
}

function log(message) {
    if (log_lines >= max_log_lines) {
        clearLog()
    }
    log_lines++
    document.getElementById("log_trace").innerHTML += message + "<br>"
    drawById("log_head", "LOG (" + log_lines + "/" + max_log_lines + "):")
}

function clearLog() {
    log_lines = 0
    drawById("log_trace", "")
    drawById("log_head", "LOG (" + log_lines + "/" + max_log_lines + "):")
}