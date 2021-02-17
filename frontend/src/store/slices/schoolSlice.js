import { createSlice } from '@reduxjs/toolkit';

export const schoolSlice = createSlice({
  name: 'school',
  initialState: {
    classes: [],
    courses: [],
    dormitories: [],
    scholarships: [],
    campuses: [],
    sections: [],
    feesTypes: []
  },
  reducers: {
    setClasses :(state, action )=> {
          state.classes = action.payload
    },
    setCourses: (state, action) => {
        state.courses = action.payload
    },
    setDormitories: (state, action) => {
      state.dormitories = action.payload
    },
    setScholarships: (state, action) => {
      state.scholarships = action.payload
    },
    setCampuses: (state, action) => {
        state.campuses = action.payload
    },
    setSections : (state, action) => {
      state.sections = action.payload
     },
     setfeesType : (state, action) => {
      state.feesTypes = action.payload
     },
  },
});


export const { setClasses, setCourses, setDormitories, setScholarships, setCampuses, setSections, setfeesType } = schoolSlice.actions;
export const selectClasses = state => state.school.classes;
export const selectCourses = state => state.school.courses;
export const selectDormitories = state => state.school.dormitories;
export const selectScholarship = state => state.school.scholarships;
export const selectCampuses = state => state.school.campuses;
export const selectSection = state => state.school.sections;
export const selectFees = state => state.school.feesTypes;


export default schoolSlice.reducer;