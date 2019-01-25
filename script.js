class View {
  constructor(controller) {
    this.controller = controller;
    this.heading = document.getElementById("heading");
    this.heading.innerText = controller.getModelHeading();
    this.heading.addEventListener("click", controller);
  }
}

class Model {
  constructor() {
    this.heading = "hello";
  }
}

class Controller {
  constructor(model) {
    this.model = model;
  }

  handleEvent(e) {
    e.stopPropagation();
    if (e.type === "click") {
      // e.target === h1#heading
      this.clickHandler(e.target);
    }
  }

  getModelHeading() {
    return this.model.heading;
  }

  clickHandler(target) {
    // update model
    this.model.heading = "changed";
    target.innerText = this.model.heading;
  }
}

function main() {
  const model = new Model();
  const controller = new Controller(model);
  const view = new View(controller);
  console.log(view);
}

main();
