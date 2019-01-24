class View {
  constructor(controller) {
    this.controller = controller;
    this.heading = document.getElementById("heading");
  }
}

class Model {
  constructor() {
    this.heading = "hello";
  }
}
