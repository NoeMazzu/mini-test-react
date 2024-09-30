function Card(props) {
  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "10px" }}>
      <p>{props.content}</p>
    </div>
  );
}

function Cards() {
  return (
    <div style={{ margin: "10px" }}>
      <h2>Page des Cartes</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Card content="exemple 1" />
        <Card content="exemple 2" />
        <Card content="exemple 3" />
        <Card content="exemple 4" />
      </div>
    </div>
  );
}

export default Cards;
