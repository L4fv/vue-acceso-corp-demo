TAREA(CHALLENGE);

//GET IMAGENES BY CATEGORY
const category = 1;
const cantidad = 10; // [
const catalogoCategories = [
  {
    id: 5,
    name: "boxes"
  },
  {
    id: 6,
    name: "caturday"
  },
  {
    id: 15,
    name: "clothes"
  },
  {
    id: 9,
    name: "dream"
  },
  {
    id: 3,
    name: "funny"
  },
  {
    id: 1,
    name: "hats"
  },
  {
    id: 10,
    name: "kittens"
  },
  {
    id: 14,
    name: "sinks"
  },
  {
    id: 2,
    name: "space"
  },
  {
    id: 4,
    name: "sunglasses"
  },
  {
    id: 7,
    name: "ties"
  }
];
 
//GET LISTA
const response = await axios({
  url: `https://api.thecatapi.com/v1/images/search?limit=${cantidad}&category_ids=${category}`,
  method: "GET",
  headers: {
    "content-type": "application/json",
    "x-api-key": "d1f20906-fc9e-4bd7-9358-4d799f47cf0b"
  }
});

//POST AGREGAR IMAGENES FAVORITAS A MI PERFIL
const response = await axios({
  url: `https://api.thecatapi.com/v1/votes`,
  method: "post",
  headers: {
    "content-type": "application/json",
    "x-api-key": "d1f20906-fc9e-4bd7-9358-4d799f47cf0b"
  },
  data: {
    image_id: "asf2",
    sub_id: "my-user-1234", //LUIS
    value: 1
  }
});

//GET FAVORITOS MI PERFIL
const sub_id = "LUIS";
const response = await axios({
  url: `https://api.thecatapi.com/v1/votes?sub_id=${sub_id}`,
  method: "GET",
  headers: {
    "content-type": "application/json",
    "x-api-key": "d1f20906-fc9e-4bd7-9358-4d799f47cf0b"
  }
});
