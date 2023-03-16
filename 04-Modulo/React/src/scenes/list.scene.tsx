import React from "react";
import { MemberEntity } from "@/pods/list/list.vm";
import AppNavBar from "@/pods/list/components/app-bar";
import { OrganizationSearch } from "@/pods/list/components/organization-search";
import { MemberCard } from "@/pods/list/components/member-card";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { SearchOrganizationContext } from "@/core/providers/searchOrganization/searchOrganization.context";

export const ListScene: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [filteredMembers, setFilteredMembers] = React.useState("");
  const { searchOrganization ,setSearchOrganization } = React.useContext(SearchOrganizationContext);
  

  const handleSearch = (organizationName: string) => {

    setSearchOrganization( { searchOrganization: organizationName });
    console.log(`Consulta Input:${organizationName}`);
     
    fetch(`https://api.github.com/orgs/${organizationName}/members`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching members");
        }
      })
      .then(setMembers)
      .catch(() => {});
  };

  return (
    <>
      <AppNavBar />
      <h2>Finder for members of an organization</h2>
     
      <div className="container">
      <Grid container spacing={2} 
            direction="row"
            justifyContent="center"
            alignItems="center">

        <Grid item xs={6}>
          <OrganizationSearch onSearch={handleSearch} searchOrgInput={searchOrganization}  />
        </Grid>
        <Grid item xs={6}>
          <TextField id="filteredMembers" label="Filter by loginName" variant="outlined" 
          value={filteredMembers} 
          onChange={e => setFilteredMembers(e.target.value)} />
        </Grid>
        <Grid item xs={12} >
          <Box component="ul" sx={{display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0, justifyContent:"center" }}>
            {members
            .filter(member => {
              if (!filteredMembers) return true;
              if (member.login.includes(filteredMembers) ) {
                return true;
              }
              return false;
            })
            .map(member => (
              <MemberCard key={member.id} member={member} />
            ))}

          </Box>
        </Grid>
      </Grid>
     
      </div>
    </>
  );
};
