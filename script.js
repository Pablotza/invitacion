const stories = document.querySelectorAll(".story");
const nextButtons = document.querySelectorAll(".next");
const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const music = document.getElementById("music");

let current = 0;

function showStory(index) {
  stories.forEach(story => story.classList.remove("active"));
  stories[index].classList.add("active");
}

nextButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    current++;
    showStory(current);

    if (current === 1) {
      music.play().catch(() => {});
    }
  });
});

yesButton.addEventListener("click", () => {
  current++;
  showStory(current);
});

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noButton.style.transform = `translate(${x}px, ${y}px)`;
});
