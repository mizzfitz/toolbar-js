var ui = {
};

class Element{
  constructor(container=document.querySelector('body'), type='p', style) {
    const element = document.createElement(type);
    this.connector = container.appendChild(element);
    if (style !== undefined) {
      this.setStyle(style)
    }
  }

  setStyle(style) {
    this.connector.className = style;
  }
}

class Text extends Element{
  constructor(container, text, style, type='p') {
    super(container, type, style);
    if (text !== undefined) {
      this.setText(text);
    }
  }

  setText(text) {
    this.connector.innerHTML = text;
  }
}
