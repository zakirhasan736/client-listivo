import ServiceCard from "@/components/elements/serviceCard";
import { ServiceCardData } from "@/data/servicecards";
import { Row, Col } from "antd";

const HowItWorks = () => {
  return (
    <section className="howitwork-section">
      <div className="custom-container">
        <div className="howitwork-main-wrapper">
          <div className="section-main-topbar-box">
            <Row justify="center" align="bottom">
              <Col xxl={24} lg={24} xs={24}>
                <div className="topbar-left-cont-box">
                  <div className="product-title-box">
                    <div className="section-title-box text-center">
                      <span className="pin-text">How it works</span>
                      <h2 className="title">
                        My Social Ring can{" "}
                        <span className="color-text">help you</span> find the
                        best service for you
                      </h2>
                      <p className="desc">
                        Get connected to great services from your community
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="howitwork-content-main-wrapper">
            <Row gutter={[30, 30]}>
              {ServiceCardData.map((items) => (
                <Col xxl={6} xl={6} lg={6} md={12} xs={24} key={items.id}>
                  <ServiceCard
                    serviceIcon={items.serviceIcon}
                    serviceTitle={items.serviceTitle}
                    serviceDesc={items.serviceDesc}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
