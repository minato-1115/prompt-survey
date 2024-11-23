export  async function ApiProcess(messages){
    try {
        const response = await fetch("http://localhost:8000/api/chat",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({messages})
        })
        if(!response.ok){
            throw new Error("サーバーとの通信に失敗しました")
        }
        const data = await response.json()
        console.log("API応答:", data);
        return data;
    }catch(error){
        console.error("通信エラー",error);
        throw error
    }
}