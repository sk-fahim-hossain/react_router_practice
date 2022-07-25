import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {

    const history = useHistory()
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`
        history.push(url)
    }
    const {name,email,id} = props.friend;
    const friendStyle = {
        border: '1px solid red',
        borderRadius:'10px',
        padding:'20px',
        margin:'20px'

    }
    return (
        <div style={friendStyle}>
            <h3>freind Name:<i>{name}</i></h3>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>Show more about freind {id}</Link>
            <button onClick={()=>handleClick(id)}>show more</button>
        </div>
    );
};

export default Friend;