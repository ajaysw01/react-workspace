import { createSlice, nanoid } from "@reduxjs/toolkit";

// create initial state
const initialState = {
  todos : [{id: 1, text:"Hello world"}]
}

// function sayHi() {
//   console.log("hi");
  
// }

//  create slice
export const todoSlice = createSlice({
  // name the slice
  name:'todo',
  //initial state should be given to every slice
  initialState,
  //add the reducers which contains properties and function
  reducers:{
    // addTodo:sayHi
    //reducer we have state(access to curr state) and action (data that is passing)
    addTodo : (state, action) => {
      const todo = {
        id : nanoid(), 
        text : action.payload  
      }
      //accessing state
      state.todos.push(todo)
    },
    removeTodo  : (state, action) => {
      state.todos = state.todos.filter((todo) => 
        todo.id != action.payload)
    }
  }
})

export const{addTodo, removeTodo} =todoSlice.actions
export default todoSlice.reducer