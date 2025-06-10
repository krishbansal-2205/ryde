# JSM Ryde - Ride-Sharing Mobile Application

JSM Ryde is a feature-rich, cross-platform mobile application built with Expo (React Native), TypeScript, and NativeWind. It aims to provide a seamless ride-sharing experience for users, allowing them to easily find, book, and manage rides.

## ✨ Features

-  **User Authentication:** Secure sign-up and sign-in functionality using Clerk, supporting email/password and OAuth providers.
-  **Location Services & Geocoding:** Utilizes device location to find nearby drivers and set pickup/dropoff points. Converts addresses to coordinates and vice-versa.
-  **Interactive Map Integration:** Leverages React Native Maps to display routes, driver locations, and user's current position.
-  **Ride Booking Flow:**
   -  Find available rides/drivers.
   -  Select pickup and destination locations.
   -  View estimated fare and ride details.
   -  Confirm and book a ride.
-  **Ride History:**
   -  Users can view their past rides.
-  **Tab-Based Navigation:** Intuitive navigation using Expo Router's tab layout for easy access to different sections of the app (e.g., Home, Rides, Profile).
-  **Component-Based Architecture:** Modular and reusable components for a clean and maintainable codebase.
-  **API Integration:** Connects to a backend API (details in `app/(api)/user+api.ts`) for user data, ride management, and other services.
-  **Styling with NativeWind:** Tailwind CSS utility classes for rapid UI development in React Native.
-  **State Management:** (Using Zustand)
   -  Efficiently manages application state.

## 🚀 Tech Stack

-  **Frontend:**
   -  React Native
   -  Expo SDK
   -  TypeScript
   -  NativeWind (Tailwind CSS for React Native)
   -  Expo Router (File-system based routing)
   -  Clerk (User Authentication)
   -  React Native Maps (Map integration)
   -  @gorhom/bottom-sheet (For interactive bottom sheets)
   -  Zustand (State Management)
-  **Backend:**
   -  Neon DB with Postgres
-  **Development Tools:**
   -  ESLint (Linting)
   -  Prettier (Code Formatting)
   -  Babel
   -  Metro Bundler

## 🛠️ Getting Started
### Prerequisites
-  Node.js and npm installed on your machine.
-  Expo CLI installed globally.
### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/krishbansal-2205/ryde.git
   ```
2. Navigate to the project directory:
   ```bash
   cd jsm-ryde
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

-  [development build](https://docs.expo.dev/develop/development-builds/introduction/)
-  [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
-  [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
-  [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

-  [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
-  [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

-  [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
-  [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
