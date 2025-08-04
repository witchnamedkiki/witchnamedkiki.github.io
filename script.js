function loadComponent(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("HTTP error " + response.status);
      return response.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(error => {
      console.error("Could not load component:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header-container", "header.html");
});


