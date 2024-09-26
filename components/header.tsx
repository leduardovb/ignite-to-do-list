import Image from 'next/image'

export function Header() {
  return (
    <header className="mt-[72px] mb-[53px]">
      <div className="flex items-center justify-center">
        <h1>
          <Image src="/logo.svg" alt="logo" width={126} height={48} priority />
        </h1>
      </div>
    </header>
  )
}
