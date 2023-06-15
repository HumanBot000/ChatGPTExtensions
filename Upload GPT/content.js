var uploadButton = document.createElement('button');
uploadButton.innerHTML = 'Upload';
uploadButton.style.backgroundColor = 'rgb(25, 195, 125)';
uploadButton.style.width = '100%';

uploadButton.addEventListener('click', function() {
  var fileInput = document.createElement('input');
  fileInput.type = 'file';

  fileInput.addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      var fileContent = e.target.result;
      var textarea = document.getElementById('prompt-textarea');
      textarea.value = fileContent;
    };

    reader.readAsText(file);
  });

  fileInput.click();
});

var targetTextarea = document.getElementById('prompt-textarea');
var containerDiv = document.createElement('div');
containerDiv.style.position = 'relative';

targetTextarea.parentNode.insertBefore(containerDiv, targetTextarea);
containerDiv.appendChild(targetTextarea);
containerDiv.insertBefore(uploadButton, targetTextarea);



// Speichern des Button-Status im Local Storage
function saveButtonState() {
  var isButtonVisible = (uploadButton.parentNode === containerDiv);
  localStorage.setItem('buttonVisible', isButtonVisible);
}

// Wiederherstellen des Button-Status aus dem Local Storage
function restoreButtonState() {
  var isButtonVisible = localStorage.getItem('buttonVisible');
  if (isButtonVisible === 'true') {
    containerDiv.appendChild(uploadButton);
  }
}

// Event-Listener zum Speichern des Button-Status beim Gesprächswechsel
window.addEventListener('beforeunload', saveButtonState);

// Wiederherstellen des Button-Status beim Laden der Seite
window.addEventListener('load', restoreButtonState);
