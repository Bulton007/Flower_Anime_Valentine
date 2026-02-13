onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
document.querySelector(".love-btn").onclick = () => {
  alert("I love you ❤️");
};
function setRealHeight(){
  document.documentElement.style.setProperty(
    "--real100vh",
    `${window.innerHeight}px`
  );
}

setRealHeight();
window.addEventListener("resize", setRealHeight);
window.addEventListener("orientationchange", setRealHeight);
