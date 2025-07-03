const options = document.querySelectorAll(".option");
const radios = document.querySelectorAll('input[type="radio"]');
const total = document.getElementById("total");

options.forEach((option, index) => {
  option.addEventListener("click", () => {
    options.forEach((opt) => {
      opt.classList.remove("active");
      opt.querySelector('input[type="radio"]').checked = false;
    });

    option.classList.add("active");
    option.querySelector('input[type="radio"]').checked = true;

    const price = option.getAttribute("data-price");
    total.innerText = `$${parseFloat(price).toFixed(2)} USD`;
  });
});
