

const Student = () => {
    
    const students = [
       
        {id:1 , name: "Siddhant" , status: "online"}
    ]
 

    return (
        <div>
            <ul>
                
                {students.length > 0 ? (students.map((item)=>{
                    return <li key={item.id}>{item.name} {(item.status == "online") ? "🟢" : "🔴"}</li>
                })): "No data found"}
                
            </ul>

        </div>
    )
}

export default Student