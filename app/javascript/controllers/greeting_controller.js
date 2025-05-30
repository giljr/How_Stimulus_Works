import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("GreetingController connected");
  }
  // Declares which elements your controller should recognize as "targets."
  // Without this declaration, Stimulus doesn't know that data-<controller>-target="name" elements are linked to this controller, 
  // so it does not create the this.nameTarget property.
  static targets = ["name", "output"];

  greet() {
    const name = this.nameTarget.value.trim();
    this.outputTarget.textContent = name
      ? `Hello, ${name}!`
      : "Please enter your name.";
  }

}
