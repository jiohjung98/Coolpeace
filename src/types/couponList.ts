export interface ToggleStyleProps {
  $isToggle: boolean;
}

export interface ResisterDateStyleProps {
  $resisterDateClick: boolean;
}

export interface CategoryTabStyleProps {
  $categoryTab: boolean;
}

// api 쿠폰 리스트정보 응답 데이터
export interface CouponLitResponse {
  content: CouponInformationResponse[];
  category: {
    all: number;
    exposure_on: number;
    exposure_off: number;
    expiration: number;
  };
  total_pages: number;
  total_elements: number;
  size: number;
  number: number;
  number_of_elements: number;
  empty: boolean;
  first: boolean;
  last: boolean;
}

export interface CouponInformationResponse {
  title: string;
  coupon_number: string;
  coupon_status: string;
  coupon_promotion: boolean;
  coupon_concat_title: string;
  discount_type: string;
  discount_value: number;
  customer_type: string;
  coupon_room_type: string;
  minimum_reservation_price: number;
  coupon_use_condition_days: string[];
  exposure_start_date: string;
  exposure_end_date: string;
  coupon_expiration: number;
  download_count: number;
  use_count: number;
  accommodation_id: number;
  register_room_numbers: string[];
  created_date: string;
}

// 쿠폰 1개에 대한 타입
export interface CouponListProps {
  couponInfo: CouponInformationResponse;
}
