import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler (req, res){
    console.log(req.body)
    console.log(req)
    let DATA = new Date(req.body.data) 

    if(req.method === 'GET'){
        const feriados = await prisma.feriados256.findMany();
        return res.status(200).json({
            data: feriados,
        })
        }
    if(req.body.data.indexOf('/') > 0){
        return res.status(200).json({
            Text : "data não esta escrita corretamente"
           })
    }
    if(req.method === 'POST'){
        await prisma.feriados256.createMany({
          data : { 
             "data"     : DATA ,
             "nome"     : req.body.nome,
             "tipo"     : req.body.tipo,
             "descricao": req.body.descricao
               }
        }); 
        return res.status(200).json({
        Text : "registrado com sucesso"
       })
    };   
}

