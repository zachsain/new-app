import React, {useState} from 'react'
import { useHistory} from 'react-router-dom'

function StockForm(){

    const [stockName, setStockName] = useState("")
    const [purchasedPrice, setPurchasedPrice] = useState(0)
    const [sharesPurchased, setSharesPurchased] = useState(0)
    const history = useHistory()

    function handleSubmit(e){
      e.preventDefault()  
      console.log(e)
      history.push('/profile')
    }

    return(
        <div className="stock-form-container">
            <form className="stock-form">
                <input
                  placeholder="Stock Name"
                  onInput={(e) => setStockName(e.target.value)}
                />
                <br/>
                <input 
                  placeholder="Purchased Price"
                  onInput={(e) => setPurchasedPrice(e.target.value)}
                />
                <br/>
                <input 
                  placeholder="Amount Of Shares Purchased"
                  onInput={(e) => setSharesPurchased(e.target.value)} 
                />
                <button onClick={handleSubmit}>Add Stock To Portfolio</button>
            </form>
        </div>
    )
}


export default StockForm
