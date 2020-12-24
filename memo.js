class Memo extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.root.innerHTML = `
      <style>
        .memoWrap{
          position: absolute;
          top: 50%;
          padding: 0.25rem 1rem 0.25rem 1rem;
          background-color: rgba(0, 0, 0, 0.3);
          text-align: center;
          border-radius: 1rem;
          transition: 0.5s;
          width: fit-content;
          height: fit-content;
        }
        .memoWrap:hover {
            background-color: rgba(0, 0, 0, 0.5);
            transition: 0.5s;
          }
      </style>
      <div class='memoWrap'>
        <form class='memoForm'>
          <input class='memoInput' type='text' />
        </form>
       </div>
      `;

    const memoForm = this.shadowRoot.querySelector('.memoForm');
    const memoInput = this.shadowRoot.querySelector('.memoInput');
    memoForm.addEventListener('submit', (e) =>
      this.renderMemo(e, memoInput.value)
    );
  }

  renderMemo(e, value) {
    e.preventDefault();
    console.log(value);
  }
}

customElements.define('gc-memo', Memo);
