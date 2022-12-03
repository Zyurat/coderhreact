let arrayItems = [
  {
    id: "1",
    name: "producto 1",
    category: "cascos",
    stock: "100",
    price: "200",
    picture: "https://google.com",
  },
  {
    id: "2",
    name: "producto 2",
    category: "cascos",
    stock: "100",
    price: "200",
    picture: "https://google.com",
  },
];
export const gFetch = (nro) => {
  return new Promise ( (resolve, reject)=>{
    const condition=true
    if (condition) {
      setTimeout(()=>{
        resolve(arrayItems)
      }, 3000)
    } else {
      reject ('sos trolvs')
    }
  }) 
}