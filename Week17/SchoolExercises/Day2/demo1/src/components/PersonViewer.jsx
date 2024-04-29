import React, {useState, useEffect} from 'react' // To hooks

function PersonViewer(props){ // eller {name,age} //imutebale //bliver brugt fra en parent hos en child
const [nameState, setNameState] = useState(props.name); //initial value (altså starts værdi fra props)
const [users, setUsers] = useState([{id: 1, name: 'Ahmad', email: 'email@danmark.dk'}]);

useEffect(() =>{ //UseEffect har to parametrer. Den ene et callback og den anden er dependency array
    console.log('name changed to:', nameState);
    const myFirstPromise = fetch("https://jsonplaceholder.typicode.com/users");
    const mySecondPromise = myFirstPromise.then((response)=> response.json());
    mySecondPromise.then((data) => {
    setUsers(data); //On mounting
})}
,[]); // Dependency array

return ( 
    <>
    <div>name: {props.name}</div>
    <div>age: {props.age}</div>
    // Vi bruger arrowfunction
    <ShowName name= {nameState}/>
    <button onClick={()=>setNameState('Dorthe nielsen')}>
        Set name
        </button>
    {users && users.map((user) => (
            <div key = {user.id}>
            <h1>id: {user.id}</h1>
            {user.name && <ShowName name = {user.name} />}
            {user.email && <h1>email: {user.email}</h1>}
            </div>
        ))}
    </>
    )
}

const ShowName = ({name}) => <h1>name: {name}</h1>

export default PersonViewer;