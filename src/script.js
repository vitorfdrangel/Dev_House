const menu = document.querySelector("#menu_mobile");

const toggleMenu = (arg) => {
  if (arg == "body") {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    return;
  }
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
};
