class ButtonCount extends HTMLElement {
    constructor() {
      super();
      
      this.attachShadow({ mode: 'open' });
  
      const button = document.createElement('button');
      button.textContent = 'Click me';
      button.addEventListener('click', () => {
        this.count++;
        this.render();
      });
  
      this.count = 0;
      this.countDisplay = document.createTextNode(`Clicked ${this.count} times`);
  
      this.shadowRoot.appendChild(button);
      this.shadowRoot.appendChild(this.countDisplay);
    }
  
    render() {
      this.countDisplay.textContent = `Clicked ${this.count} times`;
    }
  
    connectedCallback() {
      this.render();
    }
  }
  
  customElements.define('button-count', ButtonCount);
  