import useFeedback from '../../hooks/use-feedback'
import { FaTrashAlt } from 'react-icons/fa'

import './Feedback.scss'

const Feedback = (props) => {

  const { removeFeedback } = useFeedback()

  const { name, image, feedback, id } = props

  const handleRemoveFeedback = () => {
    removeFeedback(id)
  }

  return (
    <div className="feedback">
      <div className="details">
        <img src={image} alt="" />
        <div className="inside">
          <h4>{name}</h4>
          <p>{feedback}</p>
        </div>
      </div>
      <div className="action">
        <FaTrashAlt onClick={handleRemoveFeedback} />
      </div>
    </div>
  )
}

export default Feedback;