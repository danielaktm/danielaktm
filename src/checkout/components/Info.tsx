import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const products = [
    {
        name: "Plan Profesional",
        desc: "Suscripcion mensual",
        price: "$15.00",
    },
    {
        name: "Soporte dedicado",
        desc: "Incluido en el plan Profesional",
        price: "Gratis",
    },
    {
        name: "Hardware",
        desc: "Dispositivos necesarios para el desarrollo",
        price: "$69.99",
    },
    {
        name: "Plantilla de página",
        desc: "Licencia",
        price: "$49.99",
    },
];

interface InfoProps {
    totalPrice: string;
}

export default function Info({ totalPrice }: InfoProps) {
    return (
        <React.Fragment>
            <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary" }}
            >
                Total
            </Typography>
            <Typography
                variant="h4"
                gutterBottom
            >
                {totalPrice}
            </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem
                        key={product.name}
                        sx={{ py: 1, px: 0 }}
                    >
                        <ListItemText
                            sx={{ mr: 2 }}
                            primary={product.name}
                            secondary={product.desc}
                        />
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: "medium" }}
                        >
                            {product.price}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    );
}
