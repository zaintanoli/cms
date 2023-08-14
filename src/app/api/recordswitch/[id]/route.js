import Project from "@/model/project";
import { connectToDB } from "@/utils/database";

export const GET = async (req, { params }) => {
  try {
    const index = parseInt(params.id); // Convert index to integer

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const userId = searchParams.get("userId");

    await connectToDB();

    let projects;
    if (userId) {
      projects = await Project.find({ userId }).sort({ createdAt: 1 });
    } else {
      projects = await Project.find().sort({ createdAt: 1 });
    }

    if (index < 0 || index >= projects.length) {
      return new Response("Invalid index number", { status: 400 });
    }

    const project = projects[index];
    console.log("About to Return Project ID:", project._id);

    const response = {
      id: project._id.toString()
    };

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch project", { status: 500 });
  }
};
