const Header = ({ courseName }) => {
    return <h2>{courseName}</h2>
}

const Part = ({ part }) => {
    return <p>{part.name} {part.exercises}</p>
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part =><Part key={part.id} part={part} />)}
        </div>
    )
}

const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
    return <p>Total of {totalExercises} exercises</p>
}

const Course = ({ course }) => {
    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}
  
export default Course