const rows = document.querySelectorAll('tbody tr');
rows.forEach(row =>{
    const id = row.dataset.id;
    const name = row.dataset.name;
    console.log(`Product Id ${id}, Name: ${name}`);
}
);
