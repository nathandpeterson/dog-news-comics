/** @type {import('./$types').PageServerLoad} */
export async function load({ setHeaders }) {
    setHeaders({
        'cache-control': 'max-age=31536000'
    })
}