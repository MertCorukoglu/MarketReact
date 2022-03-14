import { useEffect } from "react";
import 'antd/dist/antd.css'
import { useDispatch } from "react-redux";
import CampaignCreatePage from "./pages/CampaignCreatePage";
import { FetchProducts } from "./store/action/product.action";
import { Outlet } from "react-router";

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    console.log("USEEFFECT TETİKLENDİ")
    dispatch(FetchProducts())
    
  }, [])
  
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
