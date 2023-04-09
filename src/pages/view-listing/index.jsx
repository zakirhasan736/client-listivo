import ViewListingBody from '@/components/body_main/viewListing';
import Layout from '@/components/layout/layout';
import CustomHead from '@/head/Head';

const ViewListing = () => {
  return (
    <>
      <CustomHead title='Listivo | view listing' content='Search for a service is free and easy – it only takes a few simple steps!  Find the best service for your needs.' />
      <Layout>
        <ViewListingBody />
      </Layout>
    </>

  )
}

export default ViewListing