export default {
    files: '**/*.{markdown,mdx}',
    ignore: ['docs/*'],
    base: '/docs/',
    dest: '/docs',
    title: "Pera-Swarm",
    public: '/public',
    menu: [
        'Home',
        'Getting Started',
        { name: 'Components', menu: ['Alert'] },
    ]

}
