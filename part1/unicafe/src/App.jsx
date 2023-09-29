import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )

const Statistics = ({ feedback, total }) => {
  if (total === 0) {
    return (
      <div>
        no feedback yet
      </div>
    )
  }

  const average = total !== 0 ? (feedback.good * 1 + feedback.neutral * 0 + feedback.bad * -1) / total : 0
  const percentage = total !== 0 ? (feedback.good / total) * 100 : 0

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={feedback.good} />
          <StatisticLine text="neutral" value={feedback.neutral} />
          <StatisticLine text="bad" value={feedback.bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average.toFixed(1)} />
          <StatisticLine text="positive" value={`${percentage.toFixed(1)}%`} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0})
  
  const increaseByOne = (type) => () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }))
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseByOne('good')} text='good' />
      <Button handleClick={increaseByOne('neutral')} text='neutral' />
      <Button handleClick={increaseByOne('bad')} text='bad' />
      <h1>statistics</h1>
      <Statistics feedback={feedback} total={totalFeedback} />
    </div>
  )
}

export default App