import { createSlice } from "@reduxjs/toolkit";

const RoomSlice = createSlice({
  name: "room",
  initialState: {
    data: [],
    loading: true,
    id: "",
    roomid: "",
    name: "",
    searchTerm: "",
    allRoom: [],
    currentPage: 1,
    branch: "",
    menu: "",
    adult: "1 Adult",
    kid: "0 kids",
    checkIn: Date.now(),
    checkOut: Date.now() + 86400000,
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    previewItem: false,
    previewedRoom: "",
    total: 0,
    category: [],
    sampleRoom: [],
    error: "",
    branchList: [],
    formatcheckIn: "",
    formatcheckOut: "",
    galleryImage: [],
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setBranch: (state, action) => {
      state.branch = action.payload;
    },
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setAdult: (state, action) => {
      state.adult = action.payload;
    },
    setKid: (state, action) => {
      state.kid = action.payload;
    },
    setCheckIn: (state, action) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action) => {
      state.checkOut = action.payload;
    },
    autoFillCheckOut: (state, action) => {
      const checkInDate = state.checkIn;
      const nextDay = new Date(checkInDate);
      nextDay.setDate(nextDay.getDate() + 1);
      state.checkOut = nextDay;
    },
    setFirstName: (state, action) => {
      state.firstname = action.payload;
    },
    setLastName: (state, action) => {
      state.lastname = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setPreviewItem: (state, action) => {
      state.previewItem = action.payload;
    },
    setPreviewedRoom: (state, action) => {
      state.previewedRoom = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setAllRooms: (state, action) => {
      state.allRoom = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSampleRoom: (state, action) => {
      state.sampleRoom = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setBranchList: (state, action) => {
      state.branchList = action.payload;
    },
    setFormatedCheckIn: (state, action) => {
      state.formatcheckIn = action.payload;
    },
    setFormatedCheckOut: (state, action) => {
      state.formatcheckOut = action.payload;
    },
    setGalleryImage: (state, action) => {
      state.galleryImage = action.payload;
    },
  },
});

export const RoomActions = RoomSlice.actions;

export default RoomSlice;
