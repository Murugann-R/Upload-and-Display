var content;
var elements = [];

function save() {
  content = document.querySelector(".text").value;
  document.querySelector(".text").value = "";
  elements.push(content);
}

function previewFiles() {
  const fileInput = document.getElementById("fileInput");
  const previewContainer = document.getElementById("previewContainer");

  for (let i = 0; i < fileInput.files.length; i++) {
    const file = fileInput.files[i];

    const preview = document.createElement("img");
    preview.className = "preview-image";

    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(file);
    previewContainer.appendChild(preview);
    previewContainer.style.display = "flex";
    document.getElementById("conn").textContent = elements[0];
    document.getElementById("connn").textContent = elements[1];
    document.getElementById("connnn").textContent = elements[2];
    if (fileInput.files.length === 1) {
      document.getElementById("conn").style.visibility = "visible";
      document.getElementById("conn").style.marginLeft = `570px`;
      preview.style.marginLeft = `500px`;
    } else if (fileInput.files.length === 2) {
      document.getElementById("conn").style.visibility = "visible";
      document.getElementById("connn").style.visibility = "visible";
      document.getElementById("conn").style.marginLeft = `350px`;
      document.getElementById("connn").style.marginLeft = `900px`;
      preview.style.marginLeft = `300px`;
    } else {
      document.getElementById("conn").style.visibility = "visible";
      document.getElementById("connn").style.visibility = "visible";
      document.getElementById("connnn").style.visibility = "visible";
      document.getElementById("conn").style.marginLeft = `200px`;
      document.getElementById("connn").style.marginLeft = `600px`;
      document.getElementById("connnn").style.marginLeft = `1000px`;
      preview.style.marginLeft = `150px`;
    }
  }
}
