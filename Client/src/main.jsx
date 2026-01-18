import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'  <-- COMENTA ESTO
// import store from './store/store.js'    <-- COMENTA ESTO
import App from './App.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <Provider store={store}>  <-- COMENTA ESTO */}
      <App />
    {/* </Provider>               <-- COMENTA ESTO */}
  </BrowserRouter>
)