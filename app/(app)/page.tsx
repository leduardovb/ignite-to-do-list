import { Header } from '@/components/header'
import { AppAddTodo } from './app-add-todo'

export default function AppPage() {
  return (
    <div className="flex flex-col relative">
      <Header />

      <AppAddTodo />
    </div>
  )
}
