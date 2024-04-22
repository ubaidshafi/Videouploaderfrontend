import { commonRequest } from "./commonRequest";

import {baseurl} from "./baseurl";

// add video    http://localhost:5000/videos

 export const addVideo=async(body)=>{
    return await commonRequest('POST',`${baseurl}/videos`,body)
}


// get all videos

 export const getAllVideos=async()=>{
  return  await commonRequest('GET',`${baseurl}/videos`,{})
}

// delete singel video

export const deleteVideo=async(id)=>{
  return await commonRequest('DELETE',`${baseurl}/videos/${id}`,{})
}

// add category
export const addCategory=async(body)=>{
  return await commonRequest('POST',`${baseurl}/categories`,body)
}



// get all categories to display

export const getAllCat=async()=>{
  return await commonRequest('GET',`${baseurl}/categories`,{})
}
// category delete
export const deleteCat=async(id)=>{
  return await commonRequest('DELETE',`${baseurl}/categories/${id}`,{})
}

// Add History

export const addHistory=async(body)=>{
  return await commonRequest('POST',`${baseurl}/histories`,body)
}

// get all History to display

export const getAllHistory=async()=>{
  return await commonRequest('GET',`${baseurl}/histories`,{})
}


// delete history

export const deleteHistory=async(id)=>{
  return await commonRequest('DELETE',`${baseurl}/histories/${id}`,{})
}

// drag and delete



// access single video

export const getVideo=async(id)=>{
  return await commonRequest('GET',`${baseurl}/videos/${id}`,{})
}


// update category

export const updateCategory=async(id,body)=>{
  return await commonRequest('PUT',`${baseurl}/categories/${id}`,body)
}
