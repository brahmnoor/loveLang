// Saves options to chrome.storage
function save_options() {
  var e = document.getElementById("Languages");
  var selectedLanguage = e.options[e.selectedIndex].value;

  chrome.storage.local.set({
    language: selectedLanguage,
    masteredWords: []
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });

}

document.getElementById('name_submit_button').addEventListener('click', save_options);
