import { Outlet } from '@tanstack/react-router'

export const Route = createFileRoute({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div className="p-2">
      <div className="border-b">I'm a deeper layout with parameters</div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
