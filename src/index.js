import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { myStore } from "./store/mystore";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CampaignListPage from "./pages/CampaignListPage";
import CampaignCreatePage from "./pages/CampaignCreatePage";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
        <Route path="/campaignlist" element={<CampaignListPage />}></Route>
        <Route path="/campaigncreate" element={<CampaignCreatePage />}></Route>
      </Route>
      
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
