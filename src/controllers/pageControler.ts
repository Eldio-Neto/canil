import { Request, Response } from "express";
import { pets } from "../models/pets";
import {createMenuObject} from "../helpers/createMenuObject";


export const home = (req:Request, res:Response)=>{
    let list = pets.getAll()
    res.render('pages/page',{
        menu: createMenuObject('all') ,
       banner:{
            title: 'Todos os animais',
            background:'allanimals.jpg'
        }, 
        list
    })
}

export const dogs = (req:Request, res:Response)=>{
    let list = pets.getFromType('dog')
    res.render('pages/page',{
        menu: createMenuObject('dog') ,
        banner:{
            title: 'Cachorros',
            background:'banner_dog.jpg'
        },
        list
    })
}

export const cats = (req:Request, res:Response)=>{
    let list = pets.getFromType('cat')
    res.render('pages/page',{
        menu: createMenuObject('cat') ,
        banner:{
            title: 'Gatos',
            background:'banner_cat.jpg'
        },
        list
    })
}
export const fishes = (req:Request, res:Response)=>{
    let list = pets.getFromType('fish');
    res.render('pages/page',{
        menu: createMenuObject('fish') ,
        banner:{
            title: 'Peixes',
            background:'banner_fish.jpg'
        },
        list
    })
}