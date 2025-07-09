import projectModel from '../models/project.model'

export const createProject = async ({name, object_id})=>{
  try{
    const {name, object_id} = req.body
    if(!name || !userId){
      throw new error("name and onject_id both required")
    }
    const project = await projectModel.create({
      name, 
      userId
    })
    
  }catch(error){
    if(error.code == userId){
      throw new Error("Project name already exist")
    }
    throw new Error("Error: ", error)
  }
}