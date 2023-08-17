document.addEventListener("DOMContentLoaded", function() {
  var groupContainer = document.getElementById("group-container");
  var submitButton = document.getElementById("submit-button");

  fetch("config.json")
    .then(response => response.json())
    .then(data => {
      var groupOptions = data.groups;

      Object.keys(groupOptions).forEach(function(groupKey, index) {
        var groupDiv = document.createElement("div");
        groupDiv.className = "group";
        
        var groupLabel = document.createElement("label");
        groupLabel.textContent = groupKey + ":";
        
        var groupSelect = document.createElement("select");
        groupSelect.className = "group-select";
        groupSelect.id = groupKey + "-select";
        
        var defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select an option";
        groupSelect.appendChild(defaultOption);
        
        createOptions(groupSelect, groupOptions[groupKey]);

        groupDiv.appendChild(groupLabel);
        groupDiv.appendChild(groupSelect);
        groupContainer.appendChild(groupDiv);
      });

      submitButton.addEventListener("click", function() {
        var groupSelects = document.querySelectorAll(".group-select");

        groupSelects.forEach(function(selectElement) {
          var selectedOption = selectElement.value;
          if (selectedOption !== "") {
            chrome.tabs.create({ url: selectedOption });
          }
        });
      });

      var groupSelects = document.querySelectorAll(".group-select");

      groupSelects.forEach(function(selectElement) {
        selectElement.addEventListener("change", function() {
          var selectedValue = selectElement.value;
          groupSelects.forEach(function(otherSelect) {
            if (otherSelect !== selectElement) {
              otherSelect.disabled = selectedValue !== "";
            }
          });
        });
      });
    });
});

function createOptions(selectElement, options) {
  options.forEach(function(option) {
    var optionElement = document.createElement("option");
    optionElement.text = option.text;
    optionElement.value = option.value;
    selectElement.appendChild(optionElement);
  });
}
