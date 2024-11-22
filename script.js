// script.js
function sendMessage(event) {
  if (event.key === "Enter") {
    processMessage();
  }
}

function sendMessageButton() {
  processMessage();
}

function processMessage() {
  const typingIndicator = document.getElementById("typing-indicator");
  typingIndicator.style.display = "block";

  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() !== "") {
    addMessage(userInput, "user-message");
    document.getElementById("user-input").value = "";

    setTimeout(() => {
      addMessage(getBotResponse(userInput), "bot-message");
      typingIndicator.style.display = "none";
    }, 1000); // Adjust the timeout as needed
  } else {
    typingIndicator.style.display = "none";
  }
}

function addMessage(message, className) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.className = `message ${className}`;
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("balance")) {
    return "Your current balance is $1,234.56.";
  } else if (
    input.includes("hello") ||
    input.includes("hi") ||
    input.includes("hey")
  ) {
    return "Hello! How can I help you today?";
  } else if (
    input.includes("transfer") ||
    input.includes("send money") ||
    input.includes("move money") ||
    input.includes("pay")
  ) {
    return "To transfer money, please provide the recipient details.";
  } else if (
    input.includes("bye") ||
    input.includes("goodbye") ||
    input.includes("see you")
  ) {
    return "Goodbye! Have a great day!";
  } else {
    const unknownResponses = [
      "I am sorry, I do not understand that. Can you please rephrase?",
      "I am sorry, please specify what you mean.",
      "I am not sure I understand. Could you clarify?",
      "I'm sorry, could you please provide more details?",
      "I didn't get that. Can you say it in a different way?",
    ];
    return unknownResponses[
      Math.floor(Math.random() * unknownResponses.length)
    ];
  }
}
