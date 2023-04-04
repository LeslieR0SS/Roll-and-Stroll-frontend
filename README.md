<div id="top"></div>


# Roll & Stroll | Front-End
>***Presentation:***
>Hello World! This is the Front-End of our winter project. We are going to integrate our API with a full vanillaJS SPA. That is to say no frameworks. Moreover, I've implented the atomic design pattern

---
## SPA

**SPA** (**S**ingle-**P**age-**A**pplication) is a web application that loads a single HTML page and updates its content dynamically as the user interacts with the application. It provides a more seamless and faster user experience, as it avoids full page reloads. Data for the application is usually loaded asynchronously from a web API.

In a SPA, there are views instead of pages, which are different sections or content of the application. Since the route doesn't have to be changed to access the content, loading is usually fast. However,  for usability is recommended to change the routes, as the browser saves all the views in its history. To modify the routes using the hash of the URL and parameter passing.

For the SEO we could use **SSR** (Server Side Rendering) or **SSG** (Static Site Generator)

<p align="right">(<a href="#top">back to top</a>)</p>

---
## Atomic Design Pattern
**Atomic Design** is a design pattern used in the creation of user interfaces, which is based on the idea of breaking down the interface into smaller, reusable components. These `components` are combined into larger, more complex patterns such as headers, footers, and complete pages. 

The `Helpers` are small functions or utilities used to add functionality to components. For example, a helper could be used to add an animation or visual effect to a button component.

This design patternis useful because it allows designers and developers to create scalable and easy-to-maintain user interfaces, as the components and helpers are reusable and can be easily updated in one place.

<p align="right">(<a href="#top">back to top</a>)</p>

---

### Project Structure

- `Index.html`
- ``App``
  - ``Assets:`` to save all the resources we are going to need. For example: images, css, vectors...
  - `Components`: to store the reusable UI components, such us buttons, forms, modals, navigation bars, etc. Organizing your components in a separate directory makes it easier to maintain and scale your application over time.
  - `Helpers`: this folder is a convention in SPA frameworks and libraries such as React, angular and Vue.js. Is used to store general-purpose functions, services , classes and constants that can be reused throughout a SPA project. Having a dedicated folder for common functionality. helps maintain a clean and organized project structure, facilitates code reuse, and improves project maintainability.
    - `api.js`: config file to store and object with all the variables that will help us to interact and connect with our API
    - `ajax.js`: helper to work with requests AJAX. That help us to process in a better way all the async requests.
  - `App.js`: It is one of the main files in a SPA and is used to define the core logic of the application. .This file is usually closely related to the "index.js" or "main.js" file
  - `index.js`: This file is the entry point of the application and is responsible for initializing the components, loading the dependencies and configuring the routes. It is typically located at the root of the project and is automatically loaded at the start of the SPA.

<p align="right">(<a href="#top">back to top</a>)</p>

---

## API - Express

The backend API we will be using for the Roll and Stroll project is a custom one that I've developed using Express, a popular Node.js framework for building web applications. This API has been specifically designed and implemented  to cater our unique requirements.

It is currently deployed and hosted on our server, ready for use in our application. With this API, we have full control over the functionalities and features it provides, allowing us to tailor it to our specific needs. We are excited to leverage our own API to power our application and deliver a seamless experience to our users.

---




