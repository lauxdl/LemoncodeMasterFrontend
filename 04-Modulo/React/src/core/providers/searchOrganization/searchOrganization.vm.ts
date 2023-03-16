export interface SearchOrganization{
    searchOrganization: string;
}

export const defaultSearchOrganization = (): SearchOrganization => ({
    searchOrganization: "lemoncode"
});