import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler (req, res){
    console.log(req.body)

    let data_brasileira = req.body.data;
    let data_americana = data_brasileira.split('/').reverse().join('-');
    let DATA = new Date(data_americana) 

    if(req.method === 'GET'){
    const feriados = await prisma.feriados256.findMany();
    return res.status(200).json({
        data: feriados,
    })
    } else if(req.method === 'POST'){
        await prisma.feriados256.create({
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

