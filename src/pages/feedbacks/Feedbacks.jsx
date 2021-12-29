import React, { useRef } from 'react'
import Feedback from './Feedback'
import useFeedback from '../../hooks/use-feedback'

import './Feedbacks.scss'

const feedbackForum = {
  id: '',
  name: 'Our User',
  image: 'https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
  feedback: ''
}

const Feedbacks = () => {

  const feedbackRef = useRef()

  const { feedbacks, addNewFeedback } = useFeedback()

  const handleNewFeedback = () => {
    const content = feedbackRef.current.value;
    var fdForum = feedbackForum
    var readyFeedback = {...fdForum, feedback: content, id: `${Math.random()}`}
    addNewFeedback(readyFeedback)
    feedbackRef.current.value = ''
  }

  return (
    <div className='feedbacks'>
      <textarea ref={feedbackRef} placeholder='Type Your Feedback For Us'></textarea>
      <button onClick={handleNewFeedback}>Publish</button>
      <div className="feedbacksArea">
        {feedbacks.map(feedback => (
          <Feedback key={feedback.id} id={feedback.id} name={feedback.name} image={feedback.image} feedback={feedback.feedback} />
        ))}
      </div>
    </div>
  )
}

export default Feedbacks;
