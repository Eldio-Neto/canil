import { Request, Response } from "express";
import { pets } from "../models/pets";
import { createMenuObject } from '../helpers/createMenuObject'

export const search = (req: Request, res: Response) => {
    let query:string = req.query.q as string;
    let list = pets.getFromName(query)
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    })
}