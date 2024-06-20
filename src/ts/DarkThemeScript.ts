document.addEventListener("DOMContentLoaded", function() {
  const toggleSwitch = document.getElementById("toggle-dark-mode") as HTMLInputElement;
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.body.classList.toggle("dark-mode", currentTheme === "dark");
    toggleSwitch.checked = currentTheme === "dark";
  }

  toggleSwitch.addEventListener("change", switchTheme);

  function switchTheme(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }
});
