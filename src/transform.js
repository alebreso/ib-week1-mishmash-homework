function groupAdultsByAgeRange(arrayOfObj){
  let results ={}
  if(arrayOfObj.length<2) results=arrayOfObj;
  const lessThan20 = arrayOfObj.filter((person) =>person.age>=18 && person.age<=20)
  if(lessThan20.length>0) results['20 and younger']=lessThan20;
  const from21to30 = arrayOfObj.filter((person) =>person.age>=21 && person.age<=30)
  if(from21to30.length>0) results['21-30']=from21to30;
  const from31to40 = arrayOfObj.filter((person) =>person.age>=31 && person.age<=40)
  if(from31to40.length>0) results['31-40']=from31to40;
  const from41to50 = arrayOfObj.filter((person) =>person.age>=41 && person.age<=50)
  if(from41to50.length>0) results['41-50']=from41to50;
  const over51 = arrayOfObj.filter((person) =>person.age>=51)
  if(over51.length>0) results['51 and older']=over51;
  return results;
}

module.exports = {groupAdultsByAgeRange};
