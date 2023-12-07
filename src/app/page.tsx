import Image from 'next/image'
import Register from './register'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Main Data
      <Register />
    </main>
  )
}
