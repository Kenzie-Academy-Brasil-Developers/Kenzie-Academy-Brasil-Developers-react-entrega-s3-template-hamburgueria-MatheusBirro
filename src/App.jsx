import { useEffect, useState } from "react"
import { ToastContainer} from "react-toastify"
import { CartModal } from "./components/CartModal"
import { HomePage } from "./pages/HomePage"
import "./styles/globalStyles.scss"

function App() {
  const localCartListFull = localStorage.getItem("@cartListFull")
  const localCartList = localStorage.getItem("@cartList")

  const [isOpen, setIsOpen] = useState(false)  
  const [cartListFull, setCartListFull] = useState(
    localCartListFull? JSON.parse(localCartListFull) : []
  )
  const [cartList, setCartList] = useState(
    localCartList? JSON.parse(localCartList) : []
  )
  useEffect(()=>{
    localStorage.setItem("@cartListFull",JSON.stringify(cartListFull))
  },[cartListFull])

  useEffect(()=>{
    localStorage.setItem("@cartList",JSON.stringify(cartList))
  },[cartList])
  
  return (
    <>
      <HomePage setIsOpen={setIsOpen} setCartList={setCartList} cartList={cartList} cartListFull={cartListFull} setCartListFull={setCartListFull}/>
      {isOpen? <CartModal setCartList={setCartList} cartList={cartList} setIsOpen={setIsOpen} cartListFull={cartListFull} setCartListFull={setCartListFull}/> : null}
      <ToastContainer position="bottom-right"/>
    </>
  )
}

export default App