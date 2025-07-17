'use client'
import { users } from '@/lib/data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'



export default function UsersPage() {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Users</h2>
        <Link href="/users/create"><Button>Add User</Button></Link>
      </div>


      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.role}</td>
              <td className="p-2">
                <Link href={`/users/${u.id}/edit`}>
                  <Button variant="outline">Edit</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
