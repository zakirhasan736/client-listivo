const stripe_pk_test =
  "pk_test_51Lyp3YFofNoMN7j6LXm8AFr895JQLUAoGDqSz1fvPAjgnQK06Kt5AwpMOtFp3FjA4Sw6wH3S5SGEpSmjLWIN1sx600c9x2HwC7";
const stripe_pk_live =
  "pk_live_51Lyp3YFofNoMN7j6B5Zv2C9SlXzk3qx0U59J5yeMex5Mlnm6vuXGRPmM9DpDCsb3MHrnGQKFYPKUWWMmYjJQjqTC00NUzuG9CD";
export const STRIPE_PK =
  process.env.NODE_ENV === "production" ? stripe_pk_live : stripe_pk_test;

const stripe_premium_membership_price_test = "price_1MOb4FFofNoMN7j6Trz9odBe";
const stripe_premium_membership_price_live = "price_1MV5ebFofNoMN7j6C75VmV4G";
export const PREMIUM_MEMBERSHIP_PRICE_ID =
  process.env.NODE_ENV === "production"
    ? stripe_premium_membership_price_live
    : stripe_premium_membership_price_test;

const stripe_pro_membership_price_test = "price_1Md5K3FofNoMN7j6gbgiYOZV";
const stripe_pro_membership_price_live = "price_1Mln6JFofNoMN7j6phqvaHMa";
export const PRO_MEMBERSHIP_PRICE_ID =
  process.env.NODE_ENV === "production"
    ? stripe_pro_membership_price_live
    : stripe_pro_membership_price_test;
