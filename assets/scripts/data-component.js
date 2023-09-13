class DataComponent extends HTMLElement {
  constructor() {
    super();
    this.value = parseInt(this.getAttribute("value"));
    this.label = this.getAttribute("label");
    this.count = 0;
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.startCounting();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        section {
          display: grid;
          justify-items: center;
          text-align: center;
          gap: var(--spacing);
          font-size: 1.5rem;
          border: 1px solid var(--ink);
          box-shadow: 3px 5px 0 var(--brand);
          height: 100%;
          padding: calc(var(--spacing) /4);
        }
        data {
        font-size: 3em;
        font-weight: 700;
        }
        </style>
      <section>
        <data>${this.value}%</data>
        <p>${this.label}</p>
      </section>
    `;
  }

  startCounting() {
    const dataElement = this.shadowRoot.querySelector("data");
    const intervalId = setInterval(() => {
      if (++this.count > this.value) clearInterval(intervalId);
      else dataElement.textContent = `${this.count}%`;
    }, 10);
  }
}

customElements.define("data-component", DataComponent);
