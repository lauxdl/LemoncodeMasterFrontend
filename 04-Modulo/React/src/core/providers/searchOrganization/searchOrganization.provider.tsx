import React from "react";
import { SearchOrganizationContext } from "./searchOrganization.context";
import { SearchOrganization, defaultSearchOrganization } from "./searchOrganization.vm";


interface Props {
    children: React.ReactNode;
  }
  
export const SearchOrgProvider: React.FC<Props> = ({ children }) => {
const [searchOrg, setSearchOrg] = React.useState<SearchOrganization>(
    defaultSearchOrganization()
);

return (
    <SearchOrganizationContext.Provider
    value={{ searchOrganization: searchOrg.searchOrganization, setSearchOrganization: setSearchOrg }}>
        {children}
    </SearchOrganizationContext.Provider>
    );
};