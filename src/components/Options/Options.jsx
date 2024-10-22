import css from './Options.module.css'

export default function Options({ onLeaveFeedback, resetFeedback, totalFeedback }) {
  return (
    <div className= {css.button_wrapper}>
      <button className= {`${css.button_feedback} ${css.good}`} onClick={() => onLeaveFeedback('good')}>Good</button>
      <button className= {`${css.button_feedback} ${css.neutral}`} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button className= {`${css.button_feedback} ${css.bad}`} onClick={() => onLeaveFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button className= {`${css.button_feedback} ${css.reset}`} onClick={() => resetFeedback()}>Reset</button>}
    </div>
  )
}