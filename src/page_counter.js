const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://bv1vhfqojc.execute-api.us-east-2.amazonaws.com/prod')
        .then(res => res.json())
        .then(res => {
        countEl.innerHTML = res.visits;
    });
}