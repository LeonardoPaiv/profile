import {ReactNode} from 'react'

const MainContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className="bg-gray-100/20 rounded-md p-4 w-full h-full grid grid-cols-2">{children}</div>
  )
}

export default MainContainer