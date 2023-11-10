function Data() {
  const personList = [
    { name: "Riya", Age: 20 }, //key value pair
    { name: "Shalu", Age: 70 }, //1st index
    { name: "Navya", Age: 25 },
    { name: "Ajay", Age: 28 },
    { name: "Aryan", Age: 15 },
    { name: "Meenakshi", Age: 45 },
  ];
  let arr = personList[0].Age;
  return (
    <h2>
      <u>PersonList</u>
      {arr}
      {console.log(arr)}
    </h2>
  );
}
export default Data;
