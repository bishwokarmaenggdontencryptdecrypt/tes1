// Original API URL
const API_URL = "https://flat-voice-c146.sarthak-aganja12345.workers.dev";

// Add input field animations
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', (e) => {
        e.target.style.transform = 'scale(1.02)';
        e.target.style.transition = 'all 0.3s ease';
    });

    input.addEventListener('blur', (e) => {
        e.target.style.transform = 'scale(1)';
    });

    // Add typing animation
    input.addEventListener('input', (e) => {
        e.target.style.transform = 'translateX(2px)';
        setTimeout(() => {
            e.target.style.transform = 'translateX(0)';
        }, 100);
    });
});

// Add button hover animation
document.querySelector('.btn').addEventListener('mouseover', (e) => {
    e.target.style.transform = 'translateY(-3px)';
    e.target.style.boxShadow = '0 5px 15px rgba(0, 123, 255, 0.4)';
});

document.querySelector('.btn').addEventListener('mouseout', (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
});

// Enhanced login function with animations
async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Add button click animation
    const button = document.querySelector('.btn');
    button.style.transform = 'scale(0.95)';
    setTimeout(() => button.style.transform = 'scale(1)', 150);

    try {
        // Add loading animation
        button.innerHTML = '<span class="spinner">⟳</span> Logging in...';
        button.style.pointerEvents = 'none';
        document.querySelector('.spinner').style.animation = 'spin 1s linear infinite';

        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });
        
        const result = await response.json();
        
        if (result.success) {
    localStorage.setItem("authToken", result.token);
    
    // Show checkmark
    const checkmark = document.getElementById("checkmark");
    checkmark.style.display = "flex";
    setTimeout(() => {
        checkmark.style.opacity = "1";
    }, 50);

    // Show success message
    const messageElement = document.getElementById("message");
    messageElement.textContent = "Login Successful!";
    messageElement.className = "login-message success-message";
    messageElement.style.display = "block";
    setTimeout(() => {
        messageElement.style.opacity = 1;
    }, 50);

    // Redirect after delay
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 3000);
} else {
            // Enhanced error animations
            button.innerHTML = 'Login';
            button.style.pointerEvents = 'auto';
            
            const messageElement = document.getElementById("message");
            messageElement.textContent = result.message || "Login failed.";
            messageElement.className = "login-message error-message";
            messageElement.style.display = "block";
            messageElement.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                messageElement.style.opacity = 1;
            }, 50);

            // Shake inputs on error
            document.querySelectorAll('.form-control').forEach(input => {
                input.style.animation = 'shake 0.5s ease';
                setTimeout(() => {
                    input.style.animation = '';
                }, 500);
            });
        }
    } catch (error) {
        button.innerHTML = 'Login';
        button.style.pointerEvents = 'auto';
        
        const messageElement = document.getElementById("message");
        messageElement.textContent = "Error connecting to server.";
        messageElement.className = "login-message error-message";
        messageElement.style.display = "block";
        messageElement.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            messageElement.style.opacity = 1;
        }, 50);
    }
}

// Add keypress animation for Enter key
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const button = document.querySelector('.btn');
        button.style.transform = 'scale(0.95)';
        setTimeout(() => button.style.transform = 'scale(1)', 150);
        login();
    }
});

// Add these keyframe animations to your CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes success-pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
    
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
    
    .spinner {
        display: inline-block;
        margin-right: 5px;
    }
`;
document.head.appendChild(style);

// Rest of the original functions remain unchanged
//change 9.49
async function checkAuth() {
    const token = localStorage.getItem("authToken");
    if (!token) {
        window.location.href = "index.html";
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

function logout() {
    localStorage.removeItem("authToken");
    window.location.href = "login.html";
}
