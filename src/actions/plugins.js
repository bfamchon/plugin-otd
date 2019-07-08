import { fetchAllPlugins } from '../repository/plugins';
import { asyncAction } from './asyncAction';
import ActionTypes from '../constants/ActionTypes';

export const fetchAllPluginsList = asyncAction(
    fetchAllPlugins,
  {
    success: ActionTypes.LIST_PLUGINS_SUCCESS,
    loading: ActionTypes.LIST_PLUGINS_LOADING,
    error: ActionTypes.LIST_PLUGINS_ERROR,
  },
);
