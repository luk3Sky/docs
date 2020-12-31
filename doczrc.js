export default {
    files: '**/*.{markdown,mdx}',
    /*ignore: ['docs/*', 'examples/*'],*/
    base: '/docs/',
    dest: '/docs',
    title: "Pera-Swarm",
    public: '/public',
    menu: [
        'Home',
        'Hardware',
        'Firmware',
        'Simulator',
        'Localization',
        { name: 'Communication', menu: [] }
    ]
}
