import Form from "../components/Fom";
import { useContext} from "react";
import { FormContext } from "../hooks/useForm";
import ActionButton from "../components/ActionButton";
const InputForms = ()=>{
   
    const context =useContext(FormContext)
    if(!context){
        throw new Error("入力されていない")
    }
    const {setSystem,setUser} = context

    return(
    <>
    <Form changeValue={setSystem} title={"AIの役割について教えてください"}></Form>
    <Form changeValue={setUser} title={"AIのしてほしいことについて教えてください"}></Form>
    <ActionButton/>
    </>
    )
} 

export default InputForms
