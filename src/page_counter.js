const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://7qkkn5e2fe.execute-api.us-east-2.amazonaws.com/prod/count')
        .then(res => res.json())
        .then(res => {
        countEl.innerHTML = res.visits;
    });
}