export interface SearchResult {
    mainTitle: string;
    mainImage: string;
    exactMatch: Offer[];
}

export interface Offer {
    id: number;
    label: string;
    location: Location;
    review: Review;
    weekend?: WeekendEntity[] | null;
    facility?: string[] | null;
    star: number;
    connectivity: boolean;
    h2yClientId: number;
    mainImage: MainImage;
    uri: string;
}
export interface Location {
    longitude: number;
    latitude: number;
    label: string;
    completeAddress: CompleteAddress;
    locationsHierarchy?: LocationsHierarchyEntity[] | null;
    uri: string;
    address: string;
    lng: number;
    lat: number;
}
export interface CompleteAddress {
    number: string;
    street: string;
    zipCode: string;
    cityName: string;
    streetAddress: string;
}
export interface LocationsHierarchyEntity {
    type: string;
    label: string;
    id: number;
    code?: string | null;
    isTopCity?: boolean | null;
}
export interface Review {
    average: number;
    count: number;
}
export interface WeekendEntity {
    id: number;
    label: string;
    packageId: string;
    price: Price;
    imageUrl: string;
    topTheme?: string[] | null;
    programIntro?: string[] | null;
    cancellationPolicy: CancellationPolicy;
    cancellationDeadline: string;
    uri: string;
    tags?: TagsEntity[] | null;
    headwords?: HeadwordsEntity[] | null;
    expiration: Expiration;
    lastMinute: boolean;
    flashDeal: boolean;
}
export interface Price {
    sellPrice: number;
    refPrice: number;
    promoPercentageRounded: number;
    target: string;
    nights: number;
    nbRooms: number;
}
export interface CancellationPolicy {
    cancellableUntil: number;
    cancellable: boolean;
    poplidays: boolean;
}
export interface TagsEntity {
    name: string;
    id: number;
}
export interface HeadwordsEntity {
    label: string;
}
export interface Expiration {
    expired: boolean;
}
export interface MainImage {
    url: string;
}
