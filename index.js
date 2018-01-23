var kittens = ["Milo", "Otis", "Garfield"]
var name = "Ralph"
var name2 = "Bob"
var name3 = "Broom"
var name4 = "Arnold"

function destructivelyAppendKitten(kittens, name){
    kittens.push(name)
    return kittens
}

function destructivelyPrependKitten(kittens, name2){
  kittens.unshift(name2)
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

function appendKitten(kittens, name3){
  return appendKitten(name3)
}

function prependKitten(kittens, name4){
  return prependKitten(name4)
}

function removeLastKitten(kittens){
  return kittens(3)
}

function removeFirstKitten(kittens){
  return kittens(0)
}
