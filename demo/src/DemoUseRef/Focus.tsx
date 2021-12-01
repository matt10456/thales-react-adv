import { useRef } from "react";

const Focus = () => {

  // référence directe  à un element du DOM réel
  const inputRef = useRef<any>()
  const divRef = useRef<any>()

  const handleClick = () => {
    inputRef.current.focus()
    //ref.current.value = "Hacked !"
    //console.log(inputRef.current.value)
    divRef.current.innerText += "Hacked !"
  }

  return (
    <>
      <div ref={divRef}></div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Set Focus</button>
    </>
  )

}

export default Focus