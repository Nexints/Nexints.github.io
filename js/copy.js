function copyTheText() {
  var copyText = document.getElementById("myInput".innerHTML);

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}