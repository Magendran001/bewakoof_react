import axios from "axios";


const Wishlisttypes = {
    "WISHLISTREQUEST": "WISHLISTREQUEST",
    "WISHLISTSUCCESS": "WISHLISTSUCCESS",
    "WISHLISTERROR": "WISHLISTERROR",
    "FETCHWISHLISTREQUEST": "FETCHWISHLISTREQUEST",
    "FETCHWISHLISTSUCCESS": "FETCHWISHLISTSUCCESS",
    "FETCHWISHLISTERROR": "FETCHWISHLISTERROR",
    "REMOVECARTITEMREQ": "REMOVECARTITEMREQ",
    "REMOVECARTITEMSUCCESS": "REMOVECARTITEMSUCCESS",
    "REMOVECARTITEMERROR": "REMOVECARTITEMERROR"


}



const PostWishlistrequest = () => {
    return { type: Wishlisttypes.WISHLISTREQUEST }
}
const PostWishlistsuccess = (payload) => {
    return { type: Wishlisttypes.WISHLISTSUCCESS, payload: payload }
}

const PostWishlisterror = () => {
    return { type: Wishlisttypes.WISHLISTERROR }
}
const FetchWishlistrequest = () => {
    return { type: Wishlisttypes.FETCHWISHLISTREQUEST }
}
const FetchWishlistsuccess = (payload) => {
    return { type: Wishlisttypes.FETCHWISHLISTSUCCESS, payload: payload }
}

const FetchWishlisterror = () => {
    return { type: Wishlisttypes.FETCHWISHLISTERROR }
}
const REMOVEWishlistrequest = () => {
    return { type: Wishlisttypes.REMOVECARTITEMREQ }
}
const REMOVEWishlistsuccess = () => {
    return { type: Wishlisttypes.REMOVECARTITEMSUCCESS }
}

const REMOVEWishlisterror = () => {
    return { type: Wishlisttypes.REMOVECARTITEMERROR }
}



const POSTWISHLIST = (obj) => (dispatch) => {



    dispatch(PostWishlistrequest())



    axios.post("https://bewakoofreact.herokuapp.com/wishlist", obj)
        .then(res => {




            if (res?.data) {
                console.log(res, "res")

                dispatch(PostWishlistsuccess(res.data));

            }
            else {
                alert("Something Went wrong")
            }



        }

        )
        .then((res) => {
            dispatch(Fetchwishlistdata(obj.user_id))
        })
        .catch(err => {
            dispatch(PostWishlisterror());
            console.log(err, "error");



            alert("Something Went wrong")


        })


}

const Fetchwishlistdata = (id) => (dispatch) => {

    dispatch(FetchWishlistrequest())

    axios.get(`https://bewakoofreact.herokuapp.com/wishlist/${id}`)
        .then(res => {
            console.log("res", id)
            dispatch(FetchWishlistsuccess(res.data))



        }

        )
        .catch(err => {
            dispatch(FetchWishlisterror())
            console.log(err)
        }

        )


}


const Removecartitem = (id, userid) => (dispatch) => {






    dispatch(REMOVEWishlistrequest())

    axios.delete(`https://bewakoofreact.herokuapp.com/wishlist/${id}`)
        .then(res => {
            console.log("res", id)
            dispatch(REMOVEWishlistsuccess(res.data))



        }

        )
        .then(res => {

            console.log(userid, "userid")

            dispatch(Fetchwishlistdata(userid))
        })
        .catch(err => {
            dispatch(REMOVEWishlisterror())
            console.log(err)
        }

        )
}

export { POSTWISHLIST, Wishlisttypes, Fetchwishlistdata, Removecartitem }

