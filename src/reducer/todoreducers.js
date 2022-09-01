const initialData = {
    list : []
}

const todoReducers = ( state = initialData, action) => {
    switch(action.type) {
        case "ADD_TODO":
          //Destructure Data 
            const { id, data } = action.payload;
            console.log("Add List");
            return {
                ...state, //previous state
                list : [
                    ...state.list,
                    {
                        id: id,
                        data:data
                    }
                ]
            }

            case "DELETE_TODO":
                const newList = state.list.filter((elem) => elem.id !== action.id)
                console.log("New List",newList);
                    return {
                        ...state,
                        list : newList
                    }
            
            case "REMOVE_TODO":
                return {
                    ...state,
                    list : []
                }

            default: return state;

    }
}

export default todoReducers;