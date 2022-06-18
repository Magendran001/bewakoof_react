import { Logintypes } from "./action";
const init = { userdata: {}, isLoading: false, error: false, isAuth: false, user_id: "", token: "" };


const Loginreducer = (state = init, { type, payload }) => {

    switch (type) {
        case Logintypes.LOGINSUCCESS:
            {

                console.log(payload.user._id, "payloadddddddd")
                return { ...state, userdata: payload, isLoading: false, isAuth: true, user_id: payload.user._id, token: payload.token }
            }
        case Logintypes.LOGINREQUEST:
            {

                return { ...state, isLoading: true }
            }

        case Logintypes.LOGINERROR:
            {

                return { ...state, isLoading: false, error: true }
            }





        default:
            {
                return { ...state }
            }
    }

}

export default Loginreducer