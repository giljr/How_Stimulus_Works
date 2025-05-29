# Hello, Stimulus: A Quick Start Guide for Rails Developers

Learn how to add interactive behavior to your Rails application with minimal JavaScript.

Author: J3  
Reading Time: ~3 min  

---

## Overview

The best way to learn how Stimulus works is by building a simple app.  
Stimulus automatically connects DOM elements to JavaScript controller objects.

**Let’s Get Started!**  
_Note: If you get stuck, please see [my page](https://medium.com/jungletronics/hello-stimulus-a-quick-start-guide-for-rails-developers-2689f54a9180).

---

## 0. My System

```bash
ruby -v
# ruby 3.4.2 (2025-02-15 revision d2930f8e7a) +PRISM [x86_64-linux]

rails -v
# Rails 8.0.2
```
### 1. Create Your App
```bash
mkdir stimulus
cd stimulus/
rails new greetings_app
cd greetings_app/
code .
```

### 2. Stimulus Installation (Optional)

In Rails 8, Stimulus is integrated by default. No need to run:

    rails turbo:install stimulus:install

✅ Default Stimulus Setup in Rails 8:

    stimulus-rails gem included.

    app/javascript/controllers/ directory created.

    index.js auto-loads controllers.

    application.js imports controllers.

    Import Maps configured in config/importmap.rb.

Start using Stimulus immediately!
### 3. Generate Controller and View

    rails generate controller greetings index

### 4. Add Import Maps (Optional)
Pin local-time

    bin/importmap pin local-time


Update Configuration

`config/application.rb`:
```ruby
config.time_zone = "America/Porto_Velho"
config.active_record.default_timezone = :local
```
`app/javascript/application.js`:
```ruby
import LocalTime from "local-time"
LocalTime.start()
```
View:
`app/views/greetings/index.html.erb`
```ruby
<h1>Welcome to Greetings App!</h1>
<strong>Your Local Time is:</strong>
<%= time_tag Time.now, "data-local": "time", "data-format": "%B %e, %Y %l:%M %P" %>
```
### 5. Set the Root Route

`config/routes.rb`:

    root "greetings#index"

### 6. Generate Stimulus Controller

    rails generate stimulus greeting

Creates: `app/javascript/controllers/greeting_controller.js`
### 7. Edit the Controller

`greeting_controller.js`:
```ruby
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["name", "output"];

  connect() {
    console.log("GreetingController connected");
  }

  greet() {
    const name = this.nameTarget.value.trim();
    this.outputTarget.textContent = name
      ? `Hello, ${name}!`
      : "Please enter your name.";
  }
}
```
### 8. Update the View

`app/views/greetings/index.html.erb`:
```ruby
<div data-controller="greeting">
  <label for="name">Enter your name:</label>
  <input id="name" data-greeting-target="name" type="text" placeholder="Your name">

  <button data-action="click->greeting#greet">Greet Me</button>

  <p data-greeting-target="output" style="margin-top: 20px;"></p>
</div>
```
### 9. Run the Server

    bin/dev

✅ Conclusion

This is a simple app designed to introduce you to Rails 8 and Stimulus.
With Stimulus and Import Maps, you can build interactive features while keeping your Rails app simple and server-rendered.
📚 References

[Stimulus in Rails by Tejal Panjwani](https://tejal-panjwani.medium.com/stimulus-in-rails-de43a49d4423)

[Hello, Stimulus by handbook](https://stimulus.hotwired.dev/handbook/hello-stimulus)

[Stimulus Actions - Handbook](https://stimulus.hotwired.dev/reference/actions)

[Stimulus Starter Project by DHH (Basecamp, LLC)](https://github.com/hotwired/stimulus-starter)

👉 Ready to dive deeper? Check out the [official Stimulus tutorial](https://stimulus.hotwired.dev/handbook/hello-stimulus).
## License

[MIT](https://choosealicense.com/licenses/mit/)

