document.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        send_and_write();
    }
});

function getAnswer() {
    unknownResponse = true;
    // output
    for (var i = 0; i < matchedInput.length; i++) {
		// special calculator variables
        hasNumber = /\d/.test(Input); // test for input if it has number
        modifiedInput = Input.replace(/[?a-zA-Z:., ]+/g, ""); // for calculator purpose
        if (hasNumber && modifiedInput.match(/-?\d+\.?\d*\s*[-+*/%]\s*-?\d+\.?\d*/)) { // check if the input has number, if it has number, it will perform a calculation
            try {
                answer[0] = "The answer is: " + eval(modifiedInput);
            } catch (error) {
                unknownResponse = false;
            }
            unknownResponse = false;
            break;
        }
        // searching for output using input with unspace
        else if (Input.toLowerCase().match((unspacedmatchedInput[i]))) { // if response match the arrays
            let equivalentResponseSubArrayLength = equivalentResponse[i];
            let randomResponse = Math.floor(Math.random() * equivalentResponseSubArrayLength.length);
            // console.log("Matched Input: " + i);
            // console.log("Output: " + randomResponse);
            answer[0] = equivalentResponse[i][randomResponse];
            unknownResponse = false;
            break;
        }
    }
    // unknown response
    if (unknownResponse == true) {
        unknownResponseFunction();
    }
}

function send_and_write() {
    Input = document.getElementById("chatbox").value;
    if (!Input.trim() == "" && finishedOutput) {
        UserChat = "<br><a class='no-design-a user'><b>You</b>:</a> " + Input;
        document.getElementById("ChatOutput").innerHTML += UserChat;
        OutPut();
        document.getElementById("chatbox").value = "";
    }
}

function fixed_send_and_write(x) {
    Input = x;
    if (!Input.trim() == "" && finishedOutput) {
        UserChat = "<br><a class='no-design-a user'><b>You</b>:</a> " + Input;
        document.getElementById("ChatOutput").innerHTML += UserChat;
        OutPut();
        document.getElementById("chatbox").value = "";
    }
}