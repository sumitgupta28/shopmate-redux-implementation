import { useTitle } from "../../hook/useTitle"
export const DashbaordPage = () => {
  useTitle('Books Cart')
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>
    </main>
  )
}
