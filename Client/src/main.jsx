import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux' // <--- 1. Import Provider
import store from './store/store.js'   // <--- 2. Import your Store

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}> {/* <--- 3. WRAP THE APP HERE */}
      <App />
    </Provider>
  </BrowserRouter>
)