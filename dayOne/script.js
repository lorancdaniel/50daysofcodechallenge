const PANELS = document.querySelectorAll('.panel');
PANELS.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

const removeActiveClasses = () => {
  PANELS.forEach((panel) => {
    panel.classList.remove('active');
  });
};
