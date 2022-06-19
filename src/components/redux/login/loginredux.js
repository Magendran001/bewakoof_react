import { Logintypes } from "./action";
let data = JSON.parse(localStorage.getItem("user_details"));
let auth = data?.token ? true : false;
// console.log(data, "datas")
const init = { userdata: auth ? data : {}, isLoading: false, error: false, isAuth: auth, user_id: auth ? data.user._id : "", token: auth ? data.token : "", };


const Loginreducer = (state = init, { type, payload }) => {

    switch (type) {
        case Logintypes.LOGINSUCCESS:
            {


                return { ...state, userdata: payload, isLoading: false, isAuth: true, user_id: payload.user._id, token: payload.token, user_details: localStorage.setItem("user_details", JSON.stringify(payload)) }
            }
        case Logintypes.LOGINREQUEST:
            {

                return { ...state, isLoading: true }
            }

        case Logintypes.LOGINERROR:
            {

                return { ...state, isLoading: false, error: true }
            }

        case Logintypes.Logout:
            {

                return { ...state, isAuth: false, userdata: {}, user_details: localStorage.setItem("user_details", JSON.stringify(null)) }
            }





        default:
            {
                return { ...state }
            }
    }

}

export default Loginreducer