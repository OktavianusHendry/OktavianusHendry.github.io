document.addEventListener("DOMContentLoaded", function () {
  function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("apply")) {
      return "You can apply for the new school year by visiting our admissions page and filling out the online application form.";
    } else if (input.includes("deadline")) {
      return "The application deadlines are listed on our admissions page. Please make sure to submit your application before the deadline.";
    } else if (input.includes("documents required")) {
      return "You will need to submit your previous school transcripts, a personal statement, and letters of recommendation.";
    } else if (input.includes("contact")) {
      return "You can contact the admissions office by emailing admissions@school.edu or calling (123) 456-7890.";
    } else if (input.includes("fees")) {
      return "The tuition fees vary depending on the program. Please visit our tuition and fees page for detailed information.";
    } else if (input.includes("scholarships")) {
      return "Yes, we offer a variety of scholarships. Please visit our scholarships page for more information on how to apply.";
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

  document
    .getElementById("chatbot-toggle")
    .addEventListener("click", function () {
      document.getElementById("chatbot-screen").style.display = "flex";
    });

  document
    .getElementById("chatbot-close")
    .addEventListener("click", function () {
      document.getElementById("chatbot-screen").style.display = "none";
    });

  document
    .getElementById("chatbot-send")
    .addEventListener("click", function () {
      const input = document.getElementById("chatbot-input");
      const message = input.value.trim();
      if (message) {
        const messages = document.getElementById("chatbot-messages");
        const userMessage = document.createElement("div");
        userMessage.textContent = message;
        userMessage.className = "user-message";
        messages.appendChild(userMessage);
        input.value = "";

        // Add bot response
        const botMessage = document.createElement("div");
        botMessage.textContent = getBotResponse(message);
        botMessage.className = "bot-message";
        messages.appendChild(botMessage);

        // Scroll to the latest message
        messages.scrollTop = messages.scrollHeight;
      }
    });
});
