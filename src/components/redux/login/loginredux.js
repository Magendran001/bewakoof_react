import { Logintypes } from "./action";
const init = { userdata: {}, isLoading: false, error: false, isAuth: false };


const Loginreducer = (state = init, { type, payload }) => {

    switch (type) {
        case Logintypes.LOGINSUCCESS:
            {

                return { ...state, userdata: payload, isLoading: false, isAuth: true }
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