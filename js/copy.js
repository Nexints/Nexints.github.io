function copyTheText() {
  let Text = document.getElementById('copyable').innerHTML;

  // Copy the text inside the text field
  navigator.clipboard.writeText(Text);
  
  let tooltip = document.getElementById("copyToClipboard");
  tooltip.innerHTML = "Copied: " + Text;
}
function resetCopy() {
  let tooltip = document.getElementById("copyToClipboard");
  tooltip.innerHTML = "Copy to clipboard";
}