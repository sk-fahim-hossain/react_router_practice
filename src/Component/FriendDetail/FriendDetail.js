import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const [friend, setFriend] = useState({})
    const {friendId} = useParams()

    // console.log(friendId)

    useEffect(()=>{
        const url = `http://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    const friendStyle ={
        backgroundColor:'purple',
        textAlign:'center',
        margin:'20px',
        padding:'20px',
        border:'1px solid golden',
        borderRadius:'5px',
    }
    return (
        <div style={friendStyle}>
            <h3>this is friend detail:{friendId}</h3>
            <h2>{friend.name}</h2>
            <h3>{friend.email}</h3>
            <h3>{friend.phone}</h3>
        </div>
    );
};

export default FriendDetail;