// Fetch API ile GET İsteği

//     İsterler:
//     Bir API'den kullanıcı verilerini çeken bir fonksiyon yazın.
//     Verileri çekmek için Fetch API kullanın.
//     Verileri başarılı bir şekilde aldığınızda konsola yazdırın.
//     https://jsonplaceholder.typicode.com/

document.getElementById("getRequest").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error: ", error));
});

// Fetch API ile POST İsteği
    
//     İsterler:
//     Bir API'ye yeni bir kullanıcı verisi gönderen bir fonksiyon yazın.
//     Veriyi göndermek için Fetch API kullanın.
//     Gönderim başarılı olduğunda sunucunun döndürdüğü yanıtı konsola yazdırın.

document.getElementById("postRequest").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "POST REQUEST",
      body: "LOREM IPSUM",
      userId: 5,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
