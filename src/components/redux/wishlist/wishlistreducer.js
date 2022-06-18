import { Wishlisttypes } from "./action";
const init = { isLoading: false, error: false, wishlistdata: [], wishlistpost: {} };


const Wishlistreducer = (state = init, { type, payload }) => {

    switch (type) {
        case Wishlisttypes.WISHLISTSUCCESS:
            {


                return { ...state, wishlistpost: payload, isLoading: false }
            }
        case Wishlisttypes.WISHLISTREQUEST:
            {

                return { ...state, isLoading: true }
            }

        case Wishlisttypes.WISHLISTERROR:
            {

                return { ...state, isLoading: false, error: true }
            }

        case Wishlisttypes.FETCHWISHLISTSUCCESS:
            {


                return { ...state, wishlistdata: payload, isLoading: false }
            }
        case Wishlisttypes.FETCHWISHLISTREQUEST:
            {

                return { ...state, isLoading: true }
            }

        case Wishlisttypes.FETCHWISHLISTERROR:
            {

                return { ...state, isLoading: false, error: true }
            }




        default:
            {
                return { ...state }
            }
    }

}

export default Wishlistreducer