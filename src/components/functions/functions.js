import { array } from "prop-types";

export const changeCards = (drag, cover, array) => {
  let newarray = [];
  if (drag > cover) {
    return (newarray = [
      ...array.slice(0, cover),
      array[drag],
      ...array.slice(cover + 1, drag),
      array[cover],
      ...array.slice(drag + 1, array.length),
    ]);
  } else if (drag < cover) {
    return (newarray = [
      ...array.slice(0, drag),
      array[cover],
      ...array.slice(drag + 1, cover),
      array[drag],
      ...array.slice(cover + 1, array.length),
    ]);
  }
};

const changeSimple = (arr, i, b)=>{
  let newarr = []

  if (b < i) {

    return (newarr = [
      ...arr.slice(0, b),arr[i], arr[b],...arr.slice(i + 1),
    ]);
  } else if (b > i) {
    return (newarr = [
      ...arr.slice(0, i),
      arr[b],
      arr[i],
      ...arr.slice(b + 1),
    ]);
  }
}
export const changeArray = (array, prevObj, curObj, i, b) => {

  let newarray = [];
  console.log(i, b);
  if(!prevObj){
    newarray = changeSimple(array,i,b)
    console.log(newarray);
 return newarray 
  } else if (b < i) {
    return (newarray = [
      ...array.slice(0, b),
      prevObj,
      curObj,
      ...array.slice(i + 1),
    ]);
  } else {
    return (newarray = [
      ...array.slice(0, i),
      curObj,
      prevObj,
      ...array.slice(b + 1),
    ]);
  }
};

