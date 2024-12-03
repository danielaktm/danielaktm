import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import ColorModeIconDropdown from "../../shared-theme/ColorModeIconDropdown";
import Sitemark from "./SitemarkIcon";

import { Link } from "react-scroll";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: "blur(24px)",
    border: "1px solid",
    borderColor: theme.palette.divider,
    backgroundColor: alpha(theme.palette.background.default, 0.4),
    boxShadow: theme.shadows[1],
    padding: "8px 12px",
}));

export default function AppAppBar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate("/sign-in");
    };
    const handleClickSignUp = () => {
        navigate("/sign-up");
    };

    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: "transparent",
                backgroundImage: "none",
                mt: "calc(var(--template-frame-height, 0px) + 28px)",
            }}
        >
            <Container maxWidth="lg">
                <StyledToolbar
                    variant="dense"
                    disableGutters
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            alignItems: "center",
                            px: 0,
                        }}
                    >
                        <Link
                            to="root"
                            smooth={true}
                            duration={1500}
                        >
                            <Sitemark />
                        </Link>
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <Button
                                variant="text"
                                color="info"
                                size="small"
                            >
                                <Link
                                    to="pillita"
                                    smooth={true}
                                    duration={1000}
                                    offset={-50}
                                >
                                    Pillita
                                </Link>
                            </Button>
                            <Button
                                variant="text"
                                color="info"
                                size="small"
                            >
                                <Link
                                    to="regalos"
                                    smooth={true}
                                    duration={1000}
                                    offset={-50}
                                >
                                    Regalos
                                </Link>
                            </Button>
                            <Button
                                variant="text"
                                color="info"
                                size="small"
                            >
                                <Link
                                    to="precios"
                                    smooth={true}
                                    duration={1000}
                                    offset={-50}
                                >
                                    Precios
                                </Link>
                            </Button>
                            <Button
                                variant="text"
                                color="info"
                                size="small"
                                sx={{ minWidth: 0 }}
                            >
                                <Link
                                    to="faq"
                                    smooth={true}
                                    duration={1000}
                                    offset={-50}
                                >
                                    FAQ
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            gap: 1,
                            alignItems: "center",
                        }}
                    >
                        <Button
                            color="primary"
                            variant="text"
                            size="small"
                            onClick={handleClickSignIn}
                        >
                            Sign in
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            size="small"
                            onClick={handleClickSignUp}
                        >
                            Sign up
                        </Button>
                        <ColorModeIconDropdown />
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
                        <ColorModeIconDropdown size="medium" />
                        <IconButton
                            aria-label="Menu button"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    top: "var(--template-frame-height, 0px)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    p: 2,
                                    backgroundColor: "background.default",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>

                                <MenuItem>Pillita</MenuItem>
                                <MenuItem>Precios</MenuItem>
                                <MenuItem>FAQ</MenuItem>
                                <Divider sx={{ my: 3 }} />
                                <MenuItem>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        fullWidth
                                    >
                                        Sign up
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button
                                        color="primary"
                                        variant="outlined"
                                        fullWidth
                                    >
                                        Sign in
                                    </Button>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}
