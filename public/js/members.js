$(document).ready(() => {
  // This does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});

document.getElementById("supervisor-btn").onclick = function() {
  window.location.replace("/supervisor");
};

document.getElementById("practitioner-btn").onclick = function() {
  window.location.replace("/practitioner");
};
