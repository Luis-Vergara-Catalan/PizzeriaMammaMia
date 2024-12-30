import CardPizza from "./components/CardPizza"
import Header from "./components/Header"

function Home (){

    
    return (
        <div>
            <Header/>
            <div className='tarjetas'>
            <CardPizza />  
              </div>  
                
        </div>
    )
}

export default Home