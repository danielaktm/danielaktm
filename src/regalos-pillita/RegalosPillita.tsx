import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "../marketing-page/components/Footer";
import ColorModeIconDropdown from "../shared-theme/ColorModeIconDropdown";
import MainContent from "./components/MainContent";
import SitemarkIcon from "./components/SitemarkIcon";

import { useNavigate } from "react-router-dom";

import AppTheme from "../shared-theme/AppTheme";

export default function Blog(props: { disableCustomTheme?: boolean }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <AppTheme {...props}>
            <Box
                onClick={handleClick}
                sx={{
                    pt: { xs: 0, sm: 4 },
                    pl: { xs: 4, sm: 8 },
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <SitemarkIcon />
            </Box>
            <CssBaseline enableColorScheme />
            <Box sx={{ position: "fixed", top: "1rem", right: "1rem" }}>
                <ColorModeIconDropdown />
            </Box>

            <Container
                maxWidth="lg"
                component="main"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    my: 8,
                    gap: 4,
                }}
            >
                <MainContent />
            </Container>
            <Footer />
        </AppTheme>
    );
}
