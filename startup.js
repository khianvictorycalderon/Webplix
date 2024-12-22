    function con() {
		alert("WARNING: This is just a sample website, not everything here is true");
        document.getElementById("every-display").style.display = "block";
        document.getElementById("ChatOutput").innerHTML += "<a class='no-design-a bot'><b>Bot</b></>: ";
        currentIndex = 0;
        timer = setInterval(generateText, speedInterval);
    }

    document.addEventListener("DOMContentLoaded", function() {
        const elements = document.querySelectorAll(".animate-delay");
      
        elements.forEach(element => {
          const delay = parseFloat(element.getAttribute("delay"));
          setTimeout(() => {
            element.style.animation = "webplixOfferListsTextAnimation 1s ease-out forwards";
            element.style.opacity = "1";
          }, delay * 1000);
        });
      });

    document.addEventListener("DOMContentLoaded", function() {
        const elements = document.querySelectorAll(".generalSlideLeft-delay");
      
        elements.forEach(element => {
          const delay = parseFloat(element.getAttribute("delay"));
          setTimeout(() => {
            element.style.animation = "generalSlideLeftwithVisibility 1s ease-out forwards";
            element.style.opacity = "1";
          }, delay * 1000);
        });
      });