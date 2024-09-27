'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTodo } from '@/hooks/use-todo'
import { CirclePlus } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function TodoAdd() {
  const { addTodo } = useTodo()
  const [value, setValue] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim())
  }

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value) {
      addTodo(value)
      setValue('')
    }
  }

  return (
    <form noValidate onSubmit={handleAddTodo}>
      <div className="flex gap-x-2 w-[736px] mx-auto mb-16">
        <Input
          value={value}
          onChange={handleOnChange}
          className="h-[54px] text-base"
          placeholder="Adicione uma nova tarefa"
        />
        <Button className="h-[52px] w-[90px] gap-x-2 font-semibold bg-blue-900 hover:bg-blue-400">
          Criar <CirclePlus size={16} />
        </Button>
      </div>
    </form>
  )
}
