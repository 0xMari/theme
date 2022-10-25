class MyAccordion extends HTMLElement{
  constructor(){
    super();

    this.addEventListener('click', () => {
      this.classList.toggle('open');
    })

  }

}

customElements.define('my-accordion', MyAccordion)