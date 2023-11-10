import { ReactNode } from 'react'

const MainContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className="bg-gradient-to-br from-gray-100/5 to-gray-100/[.15] rounded-md w-full h-[90%] grid grid-cols-6 gap-1 overflow-visible">{children}</div>
  )
}

export default MainContainer