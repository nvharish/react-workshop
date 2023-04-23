import propTypes from 'prop-types';

function App(props) {
  return <h3>
    Name: {props.name.toUpperCase()}
    <br />
    Version: {props.version}
    <br />
    Power: {props.power ** 2}
  </h3>
}

export default App;

App.propTypes = {
  name: propTypes.string.isRequired,
  version: propTypes.number,
  power: propTypes.number.isRequired
}