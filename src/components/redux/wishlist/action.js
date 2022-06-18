import axios from "axios";


const Wishlisttypes = {
    "WISHLISTREQUEST": "WISHLISTREQUEST",
    "WISHLISTSUCCESS": "WISHLISTSUCCESS",
    "WISHLISTERROR": "WISHLISTERROR",
    "FETCHWISHLISTREQUEST": "FETCHWISHLISTREQUEST",
    "FETCHWISHLISTSUCCESS": "FETCHWISHLISTSUCCESS",
    "FETCHWISHLISTERROR": "FETCHWISHLISTERROR",


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
            dispatch(Fetchwishlistdata())
        })
        .catch(err => {
            dispatch(PostWishlisterror());
            console.log(err, "error");



            alert("Something Went wrong")


        })


}

const Fetchwishlistdata = () => (dispatch) => {

    dispatch(FetchWishlistrequest())

    axios.get("https://bewakoofreact.herokuapp.com/wishlist")
        .then(res => {
            dispatch(FetchWishlistsuccess(res.data))



        }

        )
        .catch(err => dispatch(FetchWishlisterror()))


}


export { POSTWISHLIST, Wishlisttypes, Fetchwishlistdata }

