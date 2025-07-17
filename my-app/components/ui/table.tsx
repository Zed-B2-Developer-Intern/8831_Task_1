'use client';

import { useEffect, useState } from 'react';
import { Input } from './input';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch('/api/users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error loading users", err);
      }
    };
    loadData();
  }, []);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Input
        placeholder="Search users..."
        className="mb-4"
        onChange={e => setFilter(e.target.value)}
      />
      <table className="w-full text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(user => (
            <tr key={user.id}>
              <td className="p-2 border-t">{user.name}</td>
              <td className="p-2 border-t">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
