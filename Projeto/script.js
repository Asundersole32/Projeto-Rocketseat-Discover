function toggleMode() {
  const html = document.documentElement

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  html.classList.toggle("light") //Faz o que o codigo comentado acima faz

  //Codigo para mudar a imagem de perfil
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "/assets/Erik_Avatar_light.png")
    img.setAttribute("alt", "Dogão Samurai")
  } else {
    img.setAttribute("src", "/assets/Erik_Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Erik Felipe Sorrindo, vestindo um terno e oculos preto"
    )
  }
}
