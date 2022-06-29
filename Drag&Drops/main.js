const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragStart', dragstart)
item.addEventListener('dragEnd', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragOver', dragOver)
    placeholder.addEventListener('dragEnter', dragEnter)
    placeholder.addEventListener('dragLeave', dragLeave)
    placeholder.addEventListener('drop', dragDrop)
}

function dragstart(event) {
event.target.classList.add('hold')
setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    event.target.className = 'item'
}

function dragOver() {
    event.preventDefault()
} 

function dragEnter() {
    event.target.classList.add('hovered')
} 

function dragLeave() {
    event.target.classList.remove('hovered')
} 

function dragDrop() {
    event.target.classList.remove('hovered')
    event.target.append(item)
} 