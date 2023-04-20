import { LocationIcon, RefreshIcon } from "@/assets/icons";
import EyeIcon2 from "@/assets/icons/EyeIcon2";
import HeartIcon from "@/assets/icons/HeartIcon";
import React from "react";

function ProductCard({
  id,
  listing,
  userGeoLocations,
  bookmarked = false,
  removeBookmarkListing,
}) {
  return (
    <div className="product-card">
      <div
        className="cover-img"
        style={{
          backgroundImage: `url(${listing?.image1200})`,
        }}
      />
      <div className="card-content">
        <div className="name ellipsis-1">{listing?.businessName}</div>
        <div className="location-row">
          <div className="icon">
            <LocationIcon />
          </div>
          <div className="address ellipsis-1">{listing?.address || "N/A"}</div>
        </div>
        <div className="price">$300</div>
      </div>
      <div className="card-footer">
        <div className="actions">
          <button className="action">
            <EyeIcon2 />
          </button>
          <button className="action">
            <RefreshIcon />
          </button>
          <button className="action">
            <HeartIcon />
          </button>
        </div>
        <div className="views">{`${listing?.viewCount} Views`}</div>
      </div>
    </div>
  );
}

export default ProductCard;
