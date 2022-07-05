import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GitExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //Como el array puede cambiar, puede tener mas o menos, usamos el useState
    const [categories, setCategories]= useState(['Samurai X']);
    
    //const handleAdd = () => {

        //PARA AGREGAR ELEMENTOS AL ARRAY USANDO setCategories
        //Se usa el operador spread. mantiene lo anterior y anade lo nuevo
        //setCategories([...categories, 'FIGHTER']);
        console.log(categories)

        //OTRA MANERA USANDO --------- CALLBACK
        //El cats contiene lo ya guardado y se le adiciona el LALALAND
        //setCategories(cats => [...cats, 'LALALAND'])

        //SPREADDDDDDDDDDDDDD
        //Concierte un array a una lista
    //}
    console.log(categories)

    return (
        <div>
            <h2>GitExpertApp</h2>
            {/* COMUNICACION ENTRE COMPONENTESSSSSSSSSSSSSSSSS
                Por medio del props se puede llamar el setCategories el cual 
                va a actualizar el estado del array */}

            <AddCategory setCategories= { setCategories }/>
            {/* Ese hr es una linea */}
            <hr></hr>
    
            

            {/* Mostrar un array de forma ordenada tipo lista,
                se pone la propiedad ol que es usada para listas */}
            <ol>
                {/* Con el map. lo que hace es recorrer el array y retornar
                    cada uno de los elementos del array */}
                {   //El map recibe 2 argumentos,
                    //el elemento del array y su indice
                    //No siempre es necesario poner el indice
                    categories.map( category => { 
                        //Antes se llamaba la categoria del array para mostrarla,
                        //ahora se creo un nuevo componente el cual va a mostar la categoria
                        //del array y hara una peticion http para que muestre gifs de la categoria
                        //return <li key={ category }> { category } </li>

                        //Este es el nuevo componente
                        //Recordar que REACT siempre pide un key para los valores 
                        // para poder diferenciarlos
                        return  <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    })
                }
            </ol>
        </div>
    );
}

export default GitExpertApp;