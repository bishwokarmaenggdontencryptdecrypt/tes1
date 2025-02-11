  // Use your Cloudflare Worker URL here:
        const API_URL = "https://flat-voice-c146.sarthak-aganja12345.workers.dev";

        // Login function: sends credentials to the worker.
        async function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch(`${API_URL}/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password })
                });
                const result = await response.json();
                if (result.success) {
                    localStorage.setItem("authToken", result.token);
                    
                    // Show green checkmark with animation
                    document.getElementById("checkmark").style.display = "flex"; 
                    setTimeout(() => {
                        document.getElementById("checkmark").style.opacity = 1;  // Fade in the checkmark
                    }, 50); // Short delay for smooth transition

                    // Show success message with fade-in animation
                    const messageElement = document.getElementById("message");
                    messageElement.textContent = "Login Successful!";
                    messageElement.className = "login-message success-message"; // Show success message
                    messageElement.style.display = "block";
                    setTimeout(() => {
                        messageElement.style.opacity = 1; // Fade in the message
                    }, 50); // Short delay for smooth transition

                    setTimeout(() => {
                        window.location.href = "dashboard.html"; // Redirect after 3 seconds
                    }, 3000);
                } else {
                    document.getElementById("message").textContent = result.message || "Login failed.";
                    document.getElementById("message").className = "login-message error-message";
                    document.getElementById("message").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("message").style.opacity = 1; // Fade-in error message
                    }, 50);
                }
            } catch (error) {
                document.getElementById("message").textContent = "Error connecting to server.";
                document.getElementById("message").className = "login-message error-message";
                document.getElementById("message").style.display = "block";
                setTimeout(() => {
                    document.getElementById("message").style.opacity = 1; // Fade-in error message
                }, 50);
            }
        }

        // Check authentication: verifies the token before allowing access to the dashboard.
        async function checkAuth() {
            const token = localStorage.getItem("authToken");
            if (!token) {
                window.location.href = "login.html";
                return;
            }
            try {
                const response = await fetch(`${API_URL}/verify`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token })
                });
                const result = await response.json();
                if (!result.success) {
                    localStorage.removeItem("authToken");
                    window.location.href = "index.html";
                }
            } catch (error) {
                localStorage.removeItem("authToken");
                window.location.href = "index.html";
            }
        }

        // Logout function: clears the token and returns to the login page.
        function logout() {
            localStorage.removeItem("authToken");
            window.location.href = "login.html";
        }
