'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Input } from '@/components/ui/input'

export default function DashboardNavbarSearch() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  useEffect(() => {
    const delayDebounceFb = setTimeout(() => {
      if (search) {
        router.push(`/dashboard?q=${search}`)
      } else {
        router.push(`/dashboard`)
      }
    }, 300)

    return () => clearTimeout(delayDebounceFb)
  }, [search])

  return (
    <div className="relative h-9 w-44 flex items-center justify-start">
      <Search className="w-4 h-4 absolute left-2 text-muted-foreground mr-2" />
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Projects..."
        className="pl-8"
      />
    </div>
  )
}
