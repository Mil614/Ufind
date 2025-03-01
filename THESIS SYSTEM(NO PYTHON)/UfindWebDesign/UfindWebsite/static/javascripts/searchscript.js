// Sidebar Toggle
const menuBtn = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-menu");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.style.transform = "translateX(0)";
});

closeMenu.addEventListener("click", () => {
    sidebar.style.transform = "translateX(-100%)";
});

// Notification and Profile Popups
const notifBtn = document.getElementById("notif-btn");
const profileBtn = document.getElementById("profile-btn");
const notifPopup = document.getElementById("notif-popup");
const profilePopup = document.getElementById("profile-popup");

notifBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    notifPopup.classList.toggle("hidden");
    profilePopup.classList.add("hidden");
});

profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    profilePopup.classList.toggle("hidden");
    notifPopup.classList.add("hidden");
});

// Close popups when clicking outside
document.addEventListener("click", (e) => {
    if (!notifBtn.contains(e.target) && !notifPopup.contains(e.target)) {
        notifPopup.classList.add("hidden");
    }
    if (!profileBtn.contains(e.target) && !profilePopup.contains(e.target)) {
        profilePopup.classList.add("hidden");
    }
});

// Show loading screen before redirection
document.addEventListener("DOMContentLoaded", function () {
    const sendBtn = document.querySelector(".send-btn");
    const loadingScreen = document.getElementById("loading-screen");
    

    sendBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents instant navigation
        document.getElementById("loading-screen").style.visibility = "visible";
        document.getElementById("loading-screen").style.opacity = "1";        

        setTimeout(() => {
            window.location.href = "items.html"; // Redirect after delay
        }, 6000); // 3 seconds delay
    });
});
