const btn = document.querySelector('input[type="button"]');

btn.addEventListener("click", function () {
  const select = document.getElementById("colorSelect");

  if (select.selectedIndex !== -1) {
    select.remove(select.selectedIndex);
  }
});