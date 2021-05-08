const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

const setWaterLevel = (numberOfFullCups, totalCups) => {
    if (numberOfFullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        const height = `${numberOfFullCups / totalCups * 330}px`;
        percentage.style.visibility = 'visible';
        percentage.style.height = height;
        percentage.innerText = `${numberOfFullCups / totalCups * 100}%`;
    }
}

const setRemainingText = (numberOfFullCups, totalCups) => {
    if (numberOfFullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * numberOfFullCups / 1000)}`
    }
}

const updateBigCup = () => {
    const numberOfFullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    setWaterLevel(numberOfFullCups, totalCups);
    setRemainingText(numberOfFullCups, totalCups);
}

updateBigCup();

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCup(index));
});

function highlightCup(index) {

    if (smallCups[index].classList.contains('full')
       && !smallCups[index].nextElementSibling.classList.contains('full')) {
           index--;
    }
    smallCups.forEach((cup, innerIndex) => {
        if (innerIndex <= index) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full'); 
        }
    })

    updateBigCup();
}

