import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [token, setToken] = useState(() => localStorage.getItem("token"));
    const [email, setEmail] = useState(null);

    const login = async (email, password) =>{
        try {
            const response = await fetch("http://localhost:5000/api/auth/login",{
                method:"POST",
                headers:{
                    "Contet-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
            });
            if(response.ok){
                const data =await response.json();
                localStorage.setItem("token", data.token);
                setToken(data.token);
                setEmail(data.email);
            } else {
                console.error("Ingreso Fallido");
            } 
        } catch (error){
            console.error("Error en el login", error);
            }
    };    

    const getProfile = async () =>{
        if (!token) return;

        try{
            const reponse = await fetch ("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok){
                const data = await response.json();
                setEmail(data.email);
            } else {
                console.error("Error al ingresar")
            }
        } catch (error){
            console.error("error en el perfil", error);
        }
    };
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setEmail(null);
    };

    useEffect(()=> {
        if (token){
            getProfile();
        }
    }, [token]);


    return (
        <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
            {children}
        </UserContext.Provider>
    );

}

export const useUserContext = () => useContext(UserContext);