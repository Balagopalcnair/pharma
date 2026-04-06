const dropZone = document.getElementById('drop-zone');
const fileNameDisplay = document.getElementById('file-name');

dropZone.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,.pdf';
    input.onchange = e => {
        const file = e.target.files[0];
        handleFile(file);
    }
    input.click();
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    handleFile(file);
});

function handleFile(file) {
    if (file) {
        fileNameDisplay.textContent = `File selected: ${file.name}`;
    }
}
