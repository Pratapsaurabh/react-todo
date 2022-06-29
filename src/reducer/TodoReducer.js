const initialData = {
  list: [],
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list, //holds initial state if it is
          {
            id: id, //id: action.payload.id
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id); //if payload=id then action.payload.id here it is normally come
      return {
        ...state,
        list: newList,
      };

    case "REMOVE_TODO":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default todoReducer;

//const newList = state.list.filter((elem)=> elem.id !== action.id)  -- this will filter and return all the
//non matching data and matched data will not be filtered hence not added in list
