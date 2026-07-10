

const Test = () => {
    
    const names = ["siddhant", "armor","sourish"]
    const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMVYe7u3RdnTYiaEVxX-61rbbaDRBd5JBd_zGZPPbtXZ7l_P6ukGCeXHhrmMCnY8OK6U0ZfD4ZTQeYugP-pqUD0NuXQgsve-_VId4PnzigQ&s=10"
    
    return (
        <>
        Test
            <ul>

            {names.map((item)=>{
                return <li>{item}</li>
            })}
            
            {names.map((item) => ( <li>{item}</li>))}
            </ul>
            Neymar 

            <img src={img} alt="" />
        </>
    )
}


export default Test