import { useState } from 'react'
import Question from './components/Question'
import data from './data'

const App = () => {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </section>
    </main>
  )
}

export default App
