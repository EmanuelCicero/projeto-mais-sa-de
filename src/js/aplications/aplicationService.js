import createElement from "../utils/createElement.js";

export default class AplicationService {
  constructor(containerId) {
    const containerElement = document.getElementById(containerId);
    if (!containerElement) {
      throw new Error(`Element with id "${containerId}" not found.`);
    }
    this.container = containerElement;
  }

  static get CSS_CLASSES() {
    return {
      aplicationCard: 'aplication_card',
      image: 'aplication_image',
      name: 'aplication_name',
    };
  }

  renderAplication(aplication) {
    const aplicationCard = createElement('div', AplicationService.CSS_CLASSES.aplicationCard);

    const image = createElement('img', AplicationService.CSS_CLASSES.image, aplication.image);
    image.src = aplication.image;
    aplicationCard.appendChild(image);

    const name = createElement('h2', AplicationService.CSS_CLASSES.name, aplication.name);
    aplicationCard.appendChild(name);

    aplicationCard.addEventListener('click', () => {
      window.location.href = aplication.url;
    });

    this.container.appendChild(aplicationCard);
  }
}
