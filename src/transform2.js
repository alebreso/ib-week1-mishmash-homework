function groupAdultsByAgeRange(people){
  let results =[];

  const youngerThan20 = people.filter(user=> user.age>=18 && user.age<=20);
    if(youngerThan20>0) results='younger than 20': youngerThan20;
  const from21to30 = people.filter(user=> user.age>=21 && user.age<=30);
  const from31to40 = people.filter(user=> user.age>=31 && user.age<=40);
  const from41to50 = people.filter(user=> user.age>=41 && user.age<=50);
  const olderThan50 = people.filter(user => user.age>=51);


  return results
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
