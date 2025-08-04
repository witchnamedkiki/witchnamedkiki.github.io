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

// Inject sidebar.html
fetch("sidebar.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("sidebar-container").innerHTML = html;

    // Load quote.js
    const quoteScript = document.createElement("script");
    quoteScript.src = "quote.js";
    document.body.appendChild(quoteScript);

    // Load weather widget
    if (!document.getElementById("weatherwidget-io-js")) {
      const weatherScript = document.createElement("script");
      weatherScript.id = "weatherwidget-io-js";
      weatherScript.src = "https://weatherwidget.io/js/widget.min.js";
      document.body.appendChild(weatherScript);
    }

    // Load win95 player script
    const playerScript = document.createElement("script");
    playerScript.src = "win95-player.js";
    playerScript.onload = () => {
      if (typeof initWin95Player === "function") {
        initWin95Player();
      }
    };
    document.body.appendChild(playerScript);
  });
