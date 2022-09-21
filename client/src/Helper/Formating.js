const DateFormater=(inputDate)=>{
  const date=new Date(inputDate)
  const outputDate=`${date.getDay()}/${date.getMonth()+1}/${date.getFullYear()}`
  return outputDate
}
export {DateFormater}