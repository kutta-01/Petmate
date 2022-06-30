function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function shopOpen() {
    document.getElementById("footer_shop").style.display = "block";
  }
  
  function shopClose() {
    document.getElementById("footer_shop").style.display = "none";
  }
  
  function suppClose() {
    document.getElementById("footer_support").style.display = "none";
  }
  function suppOpen() {
    document.getElementById("footer_support").style.display = "block";
  }
  
  function compOpen() {
    document.getElementById("footer_company").style.display = "block";
  }
  
  function compClose() {
    document.getElementById("footer_company").style.display = "none";
  }
  
  function AccOpen() {
    document.getElementById("footer_Acc").style.display = "block";
  }
  
  function AccClose() {
    document.getElementById("footer_Acc").style.display = "none";
  }
  //Get the button
  var mybutton = document.getElementById("myBtn");
            
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
