function copyTheText() {
  let Text = document.getElementById('copyable').innerHTML;

  // Copy the text inside the text field
  navigator.clipboard.writeText(Text.value);
  
  let tooltip = document.getElementById("copyToClipboard");
  tooltip.innerHTML = "Copied: " + Text.value;
}
function resetCopy() {
  let tooltip = document.getElementById("copyToClipboard");
  tooltip.innerHTML = "Copy to clipboard";
}