async function includeHTML(id, file) {
  const target = document.getElementById(id);
  if (!target) return;

  const response = await fetch(file);
  const html = await response.text();
  target.innerHTML = html;

  if (id === "footer") {
    setPageNumber();
  }
}

function setPageNumber() {
  const page = document.body.dataset.page;
  const pageNumber = document.getElementById("pageNumber");

  if (page && pageNumber) {
    pageNumber.textContent = page + " / 27";
  }
}

includeHTML("header", "header.html");
includeHTML("footer", "footer.html");