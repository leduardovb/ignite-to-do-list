import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CirclePlus } from 'lucide-react'

export function AppAddTodo() {
  return (
    <div className="flex gap-x-2 w-[736px] mx-auto">
      <Input
        placeholder="Adicione uma nova tarefa"
        className="h-[54px] text-base"
      />
      <Button className="h-[52px] w-[90px] gap-x-2 font-semibold bg-blue-900 hover:bg-blue-400">
        Criar <CirclePlus size={16} />
      </Button>
    </div>
  )
}
