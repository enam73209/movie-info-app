# Movie Info App

A simple React application built with Vite to display movie information and add new movies to a Firebase database. This app leverages React functionality such as `useState` and `useEffect`, `fetch()`, `react-bootstrap` for UI components, and Firebase for backend storage.

## Features

- **Movie Display**: Lists movies fetched from Firebase Realtime Database.
- **Add Movies**: Allows users to add new movies with a title, opening text, and release date.
- **Responsive UI**: Built using `react-bootstrap` for a responsive and user-friendly interface.
- **Firebase Integration**: Uses Firebase Realtime Database for storing and fetching movie data.
- **Fast Development**: Powered by Vite for optimized development and build processes.

## Tech Stack

- **Frontend**: React (Hooks: `useState`, `useEffect`)
- **UI Library**: React-Bootstrap
- **Backend**: Firebase Realtime Database
- **HTTP Requests**: `fetch()`
- **Build Tool**: Vite

## Installation

To get a local copy of the app up and running, follow these steps.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/movie-info-app.git
   cd movie-info-app

2. **Install dependencies:**
  ```bash
     npm install

3.  **Start the development server:**
    ```bash
       npm run dev


## Usage
**View Movies**: On the landing page, the app fetches and displays a list of movies from the Firebase database.
**Add Movie**: Click on the "Add a New Movie" button to open a modal where you can input the movie's title, opening text, and release date. The new movie will be saved in the Firebase database and displayed on the list.