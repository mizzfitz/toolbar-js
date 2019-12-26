
var ui = {};

class Element{
  //  A root class for all base ui elements (not containers) to descend from
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

  setID(id) {
    this.connector.id = id;
  }

  remove() {
    this.connector.remove();
  }
}

class Text extends Element {
  //  a base class for text elements
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

class Input extends Element {
  // base class for input elements
  constructor(container, style, type='text'){
    super(container, 'input', style);
    this.connector.type = type;
  }
}

class TextField extends Input{
  // a base class for text inputs
  constructor(container, hint, style, type='text') {
    super(container, style, type);
    if (hint !== undefined) {
      this.setHint(hint);
    }
  }

  setHint(hint) {
    this.connector.placeholder = hint;
  }

  setValue(val) {
    this.connector.value = val;
  }

  getValue() {
    return this.connector.value;
  }
}

class Submit extends Input {
  // a class for submit buttons
  constructor(container, style, text) {
    super(container, style, 'submit');
    this.setText(text);
  }

  setText(text) {
    this.connector.value = text;
  }
}

class Button extends Input {
  // a class for all other buttons.  Takes a boolean input (text)
  // to determine wheather to make a text button on an image input to allow
  // for image files to be used as button icons.
  constructor(container, style, text=true, value='') {
    super(container, style, 'button');
    if (text) {
      this.setText(value);
    } else {
      this.setImg(value);
    }
  }

  setText(value) {
    this.connector.type = 'button';
    this.connector.src = undefined;
    this.connector.value = value;
  }

  setImg(value) {
    this.connector.type = 'image';
    this.connector.value = undefined;
    this.connector.src = value;
  }
}
