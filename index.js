const themes = [
  { 
    name: "light", 
    message: "Light theme activated" 
  },
  { 
    name: "dark", 
    message: "Dark theme activated" 
  }
];

const themeBtn = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themeMessage = document.querySelector('[aria-live="polite"]');

const toggleMenu = () => {
  const isExpanded = themeBtn.getAttribute("aria-expanded") === "true";
  themeBtn.setAttribute("aria-expanded", !isExpanded);
  themeDropdown.hidden = isExpanded;
};

themeBtn.addEventListener("click", () => toggleMenu());
themeDropdown.addEventListener("click", (e) => {
  const targetLi = e.target.closest('[role="menuitem"]');
  
  if (targetLi) {
    const selectedName = targetLi.textContent.trim().toLowerCase();
    const selectedTheme = themes.find(t => t.name === selectedName);
    if (selectedTheme) {
      document.body.className = `theme-${selectedName}`;
      themeMessage.textContent = selectedTheme.message;
      toggleMenu();
    }
  }
});