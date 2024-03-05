const btn = document.getElementById('button-addon2');

btn.addEventListener('click', () => {
    const inp = document.getElementById('input').value;
    const catagory = document.querySelector('.catagory')
    if (inp == "") {
        alert('add somthing!')
    }
    const inputArray = [];
    inputArray.push(inp);
    inputArray.map((ele) => {
        const ul = document.createElement('ul')
        const li = document.createElement('li').textContent = ele
        const check = document.createElement('button')
        catagory.append(ul, li)
        li.append(check)
    })
})