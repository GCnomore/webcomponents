class UnsplashBG extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.renderBg();
  }
  renderBg(theme = localStorage.getItem('theme')) {
    if (!theme) {
      this.root.innerHTML = `
        <style>
          div{
              z-index: -1000;
              position: absolute;
              height: 100%;
              width: 100%;
              opacity: 0.75;
            }
          img{
              height: 100vh;
              width: 100vw;
              position: absolute;
              z-index: -1000;    
            }
          input{
              position: absolute;
              right: 0;
              outline:none
            }
            .changeIconWrap {
                display: flex;
                z-index: 1;
                opacity: 0.5;
                align-items: baseline;
                height: fit-content;
                justify-content: flex-end;
                position: absolute;
                right: 0;
                width: fit-content;
                user-select: none;
                cursor: pointer;
            }
            p{
                margin: 0;
            }
            .icon_1{
                font-size: 1rem;
                letter-spacing: -3px;
            }
            .icon_2{
                font-size: 0.8rem;
                letter-spacing: -2px;
            }
            .icon_3{
                font-size: 0.5rem;
            }
            .hide {
                display: none;
            }
        </style>
        <div>
        <div class='changeIconWrap'>
            <p class='icon_1'>⚪</p><p class='icon_2'>⚪</p><p class='icon_3'>⚪</p>
            </div>
            <input class='themeInput hide' type='text' placeholder='Background Theme'>
          <img draggable="false" src="https://source.unsplash.com/random/${window.innerWidth}x${window.innerHeight}/">
          </div>
          `;
    } else {
      this.root.innerHTML = `
        <style>
            div{
                z-index: -1000;
                position: absolute;
                height: 100%;
                width: 100%;
                opacity: 0.75;
            }
            img{
                height: 100vh;
                width: 100vw;
                position: absolute;
                z-index: -1000;
            }
            input{
                position: absolute;
                right: 0;
                outline:none

            }
            .changeIconWrap {
                display: flex;
                z-index: 1;
                opacity: 0.5;
                align-items: baseline;
                height: fit-content;
                justify-content: flex-end;
                position: absolute;
                right: 0;
                width: fit-content;
                user-select: none;
                cursor: pointer;
            }
            p{
                margin: 0;
            }
            .icon_1{
                font-size: 1rem;
                letter-spacing: -3px;
            }
            .icon_2{
                font-size: 0.8rem;
                letter-spacing: -2px;
            }
            .icon_3{
                font-size: 0.5rem;
            }
            .hide {
                display: none;
            }
        </style>
        <div>
        <div class='changeIconWrap'>
            <p class='icon_1'>⚪</p><p class='icon_2'>⚪</p><p class='icon_3'>⚪</p>
            </div>
            <input class='themeInput hide' type='text' placeholder='Background Theme'>
        <img draggable="false" src="https://source.unsplash.com/${window.innerWidth}x${window.innerHeight}/?${theme}">
        </div>
        `;
    }
    const changeWrap = this.shadowRoot.querySelector('.changeIconWrap');
    const themeInput = this.shadowRoot.querySelector('.themeInput');

    changeWrap.addEventListener('click', () => {
      changeWrap.classList.add('hide');
      themeInput.classList.remove('hide');
    });

    themeInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        localStorage.setItem('theme', themeInput.value);
        this.renderBg(themeInput.value);
        changeWrap.classList.remove('hide');
        themeInput.classList.add('hide');
      }
    });
  }
}

customElements.define('unsplash-bg', UnsplashBG);
