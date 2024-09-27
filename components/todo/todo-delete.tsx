'use client'

import { useTodo } from '@/hooks/use-todo'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'

interface Props {
  id: string
}

export function TodoDelete({ id }: Props) {
  const { removeTodo } = useTodo()

  const handleRemoveTodo = () => {
    removeTodo(id)
  }

  return (
    <div className="ml-auto">
      <Button
        size={'icon'}
        variant={'ghost'}
        onClick={handleRemoveTodo}
        className="size-6 text-gray-300 hover:bg-gray-400 hover:text-danger"
      >
        <Trash2 size={16} />
      </Button>
    </div>
  )
}
