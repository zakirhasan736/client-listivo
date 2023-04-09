import Head from 'next/head'

const CustomHead = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.content} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default CustomHead