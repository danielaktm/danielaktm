import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import MuiChip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const items = [
    { title: "PillaCute", image: "/danielaktm/images/PillaCute.jpeg" },
    { title: "PillaDiosa1", image: "/danielaktm/images/PillaDiosa1.jpeg" },
    { title: "PillaDiosa2", image: "/danielaktm/images/PillaDiosa2.jpeg" },
    { title: "PillaDiosa3", image: "/danielaktm/images/PillaDiosa3.jpeg" },
    { title: "PillaFlor", image: "/danielaktm/images/PillaFlor.jpeg" },
    {
        title: "PillaInvocando",
        image: "/danielaktm/images/PillaInvocando.jpeg",
    },
    { title: "PillaLoca1", image: "/danielaktm/images/PillaLoca1.jpeg" },
    { title: "PillaLoca2", image: "/danielaktm/images/PillaLoca2.jpeg" },
    { title: "PillaMimir1", image: "/danielaktm/images/PillaMimir1.jpeg" },
    { title: "PillaMimir2", image: "/danielaktm/images/PillaMimir2.jpeg" },
    { title: "PillaMimir3", image: "/danielaktm/images/PillaMimir3.jpeg" },
    { title: "PillaMimir4", image: "/danielaktm/images/PillaMimir4.jpeg" },
    { title: "PillaMimir5", image: "/danielaktm/images/PillaMimir5.jpeg" },
    { title: "PillaMimir6", image: "/danielaktm/images/PillaMimir6.jpeg" },
    { title: "PillaMimir7", image: "/danielaktm/images/PillaMimir7.jpeg" },
    {
        title: "PillaRecienDespierta",
        image: "/danielaktm/images/PillaRecienDespierta.jpeg",
    },
];

interface ChipProps {
    selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
    variants: [
        {
            props: ({ selected }) => selected,
            style: {
                background:
                    "linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))",
                color: "hsl(0, 0%, 100%)",
                borderColor: theme.palette.primary.light,
                "& .MuiChip-label": {
                    color: "hsl(0, 0%, 100%)",
                },
                ...theme.applyStyles("dark", {
                    borderColor: theme.palette.primary.dark,
                }),
            },
        },
    ],
}));

interface MobileLayoutProps {
    selectedItemIndex: number;
    handleItemClick: (index: number) => void;
    selectedFeature: (typeof items)[0];
}

export function MobileLayout({
    selectedItemIndex,
    handleItemClick,
    selectedFeature,
}: MobileLayoutProps) {
    if (!items[selectedItemIndex]) {
        return null;
    }

    return (
        <Box
            id="pillita"
            sx={{
                display: { xs: "flex", sm: "none" },
                flexDirection: "column",
                gap: 2,
            }}
        >
            <Box sx={{ display: "flex", gap: 2, overflow: "auto" }}>
                {items.map(({ title }, index) => (
                    <Chip
                        size="medium"
                        key={index}
                        label={title}
                        onClick={() => handleItemClick(index)}
                        selected={selectedItemIndex === index}
                    />
                ))}
            </Box>
            <Card variant="outlined">
                <Box
                    sx={(theme) => ({
                        mb: 2,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: 280,
                        backgroundImage: "var(--items-imageLight)",
                        ...theme.applyStyles("dark", {
                            backgroundImage: "var(--items-imageDark)",
                        }),
                    })}
                    style={
                        items[selectedItemIndex]
                            ? ({
                                  "--items-imageLight":
                                      items[selectedItemIndex].image,
                                  "--items-imageDark":
                                      items[selectedItemIndex].image,
                              } as any)
                            : {}
                    }
                />
                <Box sx={{ px: 2, pb: 2 }}>
                    <Typography
                        gutterBottom
                        sx={{ color: "text.primary", fontWeight: "medium" }}
                    >
                        {selectedFeature.title}
                    </Typography>
                </Box>
            </Card>
        </Box>
    );
}

export default function Pillita() {
    return (
        <Container
            id="pillita"
            sx={{
                py: { xs: 8, sm: 16 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(2, 1fr)",
                        sm: "repeat(3, 1fr)",
                        md: "repeat(4, 1fr)",
                    },
                    gap: 0,
                    width: "100%",
                }}
            >
                {items.map(({ image }, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: "relative",
                            overflow: "visible",
                            aspectRatio: "1",
                            "&:hover img": {
                                transform: {
                                    xs: "scale(1.2)",
                                    sm: "scale(1.25)",
                                    md: "scale(1.5)",
                                },
                                zIndex: 10,
                                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.4)",
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={image}
                            alt={`Collage image ${index}`}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: {
                                    xs: "transform 0.5s ease-in-out",
                                    sm: "transform 0.6s ease-in-out",
                                    md: "transform 0.8s ease-in-out",
                                },
                                position: "relative",
                                zIndex: 1,
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Container>
    );
}
