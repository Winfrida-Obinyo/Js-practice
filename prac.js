// search for a target value in a sorted array.
function binarySearch(arra,targeta){
    let left = 0;
    let right = arr.length -1;

    while (left<= right){
        let mid = Math.floor((left+right)/2);
        if (arra[mid]===targeta){
            return mid;
        }
        else if(arra[mid] <targeta){
            left = mid +1;
        }
        else{
            right = mid -1;
        }

        
    }
    return -1;
}
const arra = [1,3,5,7,9]
const targeta = 9
console.log(binarySearch(arra,targeta))

// Find the first and last occurrence 
// of a target value in a sorted array
function findFirstAndLast(arr, target) {
    const first = binarySearch(arr, target, true);
    const last = binarySearch(arr, target, false);
    return [first, last];
  }
  
  function binarySearch(arr, target, isFirst) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        result = mid;
        if (isFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return result;
  }
  const arr = [1, 2, 2, 3, 3, 3, 4, 5];
  const target = 3;
  
  const [first, last] = findFirstAndLast(arr, target);
  
  console.log(`First occurrence: ${first}`); 
  console.log(`Last occurrence: ${last}`);   

