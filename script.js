let areas = { a: null, b: null, c: null }

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', DragOver)
    area.addEventListener('dragleave', DragLeave)
    area.addEventListener('drop', Drop)
})
document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral)
document.querySelector('.neutralArea').addEventListener('dragleave', dragleaveNeutral)
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral)


//function items
function dragStart(e) {
    e.currentTarget.classList.add('dragging')
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging')
}


//function Area
function DragOver(e) {
    if (e.currentTarget.querySelector('.item') === null) {
        e.preventDefault()
        e.currentTarget.classList.add('hover')
    }
}

function DragLeave(e) {
    e.currentTarget.classList.remove('hover')

}

function Drop(e) {
    e.currentTarget.classList.remove('hover')
    if (e.currentTarget.querySelector('.item') === null) {
        let dragItem = document.querySelector('.item.dragging')
        e.currentTarget.appendChild(dragItem)
        UpdateAreas()
    }

}

//functions NeutralAeas

function dragOverNeutral(e) {
    e.preventDefault()
    e.currentTarget.classList.add('hover')
}

function dragleaveNeutral(e) {
    e.currentTarget.classList.remove('hover')
}

function dropNeutral(e) {
    e.currentTarget.classList.remove('hover')
    let dragItem = document.querySelector('.item.dragging')
    e.currentTarget.appendChild(dragItem)
    UpdateAreas()

}


//logics function

function UpdateAreas() {
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name')
        if (area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML
        } else {
            areas[name] = null
        }
    })
    if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct')
    } else {
        document.querySelector('.areas').classList.remove('correct')
    }
}