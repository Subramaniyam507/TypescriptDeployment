import { ApplicationService, Request } from "@sap/cds";




module.exports = ((srv:ApplicationService)=>{


      srv.on('getOrders',async (req:Request)=>{
           const {Orders} = srv.entities
           
          let result = await srv.run(SELECT.from(Orders))
          return result
      })
})