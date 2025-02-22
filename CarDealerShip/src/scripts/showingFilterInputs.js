export function showFilterInputs(){
    const selectFilter = document.getElementById('select-filter');
    const markInput = document.getElementById('mark-input');
    const modelInput = document.getElementById('model-input');

    if(selectFilter.value==='Mark'){
        markInput.classList.remove('hidden');
        modelInput.classList.add('hidden');
        modelInput.value='';
    }
    else if(selectFilter.value==='Model'){
        modelInput.classList.remove('hidden');
        markInput.classList.add('hidden');
        markInput.value='';
    }
    else{
        markInput.classList.add('hidden');
        modelInput.classList.add('hidden');
        markInput.value='';
        modelInput.value='';
    }
}