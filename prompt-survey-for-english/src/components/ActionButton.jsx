import Button from '@mui/material/Button';
import { useContext,useState } from 'react';
import { FormContext } from '../hooks/useForm';
import { ApiProcess } from '../function/ApiProcess';

const ActionButton = () =>{
    
    const {system,user}= useContext(FormContext)
    const [response,setResponse] = useState("")
    const dataProcess = async()=>{
        try {
            const messages = [{role:"system",content:system},{role:"user",content:user}]
            const data = await ApiProcess(messages)
            setResponse(data?.choices?.[0]?.message?.content || "応答なし")
            console.log(data?.choices?.[0]?.message?.content)

        }catch{
            console.error("AIからの解答の受け取りに失敗しました。")
        }
        
    }
    const buttonStyle = {
        width:"30%",
        height:"10vh",
        fontSize:30
    }
    return(
        <>
        <Button variant = "contained" style={buttonStyle} onClick ={dataProcess}>解答</Button>
        <p>{response}</p>
        </>
    )
}
export default ActionButton