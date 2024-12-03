import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import SitemarkIcon from "./SitemarkIcon";

function Copyright() {
    return (
        <Typography
            variant="body2"
            sx={{ color: "text.secondary", mt: 1 }}
        >
            {"Copyright © "}
            <Link
                color="text.secondary"
                href="https://mui.com/"
            >
                Sitemark
            </Link>
            &nbsp;
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <React.Fragment>
            <Divider />
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: { xs: 4, sm: 8 },
                    py: { xs: 8, sm: 10 },
                    textAlign: { sm: "center", md: "left" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            minWidth: { xs: "100%", sm: "60%" },
                        }}
                    >
                        <Box
                            onClick={handleClick}
                            sx={{ width: { xs: "100%", sm: "60%" } }}
                        >
                            <SitemarkIcon />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{ fontWeight: "medium" }}
                        >
                            Inicio
                        </Typography>
                        <Link
                            color="text.secondary"
                            variant="body2"
                            href="#"
                        >
                            Pillita
                        </Link>
                        <Link
                            color="text.secondary"
                            variant="body2"
                            href="#"
                        >
                            Precios
                        </Link>
                        <Link
                            color="text.secondary"
                            variant="body2"
                            href="#"
                        >
                            FAQs
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{ fontWeight: "medium" }}
                        >
                            Legal
                        </Typography>
                        <Link
                            color="text.secondary"
                            variant="body2"
                            href="#"
                        >
                            Terms
                        </Link>
                        <Link
                            color="text.secondary"
                            variant="body2"
                            href="#"
                        >
                            Privacy
                        </Link>
                        <Link
                            color="text.secondary"
                            variant="body2"
                            href="#"
                        >
                            Contacto
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pt: { xs: 4, sm: 1 },
                        width: "100%",
                        borderColor: "divider",
                    }}
                >
                    <div>
                        <Link
                            color="text.secondary"
                            variant="body2"
                            href="#"
                        >
                            Privacy Policy
                        </Link>
                        <Typography
                            sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}
                        >
                            &nbsp;•&nbsp;
                        </Typography>
                        <Link
                            color="text.secondary"
                            variant="body2"
                            href="#"
                        >
                            Terms of Service
                        </Link>
                        <Copyright />
                    </div>
                </Box>
            </Container>
        </React.Fragment>
    );
}
