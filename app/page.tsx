import Image from "next/image";

interface UseriInterface{
  id:number,
  name: string
}
const Home = async ()=> {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users : UseriInterface[] = await res.json()
  return (
    <>
    <ul>
     {users.map(user => <li key= {user.id}>{user.name}</li> )}
    </ul>
      
    </>
  );
}


export default Home