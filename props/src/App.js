function App(props) {
  return <div>
    <ShowName name="Harish"/>
    <ShowList fruits="Apple,Bananna,Orange,Grape,Litchy"/>
    <ShowPropsUsingDesturcting name="Props" version="1.0.0"/>
  </div>
}

export function ShowName(props) {
  return <h1>Hello {props.name}!</h1>
}

export function ShowList(props) {
  return <ul>{
    props.fruits.split(',').map((val, index) => <li key={index}>{val}</li>)
  }</ul>
}

export function ShowPropsUsingDesturcting(props) {
  const { name, version } = props;
  return <div>
    <h1>Hello {name}!</h1>
    <h3>Version {version}</h3>
  </div>
}

export default App;