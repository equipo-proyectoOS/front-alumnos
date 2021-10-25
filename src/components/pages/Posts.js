import React,{useState, useEffect} from 'react';

const fetchData = async () =>{
  try{
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const res = await data.json()
    console.log(res)
  }catch(error) {
    console.log("Hubo un error en la peticion",error)
  }
}



const Posts = () => {
  /* useEffect(()=>{
    alert('Pagina Cargada Completamente')
  }) */
  const [state,setState] = useState(false)

  useEffect(()=>{
    if(state){
      console.log("Cambió el estado, activamos el useEffect")
      fetchData()
    }
  },[state])


  return (
      <><h1>Hola Bienvenidos a Posts</h1>
      <button
            onClick={() => setState(!state)}
            className='btn-success'
      >
        cambiar
      </button>
      </>
  );
};

export default Posts;
