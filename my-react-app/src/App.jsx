function App() {
  const name = "Birds🐧";
  let num1 = 1000;
  let num2 = 100;
  let num = num1+num2;
  let age=18;
  let userage=20;
 
  return (
    <>
    
      <h1 style={{color:"violet"}}>{name}</h1>
      <div style = {{display:"flex"}}>
      <img style={{width:500}}
      src = "https://www.rd.com/wp-content/uploads/2018/03/emperor-penguins-sliding.jpg"
      alt = "Birds" />
      <p className="Avian">
        Birds are warm-blooded vertebrates characterized by feathers,
        toothless beaked jaws,
        the laying of hard-shelled eggs, 
        and a lightweight yet strong skeleton.
        As Earth's only animals with feathers,
        there are over <b> {num} </b> living species globally,
        ranging from the tiny bee hummingbird to the flightless ostrich.
      </p>
      </div>
      {
      (userage>age)?<p>User Logged IN</p>:
      <p>Invalid Age</p>
    }
    <button onDoubleClick={()=>{
    alert("Warning⚠️")
    }} style={{width:"fit-content"}}>Danger</button>
    </>
  );
}

export default App; 