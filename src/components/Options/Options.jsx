export default function Options({onLeaveFeedback , resetFeedback , totalFeedback}) {
  return (
    <div>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button onClick={() => resetFeedback()}>Reset</button>}
    </div>
  )
}