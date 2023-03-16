import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { InputAdornment, TextField } from "@mui/material";
import { SearchOrganizationContext } from "@/core/providers";


interface Props {
  onSearch: (organizationName: string) => void;
  searchOrgInput : string;
}

export const OrganizationSearch: React.FC<Props> = (props) => {
  const { onSearch, searchOrgInput } = props;
  const { searchOrganization, setSearchOrganization } = React.useContext(SearchOrganizationContext);

  React.useEffect(() => {
    onSearch(searchOrganization);
  }, []);

  return (
    <>
      <TextField
        label="Type organization name ..."
        placeholder="Type organization name ..."
        value={searchOrganization}
        onChange={(e) => {
          setSearchOrganization( {searchOrganization: e.target.value})
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button 
                variant="outlined"
                startIcon={<SearchIcon />}
                onClick={() => onSearch(searchOrganization)}
              >
                Search!</Button>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
