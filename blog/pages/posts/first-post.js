import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function FitstPost(){
    return (
        <Layout>
        <Head>
            <title>Cat Kota</title>
        </Head>
        <h1>First Page</h1>
        <h2>
            <Link href="/"><a>Back to home</a></Link>
        </h2>
        </Layout>
    )
}