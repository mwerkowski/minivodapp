# Mini VOD App

A mini Video On Demand (VOD) web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It features virtualized lists, search, show details, and a sample video player for viewing TV series from [TVMaze API](https://www.tvmaze.com/api).

## Features

- Browse TV shows from the [TVmaze API](https://www.tvmaze.com/api)
- Infinite scrolling with virtualized list for performance
- Search shows by name
- View show details and genres
- Play sample videos for selected shows
- Responsive and modern UI with Tailwind CSS
- State management using React Context and custom hooks
- Data fetching and caching with React Query

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

### Lint

To lint the codebase:

```sh
npm run lint
```

## Project Structure

```
src/
  components/      # Reusable UI components
  contexts/        # React Context for app state
  hooks/           # Custom React hooks
  models/          # TypeScript types/interfaces
  pages/           # Page/layout components
  services/        # API calls
  assets/          # Static assets
  App.tsx          # App entry point
  main.tsx         # ReactDOM render
```

## Technologies Used

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [TanStack Virtual](https://tanstack.com/virtual/latest)
- [Tailwind CSS](https://tailwindcss.com/)

## API

Data comes from the public [TVMaze API](https://www.tvmaze.com/api).

- **Shows list (paginated, 250 per page)**  
  `GET https://api.tvmaze.com/shows?page={page}`

- **Show details**  
  `GET https://api.tvmaze.com/shows/{id}`

## License

MIT
