export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen relative bg-gray-600">
      <div className="w-full h-[200px] absolute top-0 bg-gray-700" />
      {children}
    </div>
  )
}
