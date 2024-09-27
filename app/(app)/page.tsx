import { Header } from '@/components/header'
import { TodoAdd } from '../../components/todo/todo-add'
import { Todo } from '@/components/todo'
import { TodoContent } from '@/components/todo/todo-content'
import { TodoHeader } from '@/components/todo/todo-header'
import { TodoTotalCreated } from '@/components/todo/todo-total-created'
import { TodoTotalCompleted } from '@/components/todo/todo-total-completed'
import { TodoList } from '@/components/todo/todo-list'

export default function AppPage() {
  return (
    <div className="flex flex-col relative">
      <Header />
      <div className="max-w-[736px] mx-auto">
        <Todo>
          <TodoAdd />
          <TodoContent>
            <TodoHeader>
              <TodoTotalCreated />
              <TodoTotalCompleted />
            </TodoHeader>
            <TodoList />
          </TodoContent>
        </Todo>
      </div>
    </div>
  )
}
