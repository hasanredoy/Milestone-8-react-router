import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const getStorage = ()=>{
  const storedId = localStorage.getItem('bookmark')
  if(storedId){
   return JSON.parse(storedId) 
  }
  return []
}

export const setInStorage = (blogId)=>{
  const storedId = getStorage()
  const checkStorage = storedId.find(idx => idx.id === blogId.id)
  if(checkStorage){
    toast.error('already exist')
    return
  }
  storedId.push(blogId)
  toast('Bookmark Added')
  localStorage.setItem('bookmark',JSON.stringify(storedId))
}

export const deleteFromStorage = (id)=>{
  const storedId = getStorage()
  const checkStorage = storedId.filter(idx => idx.id !== id)
  toast('delete successful')
  localStorage.setItem('bookmark',JSON.stringify(checkStorage))
}
