document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Robusta Brazil', img: '1.jpg', prize: 20000},
            { id: 1, name: 'Robusta Brazil', img: '2.jpg', prize: 20000},
            { id: 1, name: 'Robusta Brazil', img: '3.jpg', prize: 20000},
            { id: 1, name: 'Robusta Brazil', img: '4.jpg', prize: 20000},
            { id: 1, name: 'Robusta Brazil', img: '5.jpg', prize: 20000},
        ]
    }));
});