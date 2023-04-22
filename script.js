const btnSuccess = document.querySelector(".btn-success");
const cookies = document.querySelector(".cookies");
console.log(cookies);

btnSuccess.addEventListener("click", () => {
  console.log("click on button !");
  cookies.style.opacity = '0';
});
