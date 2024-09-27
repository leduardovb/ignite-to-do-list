'use client'

import { useTodo } from '@/hooks/use-todo'
import { Checkbox } from '../ui/checkbox'

interface Props {
  id: string
  completed: boolean
}

export function TodoToggle({ id, completed }: Props) {
  const { toggleTodo } = useTodo()
  return <Checkbox checked={completed} onCheckedChange={() => toggleTodo(id)} />
}
