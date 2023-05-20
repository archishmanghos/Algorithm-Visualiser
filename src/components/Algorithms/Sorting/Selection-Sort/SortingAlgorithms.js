

export function selectionSort(items){
    let results = [];

    let resultItems = JSON.parse(JSON.stringify(items));

    let current_index = 0
    while(current_index<resultItems.length - 1){
        let min_val = resultItems[current_index].itemValue;
        let min_idx = current_index;
        
        for(let i = current_index+1; i<resultItems.length;i++){
            if(resultItems[i].itemValue<min_val){
                min_val = resultItems[i].itemValue;
                min_idx = i;
            }
        }
        
        [resultItems[current_index], resultItems[min_idx]] = [resultItems[min_idx], resultItems[current_index]];
        current_index+=1
        results.push(JSON.parse(JSON.stringify(resultItems)));
    }
    
    results.push(JSON.parse(JSON.stringify(resultItems)));
    return results;
}

export function getAlgoFunction(algoFunction){


    
    if(algoFunction==="SelectionSort")
        return selectionSort;

}
