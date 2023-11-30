import { createSlice } from "@reduxjs/toolkit";

const CheckOutSlice = createSlice({
	name: "checkout",
	initialState: {
		data: [],
		loading: true,
		checkOut: "",
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setCheckOut: (state, action) => {
			state.checkOut = action.payload;
		},
	},
});

export const CheckOutActions = CheckOutSlice.actions;

export default CheckOutSlice;
