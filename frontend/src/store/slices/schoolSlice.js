import { createSlice } from '@reduxjs/toolkit';

export const schoolSlice = createSlice({
  name: 'school',
  initialState: {
    classes: [],
    courses: [],
    section: [],
    scholarships: []
  },
  reducers: {
    setClasses :(state, action )=> {
          state.classes = action.payload
    },
    setCourses: (state, action) => {
        state.classes = action.payload
    }
  },
});


export const { setClasses, setCourses } = schoolSlice.actions;
export const selectClasses = state => state.school.classes;
export const selectCourses = state => state.school.courses;


export default schoolSlice.reducer;