Person = (props) => {
    return (
    <div className="pers">
    <h1>{props.name}</h1>
    <p>{props.tag}</p>
  </div>
    );
  }
  
  let app = (
  <div>
    <Person name="Harry Maguire" tag="The Fridge" />
    <Person name="Jose Mourinho" tag="The Special One" />
    <Person name="Ronaldo Nazario" tag="El Phenomeno" />
  </div>
  );
  
  
  ReactDOM.render(app, document.querySelector('#app'));

  //import react and reactDOM and Babel webpacker.