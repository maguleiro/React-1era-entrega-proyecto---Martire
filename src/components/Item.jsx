//card para mostrar info de productos
import ItemListContainer from "./ItemListContainer";
import {Link} from  'react-router-dom';


const Item = ({ name, precio, img }) =>{
	return(
	<div className="card-group p-2">
	<div className="card" style={{width:"18rem"}}>
	<img class="card-img-top" src={img}/> 
	  	<div className="card-body">
		    <h5 className="card-title">{name}</h5>
		    <p className="card-text">${precio}</p>
		    <Link to={"/detail"}> <button className ="btn-mod btn btn-primary"> See product details</button> </Link>

		    <ItemListContainer />
	  	</div>
	</div>
	</div>

 	);
}


export default Item;


