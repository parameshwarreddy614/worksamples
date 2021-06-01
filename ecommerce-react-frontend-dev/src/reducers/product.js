export default function(state=[],action){
    switch(action.type){
         case 'ALL_PRODUCTS':  
         console.log("I am in ALL PRODUCTS case");
         console.log('data',action.payload.data);
            return action.payload.data;

        case 'CURRENT_PRODUCT':
            return action.payload.data;
    }

    return state;
}
