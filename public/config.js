window.__CONFIG__ = {
  // The URL for the CORS proxy, the URL must NOT end with a slash!
  // If not specified, the onboarding will not allow a "default setup". The user will have to use the extension or set up a proxy themselves
  VITE_CORS_PROXY_URL: "https://sudo-proxy.up.railway.app",

  // The READ API key to access TMDB
  VITE_TMDB_READ_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTZhY2E1YzAxMGUyYjYxMWJlYmQ4OGE0N2NlZTJmZCIsIm5iZiI6MTcxOTExODU0MS45MjY5ODcsInN1YiI6IjY2NzdhYTc0YTJhZjI4M2NlZGYyNGJiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sL_8mT8eFGrDboIi9izZhN8idwF_JNWaWLOy9QmkHP",

  // The DMCA email displayed in the footer, null to hide the DMCA link
  VITE_DMCA_EMAIL: null,

  // Whether to disable hash-based routing, leave this as false if you don't know what this is
  VITE_NORMAL_ROUTER: true,

  // The backend URL to communicate with
  VITE_BACKEND_URL: "https://backend.sudo-flix.lol",

  // A comma separated list of disallowed IDs in the case of a DMCA claim - in the format "series-<id>" and "movie-<id>"
  VITE_DISALLOWED_IDS: "",

  VITE_ALLOW_AUTOPLAY: true,
};
