import { ReactNode } from 'react'
const BackgroundContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className="container h-full flex items-center">{children}</div>
  )
}

export default BackgroundContainer