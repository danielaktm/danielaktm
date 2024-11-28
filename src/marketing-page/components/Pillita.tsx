import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MuiChip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

import PetsIcon from "@mui/icons-material/Pets";

const items = [
    {
        icon: <PetsIcon />,
        title: "Ejemplo 1",
        description:
            "This item could provide a snapshot of the most important metrics or data points related to the product.",
        imageLight: `url("/danielaktm/images/cat1.jpg")`,
        imageDark: `url("/danielaktm/images/cat1.jpg")`,
    },
    {
        icon: <PetsIcon />,
        title: "Ejemplo 2",
        description:
            "This item could provide information about the mobile app version of the product.",
        imageLight: `url("/danielaktm/images/cat1.jpg")`,
        imageDark: `url("/danielaktm/images/cat1.jpg")`,
    },
    {
        icon: <PetsIcon />,
        title: "Ejemplo 3",
        description:
            "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
        imageLight: `url("/danielaktm/images/cat1.jpg")`,
        imageDark: `url("/danielaktm/images/cat1.jpg")`,
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
                                      items[selectedItemIndex].imageLight,
                                  "--items-imageDark":
                                      items[selectedItemIndex].imageDark,
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
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mb: 1.5 }}
                    >
                        {selectedFeature.description}
                    </Typography>
                </Box>
            </Card>
        </Box>
    );
}

export default function Pillita() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const handleItemClick = (index: number) => {
        setSelectedItemIndex(index);
    };

    const selectedFeature = items[selectedItemIndex];

    return (
        <Container
            id="pillita"
            sx={{ py: { xs: 8, sm: 16 } }}
        >
            <Box sx={{ width: { sm: "100%", md: "60%" } }}>
                <Typography
                    component="h2"
                    variant="h2"
                    gutterBottom
                    sx={{ color: "text.primary" }}
                >
                    Pillita
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row-reverse" },
                    gap: 2,
                }}
            >
                <div>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            flexDirection: "column",
                            gap: 2,
                            height: "100%",
                        }}
                    >
                        {items.map(({ icon, title, description }, index) => (
                            <Box
                                key={index}
                                component={Button}
                                onClick={() => handleItemClick(index)}
                                sx={[
                                    (theme) => ({
                                        p: 2,
                                        height: "100%",
                                        width: "100%",
                                        "&:hover": {
                                            backgroundColor:
                                                theme.palette.action.hover,
                                        },
                                    }),
                                    selectedItemIndex === index && {
                                        backgroundColor: "action.selected",
                                    },
                                ]}
                            >
                                <Box
                                    sx={[
                                        {
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "left",
                                            gap: 1,
                                            textAlign: "left",
                                            textTransform: "none",
                                            color: "text.secondary",
                                        },
                                        selectedItemIndex === index && {
                                            color: "text.primary",
                                        },
                                    ]}
                                >
                                    {icon}

                                    <Typography variant="h6">
                                        {title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <MobileLayout
                        selectedItemIndex={selectedItemIndex}
                        handleItemClick={handleItemClick}
                        selectedFeature={selectedFeature}
                    />
                </div>
                <Box
                    sx={{
                        display: { xs: "none", sm: "flex" },
                        width: { xs: "100%", md: "70%" },
                        height: "var(--items-image-height)",
                    }}
                >
                    <Card
                        variant="outlined"
                        sx={{
                            height: "100%",
                            width: "100%",
                            display: { xs: "none", sm: "flex" },
                            pointerEvents: "none",
                        }}
                    >
                        <Box
                            sx={(theme) => ({
                                m: "auto",
                                width: 560,
                                height: 500,
                                backgroundSize: "cover",
                                backgroundImage: "var(--items-imageLight)",
                                ...theme.applyStyles("dark", {
                                    backgroundImage: "var(--items-imageDark)",
                                }),
                            })}
                            style={
                                items[selectedItemIndex]
                                    ? ({
                                          "--items-imageLight":
                                              items[selectedItemIndex]
                                                  .imageLight,
                                          "--items-imageDark":
                                              items[selectedItemIndex]
                                                  .imageDark,
                                      } as any)
                                    : {}
                            }
                        />
                    </Card>
                </Box>
            </Box>
        </Container>
    );
}