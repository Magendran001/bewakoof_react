import Landingpage from "../landingpage/landingpage";
import {Routes,Route} from "react-router-dom";
import Productpage from "../product/productpage";
import Singleprdtpage from "../landingpage/singleproductpage";

function Routeshandling()
{
    return (<>
    
        <Routes>

            <Route path="/" element={<Landingpage/>}></Route>
            <Route path="/product/:category" element={<Productpage/>}></Route>
            <Route path="/singleprdt/:id" element={<Singleprdtpage/>}></Route>


        </Routes>
    </>)
}

export default Routeshandling