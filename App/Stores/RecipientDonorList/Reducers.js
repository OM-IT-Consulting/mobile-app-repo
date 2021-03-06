/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { RecipientDonorListTypes } from './Actions'

export const loadRecipientDonorListInitialPageData = (state) => ({
  ...state,
  initialDataIsLoading: false,
  initialDataErrorMessage: null,
})

export const loadInitialDataSuccess = (state, { initialData }) => ({
  ...state,
  initialData: initialData,
  initialDataIsLoading: false,
  initialDataErrorMessage: null,
})

export const loadInitialDataFailure = (state, { errorMessage }) => ({
  ...state,
  initialData: {},
  initialDataIsLoading: false,
  initialDataErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [RecipientDonorListTypes.LOAD_RECIPIENT_DONOR_LIST_INITIAL_PAGE_DATA]: loadRecipientDonorListInitialPageData,
  [RecipientDonorListTypes.LOAD_INITIAL_DATA_SUCCESS]: loadInitialDataSuccess,
  [RecipientDonorListTypes.LOAD_INITIAL_DATA_FAILURE]: loadInitialDataFailure,
})
