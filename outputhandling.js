var speedInterval = 2.5;
    var currentIndex = 0;
    var timer;
    var finishedOutput = true;
    var textSpecificTopic; // if it is empty, there is no specific topic by default
    var textSpecificTopicCount = 0; // if this reaches certain point, it means that the topic is closed

    var unknownResponse;
    var UserChat;
    var Input;
    var answer = [];
    answer[0] = "IMPORTANT ANNOUNCEMENT: Starting from January 29, 2024, we have revised our scope and expanded our service. We went from website and chatbot to software development service. We also updated our legal document, check it out for more info.[br][br]Good day, how can i help you?";
    var random_array = answer[0];
    var unspacedmatchedInput = [];
    for (let o = 0; o < matchedInput.length; o++) {
        unspacedmatchedInput[o] = matchedInput[o].replace(/ /g, ".*");
    }
    var hasNumber;

    function randomArray() {
        random_array = answer[Math.floor(Math.random() * answer.length)];
    }


    function generateText() {
     if (currentIndex < random_array.length) {
      finishedOutput = false;
      var currentChar = random_array[currentIndex];
	  document.getElementById("ChatOutput").innerHTML += currentChar;
	  plainTagsReplacement();
      currentIndex++;
      scrollToBottom();
        } else {
            go = false;
            finishedOutput = true;
            clearInterval(timer);
            temp = answer[0]; // assign temporary value
            answer = []; // clear the value of the array so that the previous answer wont be read
            answer[0] = temp;
            random_array = answer[0];
            scrollToBottom();
    }
}

    function OutPut() {
        getAnswer();
        randomArray();
        document.getElementById("ChatOutput").innerHTML += "<br><a class='no-design-a bot'><b>Bot</b></>: ";
        currentIndex = 0;
        timer = setInterval(generateText, speedInterval);
    }