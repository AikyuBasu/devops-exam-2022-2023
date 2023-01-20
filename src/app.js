/* istanbul ignore file */
try {
    const {
        isEmpty,
        containsDigit,
        containsSpecialChar,
        isLongEnough,
    } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        feedbackMessageText =
            !isEmpty(gamerTagValue) &&
            isLongEnough(gamerTagValue) &&
            containsDigit(gamerTagValue) &&
            containsSpecialChar(gamerTagValue)
                ? "Gamer tag is valid"
                : "Gamer tag is not valid";
        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
