export const getStorage = ()=>{
  const storage = localStorage.getItem('donation')
  if(storage){
    return JSON.parse(storage)
  }
  else return []
}

export const setInStorage = (blogId)=>{
  const storedId = getStorage()
  const checkStorage = storedId.find(idx => idx.id === blogId.id)
  if(checkStorage){
    // toast.error('already exist')
    return
  }
  storedId.push(blogId)
  // toast('Bookmark Added')
  localStorage.setItem('donation',JSON.stringify(storedId))
}