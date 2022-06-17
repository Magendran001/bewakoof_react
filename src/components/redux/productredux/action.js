import axios from "axios"

const Producttypes = {
    "FETCHPRODUCTREQUEST": "FETCHPRODUCTREQUEST",
    "FETCHPRODUCTSUCCESS": "FETCHPRODUCTSUCCESS",
    "FETCHPRODUCTERROR": "FETCHPRODUCTERROR",
    "FETCHPRODUCTBYIDREQUEST": "FETCHPRODUCTBYIDREQUEST",
    "FETCHPRODUCTBYIDSUCCESS": "FETCHPRODUCTBYIDSUCCESS",
    "FETCHPRODUCTEBYIDRROR": "FETCHPRODUCTEBYIDRROR"

}

const Fetchproductdatarequest = () => {
    return { type: Producttypes.FETCHPRODUCTREQUEST }
}
const Fetchproductdatasuccess = (payload) => {
    return { type: Producttypes.FETCHPRODUCTSUCCESS, payload: payload }
}

const Fetchproductdataerror = () => {
    return { type: Producttypes.FETCHPRODUCTERROR }
}

const Fetchproductby_id_request = () => {
    return { type: Producttypes.FETCHPRODUCTBYIDREQUEST }
}
const Fetchproductby_id_success = (payload) => {
    return { type: Producttypes.FETCHPRODUCTBYIDSUCCESS, payload: payload }
}

const Fetchproductby_id_error = () => {
    return { type: Producttypes.FETCHPRODUCTEBYIDRROR }
}

const Fetchproductdata = (category) => (dispatch) => {

    dispatch(Fetchproductdatarequest())

    axios.get(`https://bewakoofreact.herokuapp.com/products/${category}`)
        .then(res => {
            dispatch(Fetchproductdatasuccess(res.data))



        }

        )
        .catch(err => dispatch(Fetchproductdataerror()))


}


const FETCHPRODUCTBYID = (id) => (dispatch) => {


    dispatch(Fetchproductby_id_request())
    axios.get(`https://bewakoofreact.herokuapp.com/products/category/${id}`)
        .then(e => {
            dispatch(Fetchproductby_id_success(e.data));


        }

        )
        .catch(err => { dispatch(Fetchproductby_id_error()); console.log(err, "err") })

}

export { Fetchproductdata, FETCHPRODUCTBYID }

export default Producttypes