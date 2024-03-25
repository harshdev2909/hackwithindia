export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow:'/private/'
        },
        sitemap: 'https://hackwithindia.live/sitemap.xml',
    }
}