const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {
        parts.map(value => <Part part={value.name} exercises={value.exercises}/>)
      }
    </div>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <p>{part} {exercises}</p>
  )
}

const Total = ({ parts }) => {
  console.log("ENTRO DAVID: ", parts)
  return (
    parts.map(value => value.exercises).reduce((a, b) => a + b, 0)
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />


    </div>
  )
}

export default App