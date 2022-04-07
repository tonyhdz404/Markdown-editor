const navbar = document.querySelector(".nav");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");

//* Functions
function toggleSidebar(e) {
  const btn = e.target.closest(".btn-sidebar");
  if (!btn) return;
  btn.classList.toggle("open");
  if (btn.classList.contains("open")) {
    console.log("OPEN SIDEBAR");
    openSidebar(btn);
  } else {
    console.log("CLOSE SIDEBAR");
    closeSidbar(btn);
  }
}

function openSidebar(btn) {
  const btnIcon = btn.querySelector("img");
  btnIcon.src = "/assets/icon-close.svg";
  sidebar.classList.remove("hidden");
  body.style.gridTemplateColumns = "25rem 1fr";
}
function closeSidbar(btn) {
  const btnIcon = btn.querySelector("img");
  btnIcon.src = "/assets/icon-menu.svg";
  sidebar.classList.add("hidden");
  body.style.gridTemplateColumns = "0px 1fr";
}
//* EventListeners

navbar.addEventListener("click", toggleSidebar);
