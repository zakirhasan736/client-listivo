import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "@/components/elements/button";
import SectionTitle from "@/components/elements/sectionTitle";
import { Row, Col } from "antd";
import icons from "@/icons";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Hits,
  Pagination,
  Configure,
  connectStateResults,
  connectRefinementList,
  RefinementList,
} from "react-instantsearch-dom";
import PropTypes from "prop-types";
import ProductCard from "@/components/elements/ProductCard";
import ProductPlaceholder from "@/components/elements/ProductPlaceholder";
import EmptyItem from "@/components/elements/EmptyItem";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

const FeaturesServices = () => {
  const { userGeoLocation, scale } = useSelector(
    (state) => state.globalReducer
  );

  const [selectedCategories, setSelectedCategories] = useState([]);

  let unitValue = scale === "km" ? 1 : 1.609344;
  let totalAroundRadius = unitValue * 10;
  const searchParams = {
    aroundLatLng: `${userGeoLocation?.lat}, ${userGeoLocation?.lng}`,
    aroundRadius: totalAroundRadius.toFixed(0) * 1000,
    hitsPerPage: 12,
    filters: `listing.isPublished=1`,
  };

  function Hit(props) {
    let listing = props.hit?.listing;

    return (
      <ProductCard
        key={listing?.objectID}
        id={listing?.objectID}
        listing={listing}
        userGeoLocations={userGeoLocation}
      />
    );
  }

  Hit.propTypes = {
    hit: PropTypes.object.isRequired,
  };

  const Loading = connectStateResults(
    ({ searching, searchResults, children }) => {
      return (
        <div>
          <div style={{ display: searching ? "grid" : "none" }}>
            <div className="placeholders-list">
              {[...Array(12)].map((_, index) => (
                <ProductPlaceholder key={index} />
              ))}
            </div>
          </div>

          <div style={{ display: searching ? "none" : "block" }}>
            {searchResults && searchResults.nbHits !== 0 ? (
              children
            ) : (
              <div className="search-list-empty">
                <EmptyItem />
              </div>
            )}
          </div>
        </div>
      );
    }
  );

  const CustomRefinementCategories = connectRefinementList(
    ({ attribute, items }) => {
      const refinedFirst = items.sort(
        (a, b) => Number(b.isRefined) - Number(a.isRefined)
      );
      return (
        <>
          <Button
            click={true}
            handleFilter={() => {
              setSelectedCategories([]);
            }}
            butVerient={`filter-button primary-button ${
              (!selectedCategories || !selectedCategories.length) && "active"
            }`}
            btnText="All"
          />
          {items.map((category, index) => (
            <Button
              key={index}
              click={true}
              butVerient={`filter-button primary-button ${
                category.isRefined ? "active" : ""
              }`}
              btnText={category.label}
              handleFilter={() => {
                if (category.label) {
                  setSelectedCategories(category.label);
                }
              }}
            />
          ))}
        </>
      );
    }
  );

  return (
    <section className="features-services-section">
      <div className="custom-container">
        <div className="features-product-main-wrapper">
          <InstantSearch
            indexName="Listing"
            searchClient={searchClient}
            onSearchStateChange={(state) => {}}
          >
            <Configure {...searchParams} />
            <div className="section-main-topbar-box">
              <Row gutter={[0, 30]} justify="center" align="bottom">
                <Col xxl={24} lg={24} xs={24}>
                  <div className="topbar-left-cont-box">
                    <div className="product-title-box">
                      <SectionTitle
                        pinText={`Check out what's new`}
                        title="Featured Services"
                      />
                    </div>
                    <div className="product-filter-box button-filter-box">
                      <CustomRefinementCategories
                        defaultRefinement={selectedCategories || []}
                        limit={4}
                        showMore={false}
                        attribute="listing.category"
                        transformItems={(items) =>
                          items.sort(function (a, b) {
                            if (a.label.toLowerCase() < b.label.toLowerCase()) {
                              return -1;
                            }
                            if (a.label.toLowerCase() > b.label.toLowerCase()) {
                              return 1;
                            }
                            return 0;
                          })
                        }
                      />
                      {/* <Button
                        click={true}
                        handleFilter={handleFilter}
                        butVerient="filter-button primary-button"
                        btnText="Real Estate"
                      />
                      <Button
                        click={true}
                        handleFilter={handleFilter}
                        butVerient="filter-button primary-button"
                        btnText="Medical"
                      />
                      <Button
                        click={true}
                        handleFilter={handleFilter}
                        butVerient="filter-button primary-button"
                        btnText="Financial"
                      />
                      <Button
                        click={true}
                        handleFilter={handleFilter}
                        butVerient="filter-button primary-button"
                        btnText="Photography"
                      /> */}

                      {/*view more button*/}
                      <Button
                        btnText="View all"
                        butVerient="primary-button view-more-button"
                        btnsIcon={<icons.AiOutlineArrowRight />}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="features-services-content-wrap">
              <Loading>
                <Hits hitComponent={Hit} />
              </Loading>
            </div>
          </InstantSearch>
        </div>
      </div>
    </section>
  );
};

export default FeaturesServices;
