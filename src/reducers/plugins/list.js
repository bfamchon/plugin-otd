import asyncReducer from '../asyncReducer';
import ActionTypes from '../../constants/ActionTypes';

export default asyncReducer(
    {
        loading: ActionTypes.LIST_PLUGINS_LOADING,
        error: ActionTypes.LIST_PLUGINS_ERROR,
        success: ActionTypes.LIST_PLUGINS_SUCCESS,
    },
    [],
);
