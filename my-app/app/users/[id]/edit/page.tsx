'use client'

import { useParams } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function EditUser() {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`User ${id} updated: ${name}, ${email}`)
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Edit User (ID: {id})</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button type="submit">Update</Button>
      </form>
    </div>
  )
}
