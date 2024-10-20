import createElement from "../utils/createElement.js";

export default class DetailService {
  constructor(containerId) {
    const containerElement = document.getElementById(containerId);
    if (!containerElement) {
      throw new Error(`Element with id "${containerId}" not found.`);
    }
    this.container = containerElement;
  }

  static get CSS_CLASSES() {
    return {
      detailCard: 'detail_card',
      valueContainer: 'detail_container_value',
      value: 'detail_value',
      quantity: 'detail_quantity',
      name: 'detail_name',
    };
  }

  renderDetail(detail) {
    const detailCard = createElement('div', DetailService.CSS_CLASSES.detailCard);
    
    const valueContainer = createElement('div', DetailService.CSS_CLASSES.valueContainer);
    detailCard.appendChild(valueContainer);

    const value = createElement('span', DetailService.CSS_CLASSES.value, detail.value.toString());
    valueContainer.appendChild(value);

    const quantity = createElement('span', DetailService.CSS_CLASSES.quantity, detail.quantity.toString());
    valueContainer.appendChild(quantity);

    const name = createElement('h2', DetailService.CSS_CLASSES.name, detail.name);
    detailCard.appendChild(name);

    this.container.appendChild(detailCard);
  }
}
