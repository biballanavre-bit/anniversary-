function bukaPesan() {
  const sections = document.querySelectorAll(".hidden");
  
  sections.forEach(function(section) {
    section.classList.remove("hidden");
  });
  
  document.getElementById("story").scrollIntoView({
    behavior: "smooth"
  });
}
