export default interface ProductFilter {
    id: string,
    name: string,
    label: string,
    subFilters: string[],
    brand?: boolean,
    page?: boolean,
    pagesContainer?: boolean,
    brandsContainer?: boolean,
    pageCategory?: boolean,
    pageSubCategory?: boolean,
    root?: boolean
}