import createElement from "../utils/createElement.js";

export default class ContentService {
  constructor(containerId) {
    const containerElement = document.getElementById(containerId);
    if (!containerElement) {
      throw new Error(`Element with id "${containerId}" not found.`);
    }
    this.container = containerElement;
  }

  static get CSS_CLASSES() {
    return {
      contentCard: 'content_card',
      image: 'content_image',
      contentContainer: 'content_container',
      category: 'content_category',
      name: 'content_name',
      tag: 'content_tag',
      info: 'content_info',
    };
  }

  renderContent(content) {
    const contentCard = createElement('div', ContentService.CSS_CLASSES.contentCard);

    const contentContainer = createElement('div', ContentService.CSS_CLASSES.contentContainer);
    contentCard.appendChild(contentContainer);
    
    const category = createElement('p', ContentService.CSS_CLASSES.category, content.category);
    contentContainer.appendChild(category);
    
    const name = createElement('h2', ContentService.CSS_CLASSES.name, content.name);
    contentContainer.appendChild(name);
    
    const tag = createElement('span', ContentService.CSS_CLASSES.tag, content.tag);
    contentContainer.appendChild(tag);
    
    const info = createElement('p', ContentService.CSS_CLASSES.info, content.info);
    contentContainer.appendChild(info);

    const image = createElement('img', ContentService.CSS_CLASSES.image, content.image);
    image.src = content.image;
    contentCard.appendChild(image);

    contentCard.addEventListener('click', () => {
      window.location.href = content.url;
    });

    this.container.appendChild(contentCard);
  }
}
