// Example: Injecting the header
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;

    // ✅ Now that the nav is injected, run the active link highlighter
    highlightActiveLink();
  });

function highlightActiveLink() {
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}
