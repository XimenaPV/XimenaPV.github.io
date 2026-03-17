function print(text) {
    const output = document.getElementById('output');
    const line = document.createElement('div');
    line.innerHTML = "<p>" + text + "</p>";
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

function printAscii(art) {
    const output = document.getElementById('output');
    const pre = document.createElement('pre');
    pre.className = 'ascii-art';
    pre.textContent = art;
    output.appendChild(pre);
    output.scrollTop = output.scrollHeight;
}

function clear() {
    document.getElementById('output').innerHTML = "";
}

function waitForInput(callback) {
    const inputField = document.getElementById('user-input');
    const newField = inputField.cloneNode(true);
    inputField.parentNode.replaceChild(newField, inputField);
    newField.focus();
    newField.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            const val = newField.value.trim().toLowerCase();
            newField.value = "";
            if (val !== "") callback(val);
        }
    });
}

