const initialState = {
    personalDetails: {},
    education: [],
    workExperience: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_PERSONAL_DETAILS":
        return { ...state, personalDetails: action.details };
      case "UPDATE_EDUCATION":
        return { ...state, education: action.education };
      case "UPDATE_WORK_EXPERIENCE":
        return { ...state, workExperience: action.experience };
      default:
        return state;
    }
  };
  
  export default rootReducer;