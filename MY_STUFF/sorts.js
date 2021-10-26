const unsortedArray = [3, 5, 2, 4, 9, 7]

// merge-sort
//////////////////////////////////////////////////////////////////////////
function mergeSort(array = []) {
    if (array.length <= 1) return array
    
    let middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)

    left = mergeSort(left)
    right = mergeSort(right)

    return sortHalves(left, right)
}

function sortHalves(arr1, arr2) {
    let sortedArray = []
    let i = 0, j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArray.push(arr1[i])
            i++
        } else {
            sortedArray.push(arr2[j])
            j++
        }
    }
    
    if (i < arr1.length) sortedArray.push(...arr1.slice(i))
    if (j < arr2.length) sortedArray.push(...arr2.slice(j))

    return sortedArray
}

const sorto = mergeSort(unsortedArray)
console.log(sorto)
//////////////////////////////////////////////////////////////////////////
