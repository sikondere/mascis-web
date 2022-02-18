import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import store from './redux/store'
import ART from './lmis/art/OrderList'
import ARTOrder from './lmis/art/Order'
import HIVTestKits from './lmis/hivtestkits/OrderList'
import HIVTestKitsOrder from './lmis/hivtestkits/Order'
import Home from './lmis/Home'
import Dashboard from './lmis/dashboard'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='lmis' element={<Home />}>
              <Route path='art' element={<ART />} />
              <Route path='art/order' element={<ARTOrder />} />
              <Route path='hivtestkits' element={<HIVTestKits />} />
              <Route path='hivtestkits/order' element={<HIVTestKitsOrder />} />
              <Route path='dashboard' element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
