'use client'

import { useTodo } from '@/hooks/use-todo'

export function TodoTotalCreated() {
  const { count } = useTodo()
  return (
    <div className="flex gap-x-2 text-blue-400 text-sm font-bold">
      <span>Tarefas criadas</span>
      <span className="flex items-center justify-center h-5 px-2 bg-gray-400 rounded-full text-gray-200 text-xs font-bold">
        {count}
      </span>
    </div>
  )
}
