const kittens = ["Milo", "Otis", "Garfield"]
var name = ["Ralph", "Bob", "Broom", "Arnold"]

function destructivelyAppendKitten(kittens, "Ralph"){
    kittens.push("Ralph")
    return kittens
}

function destructivelyPrependKitten(kittens, "Bob"){
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(kittens){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(kittens){
  kittens.shift()
  return kittens
}

function appendKitten(kittens, "Broom"){
  return appendKitten("Broom")
}

function prependKitten(kittens, "Arnold"){
  return prependKitten("Arnold")
}

function removeLastKitten(kittens){
  return kittens(3)
}

function removeFirstKitten(kittens){
  return kittens(0)
}
