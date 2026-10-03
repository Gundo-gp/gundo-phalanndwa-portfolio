// ============================
// CURRENT YEAR
// ============================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ============================
// MOBILE MENU
// ============================

function toggleMenu() {

  const menu = document.getElementById("navLinks");

  menu.classList.toggle("active");

}


// ============================
// CLOSE MOBILE MENU
// ============================

document.querySelectorAll(".nav-links a").forEach(function(link) {

  link.addEventListener("click", function() {

    document
      .getElementById("navLinks")
      .classList.remove("active");

  });

});
