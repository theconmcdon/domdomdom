document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button');
    button.innerText = "Add Square";
    document.body.appendChild(button);

    let container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    for (i = 0; i < container.length; i++) {
        console.log('loaded');
    }

    count = 0;
    let colorsArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple'];

    button.addEventListener('click', function () {
        count++;
        let newDiv = document.createElement('div');
        newDiv.className = 'square';
        newDiv.id = count;
        newDiv.innerText = count;
        container.appendChild(newDiv);

        newDiv.addEventListener('click', function () {
            newDiv.style.background = colorsArr[Math.floor(Math.random() * colorsArr.length)];
        });

        newDiv.addEventListener('dblclick', function () {
            console.log('hmm');
            if (event.target.id % 2 > 0) {
                if (newDiv.previousElementSibling) {
                    newDiv.previousElementSibling.remove();
                } else {
                    alert("No square can be removed by clicking on this square!");
                }
            } else {
                if (newDiv.nextElementSibling) {
                    newDiv.nextElementSibling.remove();
                } else {
                    alert("No square can be removed by clicking on this square!");
                }
            }
        });

    });
});
