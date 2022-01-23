class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero-inner">
                <h1 class="hero-title">Dapatkan makanan yang sehat, murah dan berkulitas</h1>
                <p class="hero-tagline">Ayo lakukan pemesanan pertamamu dan dapatkan potongan diskon 30% untuk pemesanan pertamamu</p>
            </div>
        </div>`;
  }
}

customElements.define('hero-header', Hero);
