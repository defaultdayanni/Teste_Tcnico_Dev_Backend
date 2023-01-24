import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();


export default async function handler (req, res){
    console.log(req)
    const {date} = req.query
    const DATA = new Date(date)


    if(req.method === 'GET'){
        const feriado = await prisma.feriados256.findUnique({
            where: {
                 data: DATA
            },
          })
          
        return res.status(200).json({
             data: feriado
        })
        }
}
