import { createFileRoute } from '@tanstack/react-router'
import { onlineManager, useQuery } from '@tanstack/react-query'
import { hc } from 'hono/client'
import type { AppType } from '../../../server/index.ts'

const client = hc<AppType>('/')

export const Route = createFileRoute('/demo/tanstack-query')({
  component: TanStackQueryDemo,
})

function TanStackQueryDemo() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      // const resp = await fetch("/api/people")
      const resp = await client.api.people.$get()
      if (!resp.ok) throw new Error("failed to fetch people")
      return resp.json()
    },
    initialData: [],
  })
  return (

    <div 
    className="flex items-center justify-center min-h-screen bg-gray-500"
      style={{
        backgroundImage: 
          ''
      }}
    >
      <div className="w-full max-w-2xl p-8 rounded-xl">
        <h1 className="text-2xl mb-4">
          TanStack Query Simple Promise Handling
        </h1>
        <ul>
          {data.map((todo) => (
            <li
              key={todo.id}
              className="bg-white/10 border border-white/20 rounded-xl"
            >
              <span className="text-lg text-white">
                {todo.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      </div>
  )
}



