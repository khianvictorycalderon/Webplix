    /*
    function smoothScroll(event) {
      event.preventDefault(); // Prevent the default link behavior

      var targetDiv = document.getElementById("chatbot"); // Get the target div
      if (targetDiv) {
        var offsetTop = targetDiv.getBoundingClientRect().top;
        var scrollDistance = window.pageYOffset + offsetTop;

        // Scroll to the target div with a delay of 300 milliseconds (adjust as needed)
        setTimeout(function() {
          window.scrollTo({
            top: scrollDistance,
            behavior: "smooth"
          });
        }, 100);
      }
    } */
	
	function scrollToBottom() {
        const xbt = document.getElementById("ChatOutput");
        xbt.scrollTop = xbt.scrollHeight;
    }