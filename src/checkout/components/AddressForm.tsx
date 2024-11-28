import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";

const FormGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
}));

export default function AddressForm() {
    return (
        <Grid
            container
            spacing={3}
        >
            <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel
                    htmlFor="first-name"
                    required
                >
                    Primer Nombre
                </FormLabel>
                <OutlinedInput
                    id="first-name"
                    name="first-name"
                    type="name"
                    placeholder="John"
                    autoComplete="first name"
                    required
                    size="small"
                />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel
                    htmlFor="last-name"
                    required
                >
                    Primer Apellido
                </FormLabel>
                <OutlinedInput
                    id="last-name"
                    name="last-name"
                    type="last-name"
                    placeholder="Snow"
                    autoComplete="last name"
                    required
                    size="small"
                />
            </FormGrid>
            <FormGrid size={{ xs: 12 }}>
                <FormLabel
                    htmlFor="address1"
                    required
                >
                    Direccion 1
                </FormLabel>
                <OutlinedInput
                    id="address1"
                    name="address1"
                    type="address1"
                    placeholder="Street name and number"
                    autoComplete="shipping address-line1"
                    required
                    size="small"
                />
            </FormGrid>
            <FormGrid size={{ xs: 12 }}>
                <FormLabel htmlFor="address2">Direccion 2</FormLabel>
                <OutlinedInput
                    id="address2"
                    name="address2"
                    type="address2"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    autoComplete="shipping address-line2"
                    required
                    size="small"
                />
            </FormGrid>
            <FormGrid size={{ xs: 6 }}>
                <FormLabel
                    htmlFor="city"
                    required
                >
                    Region
                </FormLabel>
                <OutlinedInput
                    id="city"
                    name="city"
                    type="city"
                    placeholder="New York"
                    autoComplete="City"
                    required
                    size="small"
                />
            </FormGrid>
            <FormGrid size={{ xs: 6 }}>
                <FormLabel
                    htmlFor="comuna"
                    required
                >
                    Comuna
                </FormLabel>
                <OutlinedInput
                    id="comuna"
                    name="comuna"
                    type="comuna"
                    placeholder="NY"
                    autoComplete="comuna"
                    required
                    size="small"
                />
            </FormGrid>
            <FormGrid size={{ xs: 6 }}>
                <FormLabel
                    htmlFor="zip"
                    required
                >
                    Codigo Postal
                </FormLabel>
                <OutlinedInput
                    id="zip"
                    name="zip"
                    type="zip"
                    placeholder="12345"
                    autoComplete="shipping postal-code"
                    required
                    size="small"
                />
            </FormGrid>
            <FormGrid size={{ xs: 6 }}>
                <FormLabel
                    htmlFor="country"
                    required
                >
                    Pais
                </FormLabel>
                <OutlinedInput
                    id="country"
                    name="country"
                    type="country"
                    placeholder="Chile"
                    autoComplete="shipping country"
                    required
                    size="small"
                />
            </FormGrid>
            <FormGrid size={{ xs: 12 }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="saveAddress"
                            value="yes"
                        />
                    }
                    label="Usar direccion para esta compra"
                />
            </FormGrid>
        </Grid>
    );
}
