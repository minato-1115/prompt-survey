import {useState} from "react"


const Form = ({changeValue,title}) =>{
    
    const [text,setText] = useState("")
    const formStyle = {
        padding:"5%",
        width:"50%",
        backgroundColor: "#f0f0f0", // ハイフンをキャメルケースに変換
        textAlign:"center",
        margin:30,
        fontSize:20
      };
    return (
    <>
     <input type = "text" style={formStyle}  value ={text}  placeholder={title} onChange={(e)=>{
        setText(e.target.value)
        changeValue(e.target.value)
     }} >     
     
     </input>
     
    </>
    
    )
}

export default Form
