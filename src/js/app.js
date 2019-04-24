import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import Routes
import routes from './routes.js';

var app = new Framework7({
  root: '#app', // App root element
  name: 'Startup', // App name
  theme: 'md', // Android Style
  //theme: 'ios', // ios Style
  panel: {
    swipe: 'left',
  },
  // App root data
  data: function() {
    return {};
  },
  // App root methods
  methods: {},
  // App routes
  routes: routes,

  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },
});
