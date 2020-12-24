export default class MemoCard extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  static memoContent(memo, time) {
    console.log(this);
    this.root.innerHTML = `
      <div class="memoCard">
        <p class="timeStamp">${time.getDate()}</p>
        
      </div>
    `;
  }

  createMemo() {
    console.log(this.memoContent);
  }
}

customElements.define("memo-card", MemoCard);
