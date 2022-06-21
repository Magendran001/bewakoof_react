import { Signuptypes } from "./action";
const init = { userdata: {}, isLoading: false, error: false, success: false };


const Signupreducer = (state = init, { type, payload }) => {

    switch (type) {
        case Signuptypes.SIGNUPSUCCESS:
            {

                return { ...state, userdata: payload, isLoading: false, success: true }
            }
        case Signuptypes.SIGNUPREQUEST:
            {

                return { ...state, isLoading: true }
            }

        case Signuptypes.SIGNUPERROR:
            {


                return { ...state, isLoading: false, error: true, success: false }
            }

        case Signuptypes.Logoutmention:
            {
                return { ...state, success: false }
            }





        default:
            {
                return { ...state }
            }
    }

}

export default Signupreducer