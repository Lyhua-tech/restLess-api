import React, { useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function MainLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* App Bar / Header for Burger Icon */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          backgroundColor: "#1976d2", // App bar color
          color: "#fff",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h6">My App</Typography>
        <IconButton color="inherit" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Sidebar */}
      <Drawer
        variant="temporary"
        open={isSidebarOpen}
        onClose={toggleSidebar}
        sx={{
          display: { xs: "block", md: "none" }, // Show drawer on small screens
          "& .MuiDrawer-paper": { width: "250px" },
        }}
      >
        <Box sx={{ p: 2 }}>Sidebar Content</Box>
      </Drawer>

      {/* Permanent Sidebar for md+ Screens */}
      <Box
        sx={{
          width: "250px",
          display: { xs: "none", md: "block" }, // Hide on small screens
          backgroundColor: "#f4f4f4",
          p: 2,
          boxShadow: "2px 0px 5px rgba(0,0,0,0.1)",
        }}
      >
        Sidebar Content
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#fff",
          p: 3,
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
