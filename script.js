document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const jsonData = JSON.parse(e.target.result);
            document.getElementById('output').textContent = JSON.stringify(jsonData, null, 2);
        } catch (err) {
            document.getElementById('output').textContent = "Error al leer el archivo JSON.";
        }
    };
    
    reader.readAsText(file);
});
