import { Router } from "express";

const router = Router();

let products = [];

router.get("/", (req, res) => {
    res.json(products);
});

router.get("/:pid", (req, res) => {
   const productoIdBuscado = req.params.pid;
   const product = products.find(producto => productoId === productoIdBuscado);
   if(!product){
       res.status(404).send("No se encontro el producto");
   }else{
       res.json(product);
   }
})