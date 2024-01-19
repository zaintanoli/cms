import connect from "@/utils/db";
import Post from "@/models/Post";
import pricing from "@/models/pricing";

export const POST = async (req) => {
  const { firstName, lastName, businessEmail, phoneNumber, company } = await req.json();
console.log(firstName, lastName, businessEmail, phoneNumber, company)
      try {
        // Connect to the database
        await connect();
  
        // Create a new Post document
        const newpricing = new pricing({
           // Add the username here
           firstName, lastName, businessEmail, phoneNumber, company
          });
  
        // Save the document to the database
        await newpricing.save();
    const response = {
      message: `Request Pricing successful `,
      modal: true,
    };
    return new Response(JSON.stringify(response), { status: 201 });
  } catch (error) {
    console.log(error);
  }
};


// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { firstName, lastName, businessEmail, phoneNumber, company } = req.body;

//     try {
//       // Connect to the database
//       await connect();

//       // Create a new Post document
//       const newPost = new Post({
//         title: `${firstName} ${lastName}`,
//         desc: "", // Add a description here
//         img: "",  // Add an image URL here
//         content: "", // Add content here
//         username: "", // Add the username here
//       });

//       // Save the document to the database
//       await newPost.save();

//       res.status(201).json({ message: "Pricing data saved successfully" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Error saving pricing data" });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
