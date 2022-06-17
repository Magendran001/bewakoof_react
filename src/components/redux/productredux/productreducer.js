import Producttypes from "./action";
const init = { product: [], isLoading: false, error: false, singleproduct: {} };


const Productreducer = (state = init, { type, payload }) => {

    switch (type) {
        case Producttypes.FETCHPRODUCTSUCCESS:
            {

                return { ...state, product: payload, isLoading: false }
            }
        case Producttypes.FETCHPRODUCTREQUEST:
            {

                return { ...state, isLoading: true }
            }

        case Producttypes.FETCHPRODUCTERROR:
            {

                return { ...state, isLoading: false, error: true }
            }
        case Producttypes.FETCHPRODUCTBYIDSUCCESS:
            {


                return { ...state, singleproduct: payload, isLoading: false }
            }
        case Producttypes.FETCHPRODUCTBYIDREQUEST:
            {

                return { ...state, isLoading: true }
            }

        case Producttypes.FETCHPRODUCTEBYIDRROR:
            {

                return { ...state, isLoading: false, error: true }
            }


        default:
            {
                return { ...state }
            }
    }

}

export default Productreducer