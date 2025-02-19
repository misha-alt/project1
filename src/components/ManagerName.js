// import React, { useEffect, useState } from 'react'
// import { managerName } from '../service/ProductService'
// import { useNavigate } from 'react-router-dom'

// const ManagerName = () => {

// const [name, setName] = useState([])
// const navigator = useNavigate()

// useEffect(()=>{

//     managerName().then((response)=>{
        
//         setName(response.data);
//         }).catch(error=>{
//             console.error(error);

//         })

// },[])
// return (
    
//     <div className='container'>
    
//     <div>
//       {name}
//     </div>
//   </div>
//   )
// }

// export default ManagerName