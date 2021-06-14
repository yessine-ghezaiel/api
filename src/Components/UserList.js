import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './listeStyle.css';

const UserList = ({userList,loading}) => {

return (
    <div className="list-wrapper">
        {loading && <h1>Loading...</h1>}
        {!loading && (
    <div>
        {userList.map((el) => (
        <ul key={el.id} className="list">
            <li style={{ listStyle: "none" }}>
            
            <Link className="title" to={`/details/${el.id}`}>{el.name}</Link>
            </li>
        </ul>
        ))}
    </div>
    )}
    </div>
    );
};

export default UserList;
