// Your code here

function mapToNegativize(ray){
    let returnRay = []
    ray.forEach(function(index){
        returnRay.push(index * -1)
    })
    return returnRay
}

function mapToNoChange(ray){
    return ray
}

function  mapToDouble(ray){
    let returnRay = []
    ray.forEach(function(index){
        returnRay.push(index * 2)
    })
    return returnRay
}

function  mapToSquare(ray){
    let returnRay = []
    ray.forEach(function(index){
        returnRay.push(index ** 2)
    })
    return returnRay
}

function reduceToTotal(ray, base=0){
    let value = base
    ray.forEach(function(index){
        value += index
    })
    return value
}

function reduceToAllTrue(ray){
    let value = true
    ray.forEach(function(index){
        if (index == false){
            return value = false
        }
    })
    return value
}

function reduceToAnyTrue(ray){
    let value = false
    ray.forEach(function(index){
        if (index == true){
            return value = true
        }
    })
    return value
}











// reduceToAnyTrue returns true when a true value is present
// reduceToAnyTrue returns false when no true value is present