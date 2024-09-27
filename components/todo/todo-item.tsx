'use client'

import { cn } from '@/lib/utils'

interface Props {
  completed: boolean
}

export function TodoItem({
  completed,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        'flex items-center gap-x-3 w-full min-h-[72px] overflow-hidden text-sm rounded-lg p-4 whitespace-nowrap bg-gray-500 border border-gray-400',
        completed && 'line-through text-gray-300'
      )}
    >
      {children}
    </div>
  )
}
