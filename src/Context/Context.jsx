import React, { createContext, useEffect, useState } from 'react';

export const authallCoffee = createContext(null);
const Context = ({children}) => {
    const [allcoffee,setAllCoffee] = useState([]);
    const [loader,setLoader] = useState(true);
    useEffect(() => {
        fetch('"http://localhost:5000/allcoffee"')
        .then(res => res.json())
        .then(data => {
            setAllCoffee(data);
            setLoader(false);
        })
        .catch((e) => {
            console.log(e.message);
        })
    },[])
    
    const value = {allcoffee,loader}
    return (
        <authallCoffee.Provider value={value}>
            {children}
        </authallCoffee.Provider>
    );
};

export default Context;