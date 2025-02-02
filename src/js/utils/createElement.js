export default function createElement(tag, className, textContent) {
  const element = document.createElement(tag);
  element.className = className;
  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}
