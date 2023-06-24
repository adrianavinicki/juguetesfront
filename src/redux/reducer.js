import { GET_PRODUCTS, GET_PRODUCT, POST_PRODUCT, FILTER_BY_AGE, FILTER_BY_PRICE } from "./actions";

const initialState = {
    products: [],
    filteredProducts: [],
    productDetail: [],
};

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_PRODUCTS:
            return { ...state, products:action.payload, filteredProducts:action.payload };
        case GET_PRODUCT:
            return {...state, productDetail: action.payload}
        case POST_PRODUCT:
            return{
                ...state,
            }
        case FILTER_BY_AGE:
            const filteredProducts = action.payload === "all" ?
            [...state.products] : 
            [...state.products].filter(a => a.minimun_age >= action.payload)
            return {
                ...state,
                filteredProducts
            }
        default:
            return { ...state };
    }
};


export default rootReducer;