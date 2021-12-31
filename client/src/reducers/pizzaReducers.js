export const getAllPizzareducer = (state = {pizzas : [] }, action) => {
    switch (action.type) {
        case "GET_PIZZAS_REQUEST ":
            return {
                ...state,
                loading: true,
            };
        case "GET_PIZZAS_SUCCESS":
            return {
                pizzas: action.payload,
                loading:false,
               

            }
        case "GET_PIZZQW_FAILED":
            return {
                error: action.payload,
            loading: false,

            }
        default:
            return state;

    }
};
export const addPizzareducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_PIZZAS_REQUEST ":
            return {
                ...state,
                loading: true,
            };
        case "ADD_PIZZAS_SUCCESS":
            return {
                success:true,
                loading:false,
               

            }
        case "ADD_PIZZQW_FAILED":
            return {
                error: action.payload,
            loading: false,

            }
        default:
            return state;

    }
};

export const getPizzaByIdReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_PIZZABYID_REQUEST ":
            return {
                ...state,
                loading: true,
            };
        case "GET_PIZZABYID_SUCCESS":
            return {
                pizza:action.payload,
                loading:false,
               

            }
        case "GET_PIZZABYID_FAILED":
            return {
                error: action.payload,
            loading: false,

            }
        default:
            return state;

    }
};

export const updatePizzaByIdReducer = (state = {pizzas : [] }, action) => {
    switch (action.type) {
        case "UPDATE_PIZZAS_REQUEST ":
            return {
                ...state,
                loading: true,
            };
        case "UPDATE_PIZZAS_SUCCESS":
            return {
              updatesuccess:true,
               updateloading:false,
               

            }
        case "UPDATE_PIZZQW_FAILED":
            return {
              updateerror: action.payload,
            updateloading: false,

            }
        default:
            return state;

    }
};