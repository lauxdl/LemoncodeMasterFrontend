import React from "react";
import { SearchOrganization, defaultSearchOrganization } from "./searchOrganization.vm";

interface SearchOrganizationModel {
  searchOrganization: string;
  setSearchOrganization: (searchOrganization: SearchOrganization) => void;
}

export const SearchOrganizationContext = React.createContext<SearchOrganizationModel>({
  searchOrganization: "",
  setSearchOrganization: () => {},
});