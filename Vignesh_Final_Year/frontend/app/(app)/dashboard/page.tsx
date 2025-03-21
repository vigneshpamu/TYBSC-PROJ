import Dashboard from '@/components/dashboard'
import Navbar from '@/components/dashboard/navbar'
import { User, Virtualbox } from '@/lib/types'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) {
    redirect('/')
  }

  console.log(user.id)

  const userRes = await fetch(
    `https://database.vigneshpamu2002.workers.dev/api/user?id=${user.id}`
  )
  const userData = (await userRes.json()) as User
  console.log(userData)

  const sharedRes = await fetch(
    `https://database.vigneshpamu2002.workers.dev/api/virtualbox/share?id=${user.id}`
  )

  const shared = (await sharedRes.json()) as {
    id: string
    name: string
    type: 'react' | 'node'
    author: {
      id: string
      name: string
      email: string
      image: any
    }
    sharedOn: Date
  }[]

  console.log('shared: ', shared)

  return (
    <div>
      <Navbar userData={userData} />
      <Dashboard virtualboxes={userData.virtualbox} shared={shared} />
    </div>
  )
}
