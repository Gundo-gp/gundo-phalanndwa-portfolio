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

  // Toggle on button click
  menuBtn.addEventListener("click", () => {
    setMenu(!navLinks.classList.contains("active"));
  });

  // Close when a nav link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setMenu(false));
  });

  // Close on Escape
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") setMenu(false);
  });

  // Close when clicking outside
  document.addEventListener("click", e => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      setMenu(false);
    }
  });

  // Reset state if the viewport grows past the mobile breakpoint
  const mq = window.matchMedia("(min-width: 851px)");
  const handleMq = e => { if (e.matches) setMenu(false); };

  if (mq.addEventListener) {
    mq.addEventListener("change", handleMq);
  } else if (mq.addListener) {
    mq.addListener(handleMq); // Safari < 14
  }
}
