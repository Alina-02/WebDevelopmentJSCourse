const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => (
  <p>
    <strong>total of {sum} exercises</strong>
  </p>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const Course = ({ courses }) => {
  const initialValue = 0;
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course.name}></Header>
          <Content parts={course.parts}></Content>
          <Total
            sum={course.parts.reduce(
              (sum, part) => sum + part.exercises,
              initialValue
            )}
          ></Total>
        </div>
      ))}
    </div>
  );
};

export default Course;
