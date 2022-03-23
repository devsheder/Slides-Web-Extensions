import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';

export interface Log {
    level: 'LOG' | 'INFO' | 'WARN' | 'ERROR';
    message: string;
    timestamp: number;
    extra?: any;
    status: 'OK' | 'ERROR';
}

type AddLogsPayload = PayloadAction<{logs: Log[]}>;
type SelectLogPayload = PayloadAction<{index: number}>;

export interface AppState {
    logs: Log[];
    currentLogIndex: number;
}

const initialState: AppState = {
    logs: [],
    currentLogIndex: -1,
};

const stateReducer = createSlice({
     name: 'demo-logs-state',
     initialState,
     reducers: {
        addLogs(state, { payload: { logs } }: AddLogsPayload) {
            state.logs.push(...logs);
        },
        selectLog(state, {payload:{index}}: SelectLogPayload) {
            state.currentLogIndex = index;
        },
        reset(state) {
            state.logs = [];
            state.currentLogIndex = -1;
        }
     }
});

export const store = configureStore({ reducer: stateReducer.reducer });

export type AppDispatch = typeof store.dispatch;
export const actions = stateReducer.actions;
export const useSelector: TypedUseSelectorHook<AppState> = _useSelector;