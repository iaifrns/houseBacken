import express from 'express'
import {
    getAllHouseOwner,
    getAllHouses,
    getAllClient,
    createHouse,
    createClient,
    createHouseOwner,
    getHouse,
    getClient,
    getHouseOwner,
    deleteHouse,
    deleteClient,
    deleteHouseOwner
 } from '../controllers/index.js'

 const useRoute = express.Router()

 useRoute.get("/allHouses", getAllHouses)
 useRoute.get("/allhouseowners", getAllHouseOwner)
 useRoute.get("/allClient", getAllClient)
 useRoute.post("/addclient", createClient)
 useRoute.post("/addhouse", createHouse)
 useRoute.post("/addhouseowner", createHouseOwner)
 useRoute.get("/oneclient/:id", getClient)
 useRoute.get("/onehouse/:id", getHouse)
 useRoute.get("/onehouseowner/:id", getHouseOwner)
 useRoute.delete("/deletehouse/:id", deleteHouse)
 useRoute.delete("/deletehouseowner/:id", deleteHouseOwner)
 useRoute.delete("/deleteclient/:id", deleteClient)

 export { useRoute }