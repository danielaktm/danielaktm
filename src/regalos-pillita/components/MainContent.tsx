import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const SyledCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: 0,
    height: "100%",
    backgroundColor: alpha(theme.palette.background.default, 0.4),
    "&:hover": {
        backgroundColor: "transparent",
        cursor: "pointer",
    },
    "&:focus-visible": {
        outline: "3px solid",
        outlineColor: "hsla(210, 98%, 48%, 0.5)",
        outlineOffset: "2px",
    },
}));

const SyledCardContent = styled(CardContent)({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: 16,
    flexGrow: 1,
    "&:last-child": {
        paddingBottom: 16,
    },
});

type Regalo = {
    nombre: string;
    descripcion: string;
    img?: string;
};

export default function MainContent() {
    const [regalosData, setRegalosData] = useState<Regalo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/regalos"
                );
                if (!response.ok) {
                    throw new Error(
                        `Error fetching data: ${response.statusText}`
                    );
                }
                const data = await response.json();
                setRegalosData(data.data);
                setLoading(false);
                console.log(data);

                if (data && data.data) {
                    setRegalosData(data.data);
                } else {
                    setError("No se encontraron regalos.");
                }
                setLoading(false);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Error desconocido");
                }
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Typography>Cargando regalos...</Typography>;
    }

    if (error) {
        return <Typography>Error: {error}</Typography>;
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div>
                <Typography
                    variant="h1"
                    gutterBottom
                >
                    Regalos para Gatos
                </Typography>
                <Typography>
                    Aquí están los posibles regalos para la pilla.
                </Typography>
            </div>
            <Grid
                container
                spacing={2}
                columns={12}
            >
                {regalosData.map((regalo, index) => (
                    <Grid
                        key={index}
                        size={{ xs: 12, md: 4 }}
                    >
                        <SyledCard
                            variant="outlined"
                            sx={{ height: "100%" }}
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
                                    height: { sm: "auto", md: "50%" },
                                    aspectRatio: { sm: "16 / 9", md: "" },
                                }}
                            />
                            <SyledCardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                >
                                    {regalo.nombre}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {regalo.descripcion}
                                </Typography>
                            </SyledCardContent>
                        </SyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
