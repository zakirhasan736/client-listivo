import ProductViewListingDetailsBody from '@/components/body_main/productViewListingDetails';
// import ViewListingDetailsBody from '@/components/body_main/viewListingDetails';
import Layout from '@/components/layout/layout';
import CustomHead from '@/head/Head';
import { useRouter } from '@packages/packages';

const ViewListingDetails = () => {
  const router = useRouter()
  // const { pid } = router.query
  console.log(router.query)
  return (
    <>
      <CustomHead title='Listivo | view listing details' content='Search for a service is free and easy – it only takes a few simple steps!  Find the best service for your needs.' />
    
      <Layout baseTheme='secondary-theme'> {/*[our theme type 'primary-theme' and 'secondary theme']*/}
       {/*<ViewListingDetailsBody />*/}
      <ProductViewListingDetailsBody  />
      </Layout>
    </>

  )
}

export default ViewListingDetails