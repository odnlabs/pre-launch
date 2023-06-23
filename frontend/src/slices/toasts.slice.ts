import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Toast } from '@typings/core';

import { uuidv4 } from '@utils/index';

const initialState: Toast[] = [];

const history: Toast[] = [];

const toastsSlice = createSlice({
  name: 'toasts',
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Toast>) => {
      const newToast = {
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        type: action.payload.type,
        time: action.payload.time ?? 5000,
      };
      state.push(newToast);
      history.push(newToast);
    },
    removeToast: (state, action: PayloadAction<string>) =>
      state.filter((toast) => toast.id !== action.payload),
    getHistory: () => history,
    deleteHistory: () => {
      history.length = 0;
    },
  },
});

export default toastsSlice;
