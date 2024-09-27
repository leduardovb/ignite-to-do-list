'use client'

import { useTodo } from '@/hooks/use-todo'
import { TodoItem } from './todo-item'
import { TodoToggle } from './todo-toggle'
import { TodoDelete } from './todo-delete'

export function TodoList() {
  const { todos } = useTodo()

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem completed={todo.completed}>
            <TodoToggle id={todo.id} completed={todo.completed} />
            <span className="text-wrap">{todo.title}</span>
            <TodoDelete id={todo.id} />
          </TodoItem>
        </li>
      ))}
    </ul>
  )
}
