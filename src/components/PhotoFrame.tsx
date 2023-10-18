import { ReactNode } from 'react'

const PhotoFrame = ({children} : {children: ReactNode}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default PhotoFrame