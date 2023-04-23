import React, { useState } from 'react'

const Question = ({ title, info }) => {
  const [opened, setOpened] = useState(false)
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button onClick={() => setOpened(!opened)} className='question-btn'>
          {opened ? '-' : '+'}
        </button>
      </header>
      {opened ? <p>{info}</p> : null}
    </article>
  )
}

export default Question
