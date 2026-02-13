onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
document.querySelector(".love-btn").onclick = () => {
  alert("I love you ❤️");
};
