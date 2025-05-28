import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("GreetingController connected");
  }

  static targets = ["name", "output"];

  greet() {
    const name = this.nameTarget.value.trim();
    this.outputTarget.textContent = name
      ? `Hello, ${name}!`
      : "Please enter your name.";
  }

}
