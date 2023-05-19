window.addEventListener("contextmenu", (event) => event.preventDefault());

window.document.onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode === 85) {
    return false;
  } else {
    return true;
  }
};
