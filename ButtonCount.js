class ButtonCount extends HTMLElement {
    constructor() {
      super();
      
      this.attachShadow({ mode: 'open' });
  
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        this.count++;
        this.render();
      });
  
      this.count = 0;
      this.render();
  
      this.shadowRoot.appendChild(this.button);
    }
  
    render() {
        this.button.textContent = `Clicked ${this.count} times`;
    }
  }
  
  customElements.define('button-count', ButtonCount);
  