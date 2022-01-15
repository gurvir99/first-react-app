function Player(props) {
  return (
    <div>
      <h2>Player Info</h2>
      <h4>{props.name}</h4>
      <h4>{props.age}</h4>
      <h4>{props.team}</h4>
    </div>
  );
}

export default Player;