// sticky nav
document.addEventListener("scroll", (event) => {
  var navbar = document.getElementById("navbar");

  if (
    document.body.scrollTop >= 260 ||
    document.documentElement.scrollTop >= 260
  ) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  // console.log(navbar.offsetTop);
});

// add/remove class active
var list_items = document.querySelectorAll("nav ul li");
list_items.forEach(function (item) {
  item.addEventListener("click", function () {
    list_items.forEach(function (item) {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
