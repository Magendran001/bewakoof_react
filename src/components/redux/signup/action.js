import axios from "axios";


const Signuptypes = {
    "SIGNUPREQUEST": "SIGNUPREQUEST",
    "SIGNUPSUCCESS": "SIGNUPSUCCESS",
    "SIGNUPERROR": "SIGNUPERROR",


}



const Postsignuprequest = () => {
    return { type: Signuptypes.SIGNUPREQUEST }
}
const Postsignupsuccess = (payload) => {
    return { type: Signuptypes.SIGNUPSUCCESS, payload: payload }
}

const Postsignuperror = () => {
    return { type: Signuptypes.SIGNUPERROR }
}



const POSTSIGNUP = (obj) => (dispatch) => {



    dispatch(Postsignuprequest())

    console.log(obj, "obj")

    axios.post("https://bewakoofreact.herokuapp.com/signup", obj)
        .then(res => {
            console.log(res.data)



            if (res.data?.email) {

                dispatch(Postsignupsuccess(res.data));

            }
            else {
                alert("Something Went wrong")
            }



        }

        )
        .catch(err => {
            dispatch(Postsignuperror());
            console.log(err)
            alert("Something Went wrong")
        })


}



export { POSTSIGNUP, Signuptypes }

