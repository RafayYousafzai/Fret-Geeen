// Main JavaScript File
console.log('Project Script Initialized');

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Toggle current item
            const isExpanded = item.classList.contains('expanded');

            // Optional: Collapse others (Accordion style) - User said "however you like", 
            // this usually feels cleaner for expansions lists.
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('expanded');
                const toggle = otherItem.querySelector('.toggle-icon');
                if (toggle) toggle.textContent = '+';
            });

            if (!isExpanded) {
                item.classList.add('expanded');
                const toggle = item.querySelector('.toggle-icon');
                if (toggle) toggle.textContent = '−'; // Using minus sign
            }
        });
    });
});
