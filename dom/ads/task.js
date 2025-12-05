const rotatorCases = document.querySelectorAll('.rotator__case');
let position = 0;
const maxPosition = rotatorCases.length;

setInterval(()=>{
    if (position < maxPosition) {
        rotatorCases.forEach(element => {
            element.classList.remove('rotator__case_active');
        });
        rotatorCases[position] = rotatorCases[position].classList.add('rotator__case_active');
        position += 1;
    } else {
        position = 0;
    }
    
},1000);