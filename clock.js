class Clock extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    setInterval(() => {
      this.renderClock();
    }, 1000);
  }

  renderClock() {
    const Time = new Date();
    const date = Time.toDateString();
    const hour = Time.getHours() > 12 ? Time.getHours() - 12 : Time.getHours();
    const minute = Time.getMinutes();
    const meridiem = hour >= 12 ? 'PM' : 'AM';
    const time = `${hour}:${minute} ${meridiem}`;

    this.root.innerHTML = `
    <style>
      .clockWrap{
          padding: 0.25rem 1rem 0.25rem 1rem;
          position: absolute;
          left: 20%;
          font-size: 3rem;
          line-height: 0;
          width: fit-content;
          height: fit-content;
          color: white;
          background-color: rgba(0, 0, 0, 0.3);
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
          text-align: center;
          border-radius: 1rem;
      }
    </style>
    <div class='clockWrap'>
      <p class='date'>${date}</p>
      <p class='time'>${time}</p>
    </div>
    `;
  }
}

customElements.define('gc-clock', Clock);
