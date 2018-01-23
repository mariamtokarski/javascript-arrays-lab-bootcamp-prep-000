const kittens = ["Milo", "Otis", "Garfield"]
var name = ["Ralph", "Bob", "Broom", "Arnold"]

function destructivelyAppendKitten(kittens, name[0]){
    kittens.push(name[0])
    return kittens
}

function destructivelyPrependKitten(kittens, name[1]){
  kittens.unshift(name[1])
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

function appendKitten(kittens, name[2]){
  return appendKitten(name[2])
}

function prependKitten(kittens, name[3]){
  return prependKitten(name[3])
}

function removeLastKitten(kittens){
  return kittens(3)
}

function removeFirstKitten(kittens){
  return kittens(0)
}
