import CustomHead from '@/head/Head'
import Layout from '@/components/layout/layout'
import Loader from '@/components/loader/loader'
import dynamic from 'next/dynamic'

const AboutContainer = dynamic(() => import('../components/body_main/about'), { loading: () => <Loader /> })

const About = (props) => {
    return (
        <>
            <CustomHead title='Listivo | Home' content='Search for a service is free and easy – it only takes a few simple steps!  Find the best service for your needs.' />
            <Layout>
                <h4>I am heading from about page</h4>
                <AboutContainer />
            </Layout>
        </>
    )
}

export default About