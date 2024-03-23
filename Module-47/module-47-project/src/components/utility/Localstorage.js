const getStoredAppliedJob = (id)=>{
  const getStoredItem = localStorage.getItem('job-applications')
  if(getStoredItem){
   return JSON.parse(getStoredItem)
  }
  return[]
}

const storeApplyJob = (id)=>{
  const getStoredJob = getStoredAppliedJob()
  const checkItemAlreadyStoredOrNot = getStoredJob.find(jobId => jobId === id);
  if(!checkItemAlreadyStoredOrNot){
    getStoredJob.push(id)
    localStorage.setItem('job-applications',JSON.stringify(getStoredJob))
  }
}


export {getStoredAppliedJob,storeApplyJob}