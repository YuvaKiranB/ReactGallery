// Write your code here.

import './index.css'

const Thumbnail = props => {
  const {thumbnailInfo, clicked, isActive} = props
  const {thumbnailUrl, thumbnailAltText} = thumbnailInfo

  const thumbnailClick = () => {
    clicked(thumbnailInfo.id)
  }

  const blur1 = isActive ? '' : 'imgBlur'

  return (
    <li>
      <button onClick={thumbnailClick} className="button" type="button">
        <img
          className={`image2 ${blur1}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default Thumbnail
