
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

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation");
        });
    });

    // Close the menu if the user clicks outside it.
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
            "An agriculture-focused project for crop and fertilizer recommendations using soil and environmental information. Update this description to reflect the features implemented in your actual project.",
        github: "https://github.com/vamsivuggam85"
    },

    contact: {
        title: "Contact Management System",
        description:
            "A contact management CRUD application designed to create, retrieve, update and delete contact records using Java, Spring Boot and PostgreSQL.",
        github: "https://github.com/vamsivuggam85"
    },

    cab: {
        title: "Cab Booking Mini-System",
        description:
            "A Java application concept for managing customers, drivers, cabs, bookings and fares using Hibernate and PostgreSQL.",
        github: "https://github.com/vamsivuggam85"
    }
};

function showProject(projectKey) {
    const project = projects[projectKey];

    if (!project || !modal) {
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

if (modalClose) {
    modalClose.addEventListener("click", closeProject);
}

if (modal) {
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeProject();
        }
    });
}

// Close the popup using the Escape key.
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeProject();
    }
});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("form-status");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        if (!name) {
            formStatus.textContent = "Please enter your name.";
            return;
        }

        formStatus.textContent =
            "Thank you, " + name +
            "! This demo form does not send messages yet.";

        contactForm.reset();
    });
}


/* ================= CURRENT YEAR ================= */

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
