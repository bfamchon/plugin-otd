export const actionLoading = type => (...args) => ({ type, payload: args });
export const actionSuccess = type => (result, ...args) => ({ type, payload: {result, ...args} });
export const actionError = type => (error, ...args) => ({ type, payload: {error, ...args} });
export const asyncAction = (callback, {success, error, loading}) => (...args) => async (dispatch) => {
  loading && dispatch(actionLoading(loading)(...args));
  try {
    const result = await callback(...args);
    success && dispatch(actionSuccess(success)(result, ...args));
  } catch (err) {
    console.error(err); // eslint-disable-line
    error && dispatch(actionError(error)(err, ...args));
  }
};
export const resetAction = type => (...args) => ({type, payload: args});
