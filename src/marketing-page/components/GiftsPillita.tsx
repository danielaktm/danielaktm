import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { experimentalStyled as styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const StyledTypography = styled(Typography)({
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
});

export default function GiftPillita() {
    const [regalosData, setRegalosData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/regalos"
                );
                const data = await response.json();
                setRegalosData(data.data);
            } catch (err) {
                console.error("Error al cargar los regalos", err);
            }
        };

        fetchData();
    }, []);

    return (
        <Container
            id="regalos"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Box
                sx={{
                    width: { sm: "100%", md: "60%" },
                    textAlign: { sm: "left", md: "center" },
                }}
            >
                <Typography
                    component="h2"
                    variant="h4"
                    gutterBottom
                    sx={{ color: "text.primary" }}
                >
                    Regalos
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: "text.secondary" }}
                >
                    Aquí van a ir los regalos ideales para consentir a tu gata.
                </Typography>
            </Box>

            <Grid
                container
                spacing={{ xs: 2, md: 4 }}
                columns={{ xs: 4, sm: 8, md: 16 }}
            >
                {regalosData.slice(0, 4).map((regalo, index) => (
                    <Grid
                        key={index}
                        size={{ xs: 1, md: 4 }}
                        sx={{
                            border: "1px solid black",
                            borderRadius: "8px",
                            padding: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center",
                            gap: "0.5rem",
                        }}
                    >
                        <CardMedia
                            component="img"
                            alt={regalo.nombre}
                            image={
                                regalo.img
                                    ? `http://localhost:3000/imagenes/${regalo.img}`
                                    : "/danielaktm/images/cat1.jpg"
                            }
                            sx={{
                                height: { sm: "auto", md: "90%" },
                                aspectRatio: { sm: "16 / 9", md: "1" },
                                objectFit: "cover",
                                borderRadius: "4px",
                            }}
                        />
                        <StyledTypography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                            textAlign="center"
                            mt="1rem"
                            sx={{
                                fontWeight: (theme) =>
                                    theme.palette.mode === "light"
                                        ? "bold"
                                        : "normal",
                            }}
                        >
                            {regalo.nombre}
                        </StyledTypography>
                    </Grid>
                ))}
            </Grid>

            <Button
                variant="contained"
                href="/danielaktm/regalos"
            >
                Ver más
            </Button>
        </Container>
    );
}
