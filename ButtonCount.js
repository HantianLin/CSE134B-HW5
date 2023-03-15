class ButtonCount extends HTMLElement {
    constructor() {
      super();
      
      this.attachShadow({ mode: 'open' });
  
      this.button = document.createElement('button');
      this.button.addEventListener('click', () => {
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
  