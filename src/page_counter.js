const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://0aw077vxbk.execute-api.us-east-2.amazonaws.com/prod/count')
        .then(res => res.json())
        .then(res => {
        countEl.innerHTML = res.visits;
    });
}