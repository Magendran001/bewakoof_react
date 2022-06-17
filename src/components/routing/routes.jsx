import Landingpage from "../landingpage/landingpage";
import {Routes,Route} from "react-router-dom";
import Productpage from "../product/productpage";
import Singleprdtpage from "../product/singleproductpage";
import Login from "../login/login";
import Signup from "../signup/signup";

function Routeshandling()
{
    return (<>
    
        <Routes>

            <Route path="/" element={<Landingpage/>}></Route>
            <Route path="/product/:category" element={<Productpage/>}></Route>
            <Route path="/singleprdt/:id" element={<Singleprdtpage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>


        </Routes>
    </>)
}

export default Routeshandling