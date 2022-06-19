import axios from "axios";
import { Toastactive, Toastinactive } from "../toast/action";


const Logintypes = {
    "LOGINREQUEST": "LOGINREQUEST",
    "LOGINSUCCESS": "LOGINSUCCESS",
    "LOGINERROR": "LOGINERROR",
    "Logout": "Logout"


}



const PostLoginrequest = () => {
    return { type: Logintypes.LOGINREQUEST }
}
const PostLoginsuccess = (payload) => {
    return { type: Logintypes.LOGINSUCCESS, payload: payload }
}

const PostLoginerror = () => {
    return { type: Logintypes.LOGINERROR }
}

const Logout = () => {

    return { type: Logintypes.Logout }
}

const Logoutfun = () => (dispatch) => {


    dispatch(Logout())
}



const POSTLOGIN = (obj, nav) => (dispatch) => {



    dispatch(PostLoginrequest())

    console.log(obj, "obj")

    axios.post("https://bewakoofreact.herokuapp.com/login", obj)
        .then(res => {
            console.log(res.data)



            if (res.data?.token) {

                dispatch(PostLoginsuccess(res.data));

            }
            else {
                alert("Something Went wrong")
            }



        }

        )
        .then((res) => {

            dispatch(Toastactive())
        })
        .then((res) => {

            dispatch(Toastinactive())
        })
        .catch(err => {
            dispatch(PostLoginerror());
            console.log(err.response);

            if (err?.response?.data?.User) {
                nav("/signup")


            }
            else if (err?.response?.data?.message) {
                alert(err.response.data.message)
            }
            else {
                alert("Something Went wrong")
            }

        })


}



export { POSTLOGIN, Logintypes, Logoutfun }

