import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whiteList: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = ({
  contacts: persistedReducer,
  filter: filterReducer,
});
