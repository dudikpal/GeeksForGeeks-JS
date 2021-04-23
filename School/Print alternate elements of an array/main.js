export const print = (arr, n) => {
        //code here
        let resultArray = [];
        for (let i = 0; i < n; i += 2) {

            resultArray.push(arr[i]);
        }
        //console.log(...resultArray);
        return resultArray;
    }

