# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

----------------------------------------------------------------------------------------------------------
# DevTinder
 - Create a vite+React application
 - Remove all the unnecessary code and create a Hello Devtinder
 - Install Tailwind css
 - Intsall Daisy UI
 - Add a Navigation bar for devTinder in App.tsx
 - Created a saperate component for Navbar in NavBar.tsx file.
 - Installed React Router to DevTinder.
 - Create BrowserRouter > Routes > Route ='/' Body > Route children
 - Create Outlet in body
 - create footer
 - Create Login page 
 - Install CORS in backend and add configuration {origin :"",credetails:true}
 - Install axios and make an API Call with {withCredentials:true}
 - Install @reduxjs/toolkit & react-redux 
 - configureStore => Provider => createSlice => addSlice to store
 - Add redux devtools in chrome as extension
 - Navbar should update as soon as user login to store => subscribe to store
 - You should able to access only the application only when the token is present.
 - if token is not present then redirect to '/login'.
 - Logout
 - Build 1 user card on feed.
 - Edit profile feature.
 - Connections page

