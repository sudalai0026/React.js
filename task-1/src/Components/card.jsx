import "./card.css";
function Card(props){
    return(
        <div className={props.className}>
           <img src={props.image} alt="jjj"/>
           
           <h1>{props.name}</h1>
           
           <p>{props.description}</p>
           
           <h3>{props.price}</h3>

          <button className="cart">ADD TO CART</button>
           
        </div>
    );
}
export default Card