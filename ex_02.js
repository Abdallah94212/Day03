function findHousing(housingToFind, housingList) {
    let i = 0; 
    housingToFind = housingToFind.toLowerCase(); 

    while (i < housingList.length) { 
        if (housingList[i].toLowerCase() === housingToFind) { 
            return [i, housingList[i]]; 
        }
        i++; 
    }
    
    return null; 
}
