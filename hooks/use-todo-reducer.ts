'use client'

import { useCallback, useMemo, useReducer } from 'react'
import { v4 as uuid } from 'uuid'

type AddTodoAction = {
  type: 'ADD_TODO'
  title: string
}

type RemoveTodoAction = {
  type: 'REMOVE_TODO'
  id: string
}

type ToggleTodoAction = {
  type: 'TOGGLE_TODO'
  id: string
}

type Action = AddTodoAction | RemoveTodoAction | ToggleTodoAction

type State = Array<Todo>

export type Todo = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

export type TodoReducer = {
  todos: State
  addTodo: (title: string) => void
  removeTodo: (id: string) => void
  toggleTodo: (id: string) => void
  count: number
  completedCount: number
}

const reducer = (state: Array<Todo>, action: Action): State => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          title: action.title,
          completed: false,
          createdAt: new Date(),
        },
      ]
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id)
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
  }
}

export function useTodoReducer(): TodoReducer {
  const [state, dispatch] = useReducer(reducer, [])

  const addTodo = useCallback((title: string) => {
    dispatch({ type: 'ADD_TODO', title })
  }, [])

  const removeTodo = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_TODO', id })
  }, [])

  const toggleTodo = useCallback((id: string) => {
    dispatch({ type: 'TOGGLE_TODO', id })
  }, [])

  const value = useMemo(
    () => ({
      todos: state,
      addTodo,
      removeTodo,
      toggleTodo,
      count: state.length,
      completedCount: state.filter((todo) => todo.completed).length,
    }),
    [addTodo, removeTodo, state, toggleTodo]
  )

  return value
}
