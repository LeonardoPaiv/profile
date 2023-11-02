import { ReactNode } from 'react'

const MainContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className="bg-gradient-to-br from-gray-100/5 to-gray-100/[.15] rounded-md p-4 w-full h-full grid grid-cols-2 gap-1 overflow-auto">{children}</div>
  )
}

export default MainContainer