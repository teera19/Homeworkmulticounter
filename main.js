
let counterId = 0;
const sumall = document.querySelector(".sumcount");
sumall.setAttribute('id', 'total');
const addcounters = document.querySelector(".addcon");
addcounters.setAttribute('onclick', 'addcounter()');
function updatecount() {
    let upcount = 0;
    document.querySelectorAll('.number').forEach(function(element) {
        upcount += parseInt(element.textContent, 10);
    });
    document.getElementById('total').textContent = `Sum Counter:${upcount}`;
}

function addcounter() {
    const counterDiv = document.createElement("div");
    counterDiv.classList.add("counter");

    const h1 = document.createElement("h1");
    h1.textContent = "Counter";
    h1.classList.add("counter-title");
    
    const btnInc = document.createElement("button");
    btnInc.classList.add("btn", "btn-inc");
    btnInc.textContent = "+";
    
    const h3Number = document.createElement("h3");
    h3Number.classList.add("number");
    h3Number.textContent = "0";
    
    const btnDec = document.createElement("button");
    btnDec.classList.add("btn", "btn-dec");
    btnDec.textContent = "-";
    
    const btnClr = document.createElement("button");
    btnClr.classList.add("btn", "btn-clr");
    btnClr.textContent = "0";

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn", "btn-delete");
    btnDelete.textContent = "X";

    counterDiv.dataset.counterId = counterId++;

    btnInc.addEventListener('click', function() {
        buttonplusClick(counterDiv);
    });

    btnDec.addEventListener('click', function() {
        buttondeleteClick(counterDiv);
    });

    btnClr.addEventListener('click', function() {
        buttoncClick(counterDiv);
    });

    btnDelete.addEventListener('click', function() {
        deleteCounter(counterDiv);
    });

    counterDiv.appendChild(h1);
    counterDiv.appendChild(h3Number);
    counterDiv.appendChild(btnInc);
    counterDiv.appendChild(btnClr);
    counterDiv.appendChild(btnDec);
    counterDiv.appendChild(btnDelete);
    document.body.appendChild(counterDiv);
    updatecount();
}

function deleteCounter(counterDiv) {
    counterDiv.remove();
    updatecount();
}

function buttonplusClick(counterDiv) {
    let count = parseInt(counterDiv.querySelector('.number').textContent, 10);
    count += 1;
    updateCounter(counterDiv, count);
    updatecount();
}

function buttondeleteClick(counterDiv) {
    let count = parseInt(counterDiv.querySelector('.number').textContent, 10);
    count -= 1;
    if (count < 0) {
        count = 0;
    }
    updateCounter(counterDiv, count);
    updatecount();
}

function buttoncClick(counterDiv) {
    let count = parseInt(counterDiv.querySelector('.number').textContent, 10);
    if (count > 0) {
        count = 0;
    }
    updateCounter(counterDiv, count);
    updatecount();
}

function updateCounter(counterDiv, count) {
    counterDiv.querySelector('.number').innerHTML = count;
}





