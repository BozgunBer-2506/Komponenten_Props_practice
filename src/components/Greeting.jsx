function Greeting(props) {
  return (
    <div className="greeting">
      <h2>Hallo {props.name}!</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default Greeting;