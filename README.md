# Openai Frontend

This project demonstrates the creation of a web application using the GPT-4 model from OpenAI's ChatGPT API. The goal is to provide an example of how to build a complex project by integrating various technologies and components, such as a frontend, backend, and a Python service that interacts with the GPT-4 model. The developer log entries in this README document the steps taken during the development process, serving as a guide for others who wish to create similar projects.

## Developer Log

---

### Log Entry 2 - OpenAI NPM Package and Removing Python Service

**created_at:** 2023-03-31T22:58:00+00:00  
**developer:** [cutmasta-kun](https://github.com/cutmasta-kun)  
**alias:** a7c4e5ce498c4b9cc0cc02c1a3e7e3fe

We discovered that there is an NPM package, `openai`, which simplifies communication with the OpenAI API. This eliminates the need for a separate Python service, so we have decided to remove the Python service from our project.

**Updated Technology Stack:**

- 🌐 Frontend: Svelte
- ⚙️ Backend: Express.js (with TypeScript)
- ~~🐍 Python Service: openai_gpt4~~ (Removed)

**Updated Project Structure:**

- 🚀 `/deploy`: Contains all Dockerfiles and orchestration files (e.g., docker-compose.yml) for deployment.
- 📁 `/src`: Contains all source code for the project.
  - ⚙️ `/src/backend`: Backend code, written in Express.js and TypeScript.
  - 🌐 `/src/frontend`: Frontend code, developed with Svelte.
  - ~~🐍 `/src/openai_gpt4`: Python service that uses the OpenAI API to make GPT-4 predictions.~~ (Removed)

**Next Steps:**

1. 🌐 Frontend: Set up Svelte project and develop user interface.
2. ⚙️ Backend: Set up Express.js project with TypeScript, implement API endpoints, and integrate the `openai` NPM package for GPT-4 communication.
3. 🚀 Deployment: Create Dockerfiles for the backend, use Docker Compose for orchestration.

---

### Log Entry 1 - Project Structure and Technology Stack

**created_at:** 2023-03-31T22:27:28+00:00 
**developer:** [cutmasta-kun](https://github.com/cutmasta-kun)  
**alias:** a7c4e5ce498c4b9cc0cc02c1a3e7e3fe

Today, we defined the basic structure of our project and selected the technologies we want to use. The main components of the project are the frontend, the backend, and the Python service.

**Technology Stack:**

- 🌐 Frontend: Svelte
- ⚙️ Backend: Express.js (with TypeScript)
- 🐍 Python Service: openai_gpt4

**Project Structure:**

- 🚀 `/deploy`: Contains all Dockerfiles and orchestration files (e.g., docker-compose.yml) for deployment.
- 📁 `/src`: Contains all source code for the project.
  - ⚙️ `/src/backend`: Backend code, written in Express.js and TypeScript.
  - 🌐 `/src/frontend`: Frontend code, developed with Svelte.
  - 🐍 `/src/openai_gpt4`: Python service that uses the OpenAI API to make GPT-4 predictions.

**Next Steps:**

1. 🌐 Frontend: Set up Svelte project and develop user interface.
2. ⚙️ Backend: Set up Express.js project with TypeScript and implement API endpoints.
3. 🐍 Python Service: Write Python code for the openai_gpt4 service and create a Dockerfile.
4. 🚀 Deployment: Create Dockerfiles for the backend and Python service, use Docker Compose for orchestration.

---
