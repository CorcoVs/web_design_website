recentWorkSection.style.backgroundColor = darkColor;

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

document.addEventListener("DOMContentLoaded", function () {
  const recentWork = document.getElementById("recent-work");
  const cards = document.querySelectorAll(".card");

  function handleScroll() {
    const rect = recentWork.getBoundingClientRect();
    const isSticky = rect.top <= 0;

    cards.forEach((card) => {
      card.classList.toggle("sticky", isSticky);
    });
  }

  window.addEventListener("scroll", handleScroll);
});

document.getElementById("myButton").onclick = function () {
  location.href = "https://www.figma.com";
};
