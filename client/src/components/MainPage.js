import React from 'react';
import getStorage from "../helpers/getStorage";
import setStorage from "../helpers/setStorage";

function MainPage() {
    return (
        <>
           {getStorage?<button onClick={() => setStorage(null)}>Logout</button>:1}
        </>
    )
}

export default MainPage
