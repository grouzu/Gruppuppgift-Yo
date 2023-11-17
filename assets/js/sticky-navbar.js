document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
  
    function updateHeader() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  
    window.onscroll = function () {
      updateHeader();
    };
  
    // Adjust for initial scroll position
    updateHeader();
  });