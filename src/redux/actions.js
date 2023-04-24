import { Types } from "./types"
import axios from 'axios'

export const increaseCount = (data) => {
  return {
    type: Types.increaseCount,
    payload: data,
  }
}

export const decreaseCount = (data) => {
  return {
    type: Types.decreaseCount,
    payload: data,
  }
}

export const addTodo = (data) => {
  return {
    type: Types.addTodo,
    payload: data,
  }
}

export const addTodoAsync = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  dispatch(addTodo({
    name: res.data.title,
    id: Math.random()
  }))
}

export const deleteTodo = (data) => {
  return {
    type: Types.deleteTodo,
    payload: data,
  }
}