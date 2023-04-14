import Layout from '@/components/layout/layout'
import CustomHead from '@/head/Head'
import Loader from './loader';
import dynamic from 'next/dynamic';

const HomeBody = dynamic(() => import('@/components/body_main/home'), { loading: () => <Loader /> });

export default function Home() {

  return (
    <>
      <CustomHead title='Listivo | Home' content='Search for a service is free and easy – it only takes a few simple steps!  Find the best service for your needs.' />
      <Layout baseTheme='primary-theme'>
        <HomeBody />
      </Layout>
    </>
  )
}
