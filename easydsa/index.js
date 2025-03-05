class EasyDsa{
    linearSearch(arr,key){
        for(let i=0; i < arr.length ; i++){
            if(arr[i] === key ){
                return i;
            }
        }
        return -1;
    }
    binarySearch(arr, key) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === key) return mid;
            if (arr[mid] < key) left = mid + 1;
            else right = mid - 1;
        }

        return -1;  // Key not found
    }
}

export { EasyDsa };