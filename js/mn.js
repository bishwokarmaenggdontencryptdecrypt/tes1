const cooldownTime = 60000; // 60 seconds cooldown time
let lastSentTime = localStorage.getItem("lastSentTime") ? parseInt(localStorage.getItem("lastSentTime")) : 0;

async function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    Swal.fire("Oops!", "Please fill in all fields.", "warning");
    return;
  }

  // Check if enough time has passed since the last email was sent
  let currentTime = Date.now();
  if (currentTime - lastSentTime < cooldownTime) {
    let remainingTime = Math.ceil((cooldownTime - (currentTime - lastSentTime)) / 1000);
    Swal.fire("Slow down!", `Please wait ${remainingTime} seconds before sending another email. \nWe have activated Sleep Mode to prevent spam and attacks.`, "info");
    return;
  }

  // Prepare the email data to send
  let data = {
    sender: { email: "dummyone137@gmail.com" },
    to: [{ email: "sarthak.aaganja12@gmail.com" }],
    subject: "New Contact Form Message",
    htmlContent: `<strong>Name:</strong> ${name} <br>
                  <strong>Email:</strong> ${email} <br>
                  <strong>Message:</strong> ${message}`
  };

  try {
    // Send email via Brevo API
    let response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": "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" // Replace with your API Key
      },
      body: JSON.stringify(data)
    });

    let result = await response.json();
    if (response.ok) {
      // Show SweetAlert success message
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully. To prevent from attacks, sleep mode is activated.",
        icon: "success",
        confirmButtonText: "Okay"
      });

      // Update the last sent time in localStorage
      lastSentTime = Date.now();
      localStorage.setItem("lastSentTime", lastSentTime);

      // Start cooldown
      startCooldown();
    } else {
      Swal.fire("Error", result.message || "Failed to send email", "error");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    Swal.fire("Error", "An error occurred while sending your email.", "error");
  }
}

function startCooldown() {
  let feedbackBtn = document.getElementById("feedbackBtn");
  feedbackBtn.classList.add("disabled"); // Disable the button during cooldown

  let countdown = Math.ceil((cooldownTime - (Date.now() - lastSentTime)) / 1000);
  let interval = setInterval(() => {
    feedbackBtn.innerText = `Wait ${countdown--}s`;
    if (countdown < 0) {
      clearInterval(interval);
      feedbackBtn.classList.remove("disabled");
      feedbackBtn.innerHTML = `<i class="bi bi-chat-square-heart"></i> Send`; // Reset button text
    }
  }, 1000);
}

// Restore cooldown after page reload
window.onload = function () {
  if (lastSentTime && Date.now() - lastSentTime < cooldownTime) {
    startCooldown();
  }
};

// Attach event listener to the send button
document.getElementById("feedbackBtn").addEventListener("click", sendEmail);
