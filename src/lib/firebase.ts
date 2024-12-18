'use client'
import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
var analytics = null

if (process.env.NODE_ENV === 'production') {
  isSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(app)
        console.log('Firebase Analytics initialized')
      }
    })
    .catch((error) => {
      console.error('Firebase Analytics not supported:', error)
    })
} else {
  console.log('Firebase Analytics disabled in development')
}

export { app, analytics }
