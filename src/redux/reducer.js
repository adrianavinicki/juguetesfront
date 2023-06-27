import { GET_PRODUCTS, GET_PRODUCT, POST_PRODUCT, FILTER_BY_AGE, FILTER_BY_PRICE, GET_PRODUCTS_NAME } from "./actions";

const initialState = {
    products: [],
    filteredByAge:[],
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
        case GET_PRODUCTS_NAME:
            return { ...state, filteredProducts: action.payload };
        case FILTER_BY_AGE:
            const filteredProducts = action.payload === "all" ?
            [...state.products] : 
            [...state.products].filter(a => a.minimun_age >= action.payload)
            return {
                ...state,
                filteredProducts,
                filteredByAge:filteredProducts
            }
        case FILTER_BY_PRICE:
      
            const filtered = state.filteredByAge.length
                ? state.filteredByAge.filter(el=>el.price <= action.payload)
                : state.products.filter(el=>el.price <= action.payload)
            
            if(!filtered.length) {
                alert('No hay productos con ese precio maximo');
                return {...state}
            } else {
                return {
                    ...state,
                    filteredProducts:filtered
                }                   
            }
            
        default:
            return { ...state };
    }
};


export default rootReducer;