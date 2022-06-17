import axios from "axios";


const Logintypes = {
    "LOGINREQUEST": "LOGINREQUEST",
    "LOGINSUCCESS": "LOGINSUCCESS",
    "LOGINERROR": "LOGINERROR",


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



export { POSTLOGIN, Logintypes }

