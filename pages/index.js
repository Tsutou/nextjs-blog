import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedData} from '../lib/posts'

export async function getStaticProps() {
    const allPosts = getSortedData()
    return {
        props: {
            allPosts
        }
    }
}

export default function Home({allPosts}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPosts.map(({id, date, title, description}) => (
                        <Link href={`/posts/${id}`}>
                            <div className={utilStyles.card}>
                                <li className={utilStyles.listItem} key={id}>
                                    <a className={utilStyles.headingLg}>{title}</a>
                                    <br/>
                                    <p className={utilStyles.lightText}>{description}</p>
                                    <br/>
                                    <small className={utilStyles.lightText}>
                                        <Date dateString={date}/>
                                    </small>
                                </li>
                            </div>
                        </Link>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
