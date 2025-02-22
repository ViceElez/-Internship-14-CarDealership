export function showFilterInputs(){
    const selectFilter = document.getElementById('select-filter');
    if(selectFilter.value==='Mark'){
        document.getElementById('mark-input').classList.remove('hidden');
        document.getElementById('model-input').classList.add('hidden');
    }
    else if(selectFilter.value==='Model'){
        document.getElementById('model-input').classList.remove('hidden');
        document.getElementById('mark-input').classList.add('hidden');
    }
    else{
        document.getElementById('mark-input').classList.add('hidden');
        document.getElementById('model-input').classList.add('hidden');
    }
    
}