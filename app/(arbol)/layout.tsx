// app/(arbol)/layout.tsx
import Menu from "@/components/general/Menu"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Menu />
    </>
  )
}