"use strict";

/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    // Close the mobile menu when a navigation link is clicked.
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation");
        });
    });

    // Close the menu when the user clicks outside it.
    document.addEventListener("click", function (event) {
        if (
            !navLinks.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            navLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation");
        }
    });
}


/* ================= DARK / LIGHT THEME ================= */

const themeButton = document.getElementById("theme-btn");

if (themeButton) {
    // Set the correct icon when the page loads.
    const startsDark = document.body.classList.contains("dark-theme");

    themeButton.textContent = startsDark ? "☀️" : "🌙";

    themeButton.setAttribute(
        "aria-label",
        startsDark ? "Switch to light theme" : "Switch to dark theme"
    );

    themeButton.addEventListener("click", function () {
        const isDark = document.body.classList.toggle("dark-theme");

        themeButton.textContent = isDark ? "☀️" : "🌙";

        themeButton.setAttribute(
            "aria-label",
            isDark ? "Switch to light theme" : "Switch to dark theme"
        );
    });
}


/* ================= PROJECT DETAILS ================= */

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalGithub = document.getElementById("modalGithub");
const modalClose = document.getElementById("modal-close");

const projects = {
    agro: {
        title: "AgroIntelligence",
        description:
            "An agriculture-focused project designed to support crop and fertilizer recommendations using soil and environmental information. Its proposed features include manual soil inputs and location-based recommendations.",
        github: "https://github.com/vamsivuggam85"
    },

    contact: {
        title: "Contact Management System",
        description:
            "A Java backend CRUD application for managing contact information. It uses Spring Boot and PostgreSQL to practise creating, retrieving, updating and deleting records.",
        github: "https://github.com/vamsivuggam85"
    },

    cab: {
        title: "Cab Booking Mini-System",
        description:
            "A Java application for practising cab booking workflows, including customers, drivers, cabs, bookings and fare details, with Hibernate and PostgreSQL.",
        github: "https://github.com/vamsivuggam85"
    }
};


// Display the selected project's details.
function showProject(projectKey) {
    const project = projects[projectKey];

    if (
        !project ||
        !modal ||
        !modalTitle ||
        !modalDescription ||
        !modalGithub
    ) {
        return;
    }

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalGithub.href = project.github;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");

    if (modalClose) {
        modalClose.focus();
    }
}


// Add click events to all project buttons.
document.querySelectorAll(".project-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        showProject(button.dataset.project);
    });
});


/* ================= CLOSE PROJECT MODAL ================= */

function closeProject() {
    if (!modal) {
        return;
    }

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
}


// Close the popup using the close button.
if (modalClose) {
    modalClose.addEventListener("click", closeProject);
}


// Close the popup when clicking outside its content.
if (modal) {
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeProject();
        }
    });
}


// Close the popup by pressing Escape.
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeProject();
    }
});


/* ================= CONTACT FORM ================= */

// IMPORTANT:
// Do not use event.preventDefault() here.
// The browser must submit the form to FormSubmit using the action
// attribute defined in index.html.

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function () {
        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        // Let the browser submit the form normally.
        // Do not reset the form or prevent submission here.
    });
}


/* ================= CURRENT YEAR ================= */

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
