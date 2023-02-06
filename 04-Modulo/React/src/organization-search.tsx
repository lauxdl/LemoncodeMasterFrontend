import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import React from "react";
import { IconButton, Input, TextField } from "@mui/material";

interface Props {
  onSearch: (organizationName: string) => void;
}

export const OrganizationSearch: React.FC<Props> = (props) => {
  const { onSearch } = props;
  const [organizationName, setOrganizationName] = React.useState("lemoncode");

  React.useEffect(() => {
    onSearch(organizationName);
  }, []);

  return (
    <>
      <Input
        placeholder="Type organization name ..."
        value={organizationName}
        onChange={(e) => {
          setOrganizationName(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        startIcon={<SearchIcon />}
        onClick={() => onSearch(organizationName)}
      >
        Search!
      </Button>
    </>
  );
};
