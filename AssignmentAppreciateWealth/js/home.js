document.addEventListener('DOMContentLoaded', () => {
    
    const openModalButtons = document.querySelectorAll('.button[data-target]');
    
    
    const closeModalButtons = document.querySelectorAll('.close-button');

    
    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    };

   
    const closeModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    };

    
    openModalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const modalId = button.getAttribute('data-target');
            openModal(modalId);
        });
    });

   
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-target');
            closeModal(modalId);
        });
    });

   
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    });
});
