import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
const App = () => {
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total
        exerciseOne={exercises1}
        exerciseTwo={exercises2}
        exerciseThree={exercises3}
      />
    </div>
  );
};

export default App;
