document.addEventListener("DOMContentLoaded", function() {
    // Gestionnaire de clic pour le bouton de personnalisation
    const customizeBtn = document.getElementById("customizeBtn");
    if (customizeBtn) {
        customizeBtn.addEventListener("click", function() {
            customizeDesign();
        });
    }

    function customizeDesign() {
        alert("Customizing design...");
    }

    // Gestionnaire de clic pour le bouton d'ajout d'expérience
    const addExperienceBtn = document.getElementById("addExperienceBtn");
    if (addExperienceBtn) {
        addExperienceBtn.addEventListener("click", function() {
            addExperience();
        });
    }

    function addExperience() {
        const experienceSection = document.getElementById("work-experience");
        if (experienceSection) {
            const inputField = document.createElement("div");
            inputField.innerHTML = `
                <label for="experience">Experience:</label>
                <textarea name="experience" rows="4" required></textarea><br>
            `;
            experienceSection.appendChild(inputField);
        }
    }

    // Gestionnaire de soumission du formulaire de CV
    const resumeForm = document.getElementById("resumeForm");
    if (resumeForm) {
        resumeForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const fullName = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const summary = document.getElementById("skills").value;
            const experienceInputs = document.querySelectorAll("textarea[name='experience']");

            const outputExperience = [];
            experienceInputs.forEach(input => {
                outputExperience.push(input.value);
            });

            const alertMessage = `
                Name: ${fullName}
                Email: ${email}
                Phone: ${phone}
                Summary: ${summary}
                Experience:
                ${outputExperience.join("\n")}
            `;

            alert(alertMessage);
        });
    }
});