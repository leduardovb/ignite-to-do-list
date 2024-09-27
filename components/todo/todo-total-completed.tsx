'use client'

import { useTodo } from '@/hooks/use-todo'

export function TodoTotalCompleted() {
  const { count, completedCount } = useTodo()
  return (
    <div className="flex gap-x-2 text-purple-400 text-sm font-bold">
      <span>Concluídas</span>
      <span className="flex items-center justify-center h-5 px-2 bg-gray-400 rounded-full text-gray-200 text-xs font-bold">
        {completedCount} de {count}
      </span>
    </div>
  )
}
