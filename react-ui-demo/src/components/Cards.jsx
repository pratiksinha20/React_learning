function Cards() {
  const data = [
    { title: "React", desc: "Build component-based UI" },
    { title: "Vite", desc: "Super fast development" },
    { title: "JavaScript", desc: "Core programming language" },
  ];

  return (
    <div className="cards">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
