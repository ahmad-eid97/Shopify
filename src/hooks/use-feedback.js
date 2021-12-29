import { useSelector, useDispatch } from "react-redux"
import { feedbackActions } from "../store/feedback-slice"

const useFeedback = () => {

  const feedbacks = useSelector(state => state.feedbacks.feedbacks)

  const dispatch = useDispatch()

  const addNewFeedback = (readyFeedback) => {
    dispatch(feedbackActions.addNewFeedback(readyFeedback))
  }

  const removeFeedback = (id) => {
    dispatch(feedbackActions.removeFeedback(id))
  }

  return {
    feedbacks,
    addNewFeedback,
    removeFeedback
  }

}

export default useFeedback;