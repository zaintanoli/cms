import connect from "@/utils/db";
import de from '@/models/parts'

export const POST = async (req)=>{
  const { partNumber, partName, partDescription, componentOf, shelfLife, maintenanceRecord, serviceRecord, schematics, dimensions, WarehouseNo, specialInstructions } = req.body;
  
  console.log(partNumber, partName, partDescription, componentOf, shelfLife, maintenanceRecord, serviceRecord, schematics, dimensions, WarehouseNo, specialInstructions)
      try {
  
        // Connect to MongoDB
        await connect();
  
        // Create a new data entry
        const newdataEntry = new de({ 
            partNumber, 
            partName, 
            partDescription, 
            componentOf, 
            shelfLife, 
            maintenanceRecord, 
            serviceRecord, 
            schematics, 
            dimensions, 
            WarehouseNo, 
            specialInstructions
        });
  
        // Save the data entry to the database
        await newdataEntry.save();
  
        const newResponse = {
            message  : 'Form data saved successfully'
        } 
        return new Response(JSON.stringify(newResponse), {status:200});
      } catch (error) {
        console.error('Error:', error); // Add this line to log the error
        return new Response(JSON.stringify({err:'Failed to Complie API'}), {status:500});
      }
    }