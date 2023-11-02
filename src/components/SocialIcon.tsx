import { githubUrl, linkedinURL, mainColor } from '../mock/data'

const SocialIcon = () => {
  return (
    <span className="invisible xl:visible">
        <a href={githubUrl}>
          <img
            src={`/src/assets/icons/${mainColor}/github.svg`}
            alt="github"
            title="Github"
            className="absolute left-[90%] top-0 w-10 hover:cursor-pointer hover:w-12 ease-in-out duration-300"
          />
        </a>
        <a href={linkedinURL}>
          <img
            src={`/src/assets/icons/${mainColor}/linkedin.svg`}
            alt="github"
            title="Github"
            className="absolute left-full top-[15%] w-10 hover:cursor-pointer hover:w-12 ease-in-out duration-300"
          />
        </a>
      </span>
  )
}

export default SocialIcon