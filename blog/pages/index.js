import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
      <Layout home>
        <Head>
  <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}></section>

        <p>Hello this is jim, this a little site for friend cat kota. 
          May you like it. 
          sooner will show you his picture. </p>
        <p>
          Looks like a good start.
        </p>
        <Link href="/posts/first-post"><a>first page!</a></Link>
      </Layout>
    )
}
