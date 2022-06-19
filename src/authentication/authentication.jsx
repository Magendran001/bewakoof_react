import { useEffect } from "react";
import {useSelector} from "react-redux"
import { useNavigate ,useLocation,Navigate,NavLink} from "react-router-dom";
function Authentication({children})
{

    let history = useLocation();
    console.log(history,"history")
    

       
    let nav = useNavigate();
    let IsAuth = useSelector(state=>state.Loginreducer.isAuth);
   

    // useEffect(()=>{

       
             

    // },[IsAuth])

    if(!IsAuth)
    {
       
       return <Navigate to="/login" state={history}  replace={true}/>
    }



    return (<div>{children}</div>)
}
export default Authentication