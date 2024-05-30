document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('dropdownButton');
    if (button) {
        button.addEventListener('click', function() {
            const items = document.querySelectorAll('.option a');
            items.forEach(item => {
                if (item.classList.contains('hidden')) {
                    
                    item.classList.remove('hidden');
                    item.style.display = 'block'; // Make it visible
                } else {
                    item.classList.add('hidden');
                    item.style.display = 'none'; // Hide it again
                }
            });
        });
    } else {
        console.error('Button not found');
    }
});
