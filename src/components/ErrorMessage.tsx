import { PropsWithChildren } from "react"

//ReactNode permite renderizar string pero tambien renderizar componentes dentro de otros

export default function ErrorMessage({children} : PropsWithChildren) {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
        {children}
    </p>
  )
}
