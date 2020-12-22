import './unsplashBG.js';

window.addEventListener('load', () => {
  loadBackground();
});

const loadBackground = (theme = { name: '' }) => {
  const body = document.querySelector('body');
  const bg = document.createElement('unsplash-bg');

  bg.content = theme;
  body.appendChild(bg);
};
