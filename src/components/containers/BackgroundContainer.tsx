import {ReactNode} from 'react'
const BackgroundContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className="container h-full flex items-center py-4">{children}</div>
  )
}

export default BackgroundContainer