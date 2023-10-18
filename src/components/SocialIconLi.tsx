import { ISocialIconLi } from '../models/SocialIconLi'

const SocialIconLi = ({icon}: {icon: ISocialIconLi}) => {
  return (
    <li>{icon.iconName}</li>
  )
}

export default SocialIconLi