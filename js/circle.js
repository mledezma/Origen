// DOM Elements
const circle = document.querySelector('.js-circle');
const text = document.querySelector('.js-text');
const amount = document.querySelector('.js-amount');
const petroleo = document.getElementById('petroleo');
const electricidad = document.getElementById('electricidad');
const arboles = document.getElementById('arboles');

// Circle radius, diameter and offset function
const radius = circle.getAttribute('r')
const diameter = Math.round(Math.PI * radius * 2)
const getOffset = (val = 0) => Math.round((100 - val) / 100 * diameter)
var info = [
    {
        name: 'Mall San Pedro',
        val: 32,
        petroleo: '1 tonelada',
        electricidad: '4.000 Kwh',
        arboles: '13 árboles medianos',
    },
    {
        name: 'Hotel Hilton',
        val: 44,
        petroleo: '1.4 toneladas',
        electricidad: '6.000 Kwh',
        arboles: '20 árboles medianos',
    },
    {
        name: 'Lincoln Plaza',
        val: 82,
        petroleo: '2.8 toneladas',
        electricidad: '12.000 Kwh',
        arboles: '26 árboles medianos',
    },
    {
        name: 'Coca Cola',
        val: 28,
        petroleo: '0.7 toneladas',
        electricidad: '3.200 Kwh',
        arboles: '10 árboles medianos',
    }
]
let count = 0;

// Generate random number and set offset and percentage
const run = () => {
    let val = info[count].val;
    circle.style.strokeDashoffset = getOffset(val)
    text.textContent = `${info[count].name}`;
    amount.textContent = `${val}%`;
    petroleo.textContent = `${info[count].petroleo}`;
    electricidad.textContent = `${info[count].electricidad}`;
    arboles.textContent = `${info[count].arboles}`;
}


// Event 
document.addEventListener('DOMContentLoaded', () => setTimeout(run, 10));
setInterval(function(){
        if(count >= info.length-1) {
            count=0;
            run();
        } else {
            count+=1;
            run();
        }
    }, 3000)