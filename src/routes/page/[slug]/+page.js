/** @type {import('./$types').PageLoad} */
export function load({ params: { slug } }) {

    const allPages = [
        [], // placeholder allows us to use slug as index
        [
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-01/dn-p-01-01.jpg`,
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-01/dn-p-01-02.jpg`,
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-01/dn-p-01-03.jpg`
        ],
        [
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-02/dn-p-02-01.jpg`,
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-02/dn-p-02-02.jpg`,
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-02/dn-p-02-03.jpg`,
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-02/dn-p-02-04.jpg`,
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-02/dn-p-02-05.jpg`,
        ],
        [
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-03/dn-p-03-01.jpg`,
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-03/dn-p-03-02.jpg`,
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-03/dn-p-03-03.jpg`,
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-03/dn-p-03-04.jpg`,
        ],
        [
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-04/dn-p-04-01.jpg`,
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-04/dn-p-04-02.jpg`,
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-04/dn-p-04-03.jpg`,
            `https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-04/dn-p-04-04.jpg`,
        ],
    ]

    const issueNumber = Number(slug)
    const pages = allPages[issueNumber];
    return {
        pages,
    }
}