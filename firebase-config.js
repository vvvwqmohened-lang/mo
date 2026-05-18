// ========== Firebase config loader (improved) ==========
// This file intentionally uses placeholders to avoid publishing secrets in the repo.
// Usage options (choose one):
// 1) Create a file named `firebase-config.local.js` with your real Firebase config
//    and include it BEFORE this script in your HTML.
// 2) Set the global `window.FIREBASE_CONFIG = { ... }` before this script runs.
// 3) Replace the placeholders below directly (not recommended for public repos).

const defaultConfig = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "REPLACE_WITH_YOUR_AUTH_DOMAIN",
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket: "REPLACE_WITH_YOUR_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID",
  appId: "REPLACE_WITH_YOUR_APP_ID"
};

// Final config: prefer window.FIREBASE_CONFIG (set by local file or script), fall back to defaults
const firebaseConfig = (typeof window !== 'undefined' && window.FIREBASE_CONFIG) ? window.FIREBASE_CONFIG : defaultConfig;

// Initialize Firebase (v8 style) if SDK is available
if (typeof firebase === 'undefined') {
  console.error('Firebase SDK not found. Load Firebase SDK scripts (firebase-app.js etc.) before firebase-config.js');
} else {
  if (!firebaseConfig.apiKey || (typeof firebaseConfig.apiKey === 'string' && firebaseConfig.apiKey.startsWith('REPLACE')) ) {
    console.warn('Firebase config contains placeholder values. Provide a real config in firebase-config.local.js or set window.FIREBASE_CONFIG before this script.');
  }

  // Protect against double initialization
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      console.info('Firebase already initialized.');
    }
  } catch (err) {
    console.error('Error initializing Firebase:', err);
  }

  // Expose commonly used services for other scripts
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  // Attach to window for easy access from other modules/pages
  if (typeof window !== 'undefined') {
    window.firebaseApp = firebase;
    window.auth = auth;
    window.db = db;
    window.storage = storage;
  }
}
