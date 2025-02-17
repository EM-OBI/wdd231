export default function localS() {
    document.addEventListener("DOMContentLoaded", function () {
        const messageElement = document.querySelector(".visit-message");
        let visitCount = parseInt(localStorage.getItem("visitCount"), 10) || 0;

        visitCount++;

        if (visitCount === 1) {
            messageElement.textContent = "Welcome to Vincitore Dental Clinic Online! Feel free to schedule an appointment or walk into any of our branches! We look forward to having you.";
        } else {
            messageElement.textContent = `Welcome back to Vincitore Dental Clinic Online! Feel free to schedule an appointment or walk into any of our branches! We look forward to having you.`;
        }

        localStorage.setItem("visitCount", visitCount);
    });
}