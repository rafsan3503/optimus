window.onload = function () {
  var modal2 = document.getElementById("myModal");
  var span = document.getElementById("popImg");
  var landingPage = document.getElementById("main");

  // When the page loads, open the modal
  modal2.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal2.style.display = "none";
    landingPage.style.display = "block";
  };
};
