import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));

const StyledTypography = styled(Typography)({
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
});

export default function GiftPillita() {
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
                    Aqui van a ir los regalos que le pueden dar a la pilla
                </Typography>
            </Box>
            <Grid
                container
                spacing={{ xs: 2, md: 4 }}
                columns={{ xs: 4, sm: 8, md: 16 }}
            >
                <Grid size={{ xs: 1, md: 4 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={"/danielaktm/images/cat1.jpg"}
                        sx={{
                            height: { sm: "auto", md: "90%" },
                            aspectRatio: { sm: "16 / 9", md: "1" },
                        }}
                    />
                    <StyledTypography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                    >
                        Ejemplo 1
                    </StyledTypography>
                </Grid>
                <Grid size={{ xs: 1, md: 4 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={"/danielaktm/images/cat1.jpg"}
                        sx={{
                            height: { sm: "auto", md: "90%" },
                            aspectRatio: { sm: "16 / 9", md: "1" },
                        }}
                    />
                    <StyledTypography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                    >
                        Ejemplo 2
                    </StyledTypography>
                </Grid>
                <Grid size={{ xs: 1, md: 4 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={"/danielaktm/images/cat1.jpg"}
                        sx={{
                            height: { sm: "auto", md: "90%" },
                            aspectRatio: { sm: "16 / 9", md: "1" },
                        }}
                    />
                    <StyledTypography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                    >
                        Ejemplo 3
                    </StyledTypography>
                </Grid>
                <Grid size={{ xs: 1, md: 4 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={"/danielaktm/images/cat1.jpg"}
                        sx={{
                            height: { sm: "auto", md: "90%" },
                            aspectRatio: { sm: "16 / 9", md: "1" },
                        }}
                    />
                    <StyledTypography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                    >
                        Ejemplo 4
                    </StyledTypography>
                </Grid>
            </Grid>
            <Button
                variant="contained"
                href="/danielaktm/regalos"
            >
                Ver mas
            </Button>
        </Container>
    );
}
