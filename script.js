/* ============================
   CURRENT YEAR
   ============================ */

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ============================
   MOBILE MENU
   ============================ */

const menuBtn  = document.querySelector(".menu-btn");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
  if (!navLinks || !menuBtn) return;
  navLinks.classList.toggle("active", open);
  menuBtn.setAttribute("aria-expanded", String(open));
}

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {
    setMenu(!navLinks.classList.contains("active"));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") setMenu(false);
  });

  document.addEventListener("click", e => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      setMenu(false);
    }
  });

  const mq = window.matchMedia("(min-width: 851px)");
  const handleMq = e => { if (e.matches) setMenu(false); };

  if (mq.addEventListener) {
    mq.addEventListener("change", handleMq);
  } else if (mq.addListener) {
    mq.addListener(handleMq);
  }
}