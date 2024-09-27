'use client'

import { TodoReducer, useTodoReducer } from '@/hooks/use-todo-reducer'
import { createContext } from 'react'

export const TodoContext = createContext({} as TodoReducer)

export function Todo({ children }: React.PropsWithChildren) {
  const value = useTodoReducer()

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
