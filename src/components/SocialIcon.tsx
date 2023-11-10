import { githubUrl, linkedinURL, mainColor } from '../mock/data'

const SocialIcon = () => {
  return (
    <span className='flex ml-3 h-14'>
        <a href={githubUrl}>
          <img
            src={`/src/assets/icons/${mainColor}/github.svg`}
            alt="github"
            title="Github"
            className="w-10 hover:cursor-pointer hover:w-12 ease-in-out duration-300 mr-3"
          />
        </a>
        <a href={linkedinURL}>
          <img
            src={`/src/assets/icons/${mainColor}/linkedin.svg`}
            alt="github"
            title="Github"
            className="w-10 hover:cursor-pointer hover:w-12 ease-in-out duration-300"
          />
        </a>
      </span>
  )
}

export default SocialIcon