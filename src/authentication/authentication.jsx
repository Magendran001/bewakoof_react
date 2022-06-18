import { useEffect } from "react";
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
function Authentication({children})
{
       
    let nav = useNavigate();
    let IsAuth = useSelector(state=>state.Loginreducer.isAuth);
    console.log(IsAuth,"ISAuth")

    useEffect(()=>{

        if(!IsAuth)
        {
            return (nav("/login"))
        }

             

    },[IsAuth])


    return (<div>{children}</div>)
}
export default Authentication