import Random from "./Random"
import "../App.css"

export default function Matrix({data}){
    
const number = Random(6)

const clicked =(event)=> {
        
        if (event.target.id == number){
            return event.target.src = "https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-tesoro-gemas-oro_11460-13000.jpg";
    
            
        }
        else { 
            return event.target.src = "https://www.teleadhesivo.com/es/img/asdr042-png/folder/products-detalle-png/vinilos-infantiles-calavera-pirata-a-color.png"
        } 
        
    }
    return <div className="Matrix">
        {data.map((item, index) => <div key={index}>
            <img src={item.img} alt={"imagen equis"} onClick={clicked} id={index} />
        </div>)}
    </div>
}
