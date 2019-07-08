export default (actions = {}, initialResult = null) => {
  const initialState = {
    trigger: {},
    loading: false,
    error: null,
    success: null,
    result: initialResult,
  };

  const rootReducer = (state = initialState, action) => {
    const {error, result, ...trigger} = action.payload || {};
    switch (action.type) {
      case actions.loading:
        return { ...state, loading: true, trigger };
      case actions.error:
        return {...state, loading: false, result: initialResult, success: false, error, trigger};
      case actions.success:
        return {...state, loading: false, error: null, result, success: true, trigger };
      case actions.reset:
        return {...state, loading: false, error: null, result: null, success: null, trigger };
      default:
        return state;
    }
  };
  return rootReducer;
}
