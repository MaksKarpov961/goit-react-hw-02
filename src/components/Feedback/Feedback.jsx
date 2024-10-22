export default function Feedback({valueFeedBack, totalFeedback}) {
  return (
    <ul>
      <li>Good: <span>{valueFeedBack.good }</span></li>
      <li>Neutral: <span>{valueFeedBack.neutral }</span></li>
      <li>Bad: <span>{valueFeedBack.bad}</span></li>
      <li>Total: <span>{ totalFeedback }</span></li>
      <li>Positive: <span>{Math.round((valueFeedBack.good / totalFeedback) * 100) } %</span></li>
    </ul>
  )
}