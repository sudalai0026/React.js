import Card from "./Components/card"
import shoe from "./assets/shoe.png"
import watch from "./assets/watch.png"
import shirt from "./assets/shirt.png"
import './App.css'


function App() {
  return (
    <>

      <div className="product">
        <Card
          className={"card1"} 
          
          image={shoe}
          name={"shoes"}
          description={"Good Quality"}
          price={"$432"}
        />

        <Card
          className={"card2"}
          
          image={watch}
          name={"smart watch"}
          description={"Good Quality"}
          price={"$202"}
        />

        <Card
          className={"card3"}

          image={shirt}
          name={"for men"}
          description={"Good Quality"}
          price={"$102"}
        />
      </div>

    </>
  )
}

export default App
