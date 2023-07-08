document.addEventListener("DOMContentLoaded", function() {
  var group1Select = document.getElementById("group1-select");
  var group2Select = document.getElementById("group2-select");
  var group3Select = document.getElementById("group3-select");
  var submitButton = document.getElementById("submit-button");

  var groupOptions = {
    group1: [
      { text: "Option 1", value: "https://chat.openai.com/c/group1-option1" },
      { text: "Option 2", value: "https://chat.openai.com/c/group1-option2" },
      // Weitere Optionen für Group 1 hier hinzufügen...
    ],
    group2: [
      { text: "Option 1", value: "https://chat.openai.com/c/group2-option1" },
      { text: "Option 2", value: "https://chat.openai.com/c/group2-option2" },
      // Weitere Optionen für Group 2 hier hinzufügen...
    ],
    group3: [
      { text: "Option 1", value: "https://chat.openai.com/c/group3-option1" },
      { text: "Option 2", value: "https://chat.openai.com/c/group3-option2" },
      // Weitere Optionen für Group 3 hier hinzufügen...
    ]
  };

  // Funktion zum Erstellen der Optionen für ein Dropdown-Menü
  function createOptions(selectElement, options) {
    options.forEach(function(option) {
      var optionElement = document.createElement("option");
      optionElement.text = option.text;
      optionElement.value = option.value;
      selectElement.appendChild(optionElement);
    });
  }

  // Dropdown-Menüs mit Optionen füllen
  createOptions(group1Select, groupOptions.group1);
  createOptions(group2Select, groupOptions.group2);
  createOptions(group3Select, groupOptions.group3);

  // Event-Handler für Submit-Button
  submitButton.addEventListener("click", function() {
    var selectedGroup1Option = group1Select.value;
    var selectedGroup2Option = group2Select.value;
    var selectedGroup3Option = group3Select.value;

    if (selectedGroup1Option !== "") {
      chrome.tabs.create({ url: selectedGroup1Option });
    }

    if (selectedGroup2Option !== "") {
      chrome.tabs.create({ url: selectedGroup2Option });
    }

    if (selectedGroup3Option !== "") {
      chrome.tabs.create({ url: selectedGroup3Option });
    }
  });

  // Event-Handler für die Auswahl in Group 1
  group1Select.addEventListener("change", function() {
    if (group1Select.value !== "") {
      // Group 2 und Group 3 Dropdown-Menüs deaktivieren
      group2Select.disabled = true;
      group3Select.disabled = true;
    } else {
      // Group 2 und Group 3 Dropdown-Menüs aktivieren
      group2Select.disabled = false;
      group3Select.disabled = false;
    }
  });

  // Event-Handler für die Auswahl in Group 2
  group2Select.addEventListener("change", function() {
    if (group2Select.value !== "") {
      // Group 1 und Group 3 Dropdown-Menüs deaktivieren
      group1Select.disabled = true;
      group3Select.disabled = true;
    } else {
      // Group 1 und Group 3 Dropdown-Menüs aktivieren
      group1Select.disabled = false;
      group3Select.disabled = false;
    }
  });

  // Event-Handler für die Auswahl in Group 3
  group3Select.addEventListener("change", function() {
    if (group3Select.value !== "") {
      // Group 1 und Group 2 Dropdown-Menüs deaktivieren
      group1Select.disabled = true;
      group2Select.disabled = true;
    } else {
      // Group 1 und Group 2 Dropdown-Menüs aktivieren
      group1Select.disabled = false;
      group2Select.disabled = false;
    }
  });
});
