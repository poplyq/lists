export const changeCards = (drag, cover, array) =>{
let newarray = []
if (drag > cover) {
   return newarray = [
      ...array.slice(0, cover),
      array[drag],
      ...array.slice(cover + 1, drag),
      array[cover],
      ...array.slice(drag + 1, array.length),
    ];
  } else if (drag < cover) {
   return newarray = [
      ...array.slice(0, drag),
      array[cover],
      ...array.slice(drag + 1, cover),
      array[drag],
      ...array.slice(cover + 1, array.length),
    ];
  }
}