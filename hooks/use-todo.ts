'use client'

import { TodoContext } from '@/components/todo'
import { useContext } from 'react'

export function useTodo() {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }

  return context
}
