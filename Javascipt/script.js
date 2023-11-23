

// JavaScript functionality here
document.querySelector('.btn').addEventListener('click', function() {
    let searchInput = document.getElementById('search').value;
    console.log('Searching for: ' + searchInput);
    
    // Store the search term in local storage
    localStorage.setItem('searchTerm', searchInput);

    // Redirect to the search results page
    window.location.href = 'search-results.html'; // Change this to your search results page
});


    // Get the search term from local storage
    let searchTerm = localStorage.getItem('searchTerm');
    console.log('Search term retrieved: ' + searchTerm);

    // Perform the search using the searchTerm
    // You can use this searchTerm to filter your content or fetch search results from a server.
    // Display search results or filter content accordingly




   
        document.getElementById('searchButton').addEventListener('click', function() {
            let searchValue = document.getElementById('searchBox').value.toLowerCase();
            let rows = document.querySelectorAll('table tbody tr');

            rows.forEach(row => {
                let data = row.innerText.toLowerCase();
                if (data.includes(searchValue)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
