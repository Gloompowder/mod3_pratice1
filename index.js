document.addEventListener("DOMContentLoaded",function(event){
    url = "http://localhost:3000/toys"
    form = document.createElement("form")
    // formContent = form.innerHTML= `<`
    body = document.querySelector("body")
    toyFormButton = body.querySelector("button")
    toysList = ''

    function makingToyForm(){
        const toyForm = document.createElement("form")
        form.name = "new-toy"
        form.id = 'new-toy'
      
        form.innerHTML = `
          <label>Name: </label>
          <input type="text" name="name">
          <br>
          <label>Image Url: </label>
          <input type="text" name="image">
          <br>
          <label>Likes: </label>
          <input type="number" name="likes">
          <br>
          <input type="submit" value="New Toy">
        `
        return form
      }

      let newToyCard = document.createElement("div")
      let formNameInput = form.name.value 
      let formImageInput = form.image.value
      let formLikesInput = form.likes.value 

      let toy = {
          name: formImageInput,
          image: formImageInput,
          likes: formLikesInput
      }

      const toyLi = createToy(toy)

    console.log(toyFormButton)
    toys = fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    documentEvents = document.addEventListener("click", function(event){
        if(toyFormButton){
        }
    })
});

