/** @type {import('./$types').PageServerLoad} */
export async function load({ setHeaders }) {
    setHeaders({
        'Cache-Control': 'max-age=31536000'
    })
}