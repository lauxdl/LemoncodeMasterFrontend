import React from "react";
import { Button, Input } from "@mui/material";
import { MemberEntity } from "./model";
import Box from '@mui/material/Box';
import { MemberCard } from "./member-card";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { OrganizationSearch } from "./organization-search";
import AppNavBar from "./app-bar";



export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  //token 30 dias - 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
  // React.useEffect(() => {
  //   fetch(`https://api.github.com/orgs/lemoncode/members`)
  //     .then((response) => response.json())
  //     .then((json) => setMembers(json))
  //     .catch(e => {
  //       alert(`Caugth error: ${e.message}`)
  //     });
  // }, []);
  const handleSearch = (organizationName: string) => {
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
      <h2>Finder members of an organization</h2>
     
      <div className="container">
      <OrganizationSearch onSearch={handleSearch} />
        <Box component="ul" sx={{display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}>
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
        </Box>
      </div>
    </>
  );
};
