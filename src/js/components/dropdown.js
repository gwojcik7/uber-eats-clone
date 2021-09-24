(function(){
    document.addEventListener('click', (e) => {
        if(!e.target.classList.contains('dropdown__btn')) {
            closeDropdowns();
            return;
        }

        const parent = e.target.parentNode;

        parent.classList.toggle('active');
    });

    function closeDropdowns() {
        const elements = document.querySelectorAll('.dropdown.active');
        for (const element of elements) {
            element.classList.remove('active');
        }
        
    }
})();