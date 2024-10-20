import createElement from "../utils/createElement.js";

export default class MyHealthService {
  constructor(containerId) {
    const containerElement = document.getElementById(containerId);
    if (!containerElement) {
      throw new Error(`Element with id "${containerId}" not found.`);
    }
    this.container = containerElement;
  }

  static get CSS_CLASSES() {
    return {
      myHealthCard: 'myHealth_card',
      image: 'myHealth_image',
      name: 'myHealth_name',
    };
  }

  renderMyHealth(myHealth) {
    const myHealthCard = createElement('div', MyHealthService.CSS_CLASSES.myHealthCard);

    const image = createElement('img', MyHealthService.CSS_CLASSES.image, myHealth.image);
    image.src = myHealth.image;
    myHealthCard.appendChild(image);

    const name = createElement('h2', MyHealthService.CSS_CLASSES.name, myHealth.name);
    myHealthCard.appendChild(name);

    myHealthCard.addEventListener('click', () => {
      window.location.href = myHealth.url;
    });

    this.container.appendChild(myHealthCard);
  }
}