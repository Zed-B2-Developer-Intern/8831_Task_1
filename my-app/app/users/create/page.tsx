'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert(`Created user: ${name}, ${email}`)
    router.push('/users')
  }
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users") || "[]")
    localStorage.setItem("users", JSON.stringify([...stored, { name, email }]))
  }, [])
  

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Add User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button type="submit">Save</Button>
      </form>
    </div>
  )
}
