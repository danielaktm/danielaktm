import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import TagManager from "react-gtm-module";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBar from "./components/AppAppBar";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pillita from "./components/Pillita";
import Precios from "./components/Precios";

const tagManagerArgs = {
    gtmId: "GTM-M72PBQJ7",
};

TagManager.initialize(tagManagerArgs);

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />

            <AppAppBar />
            <Hero />
            <div>
                <Divider />
                <Pillita />
                <Divider />
                <Precios />
                <Divider />
                <FAQ />
                <Divider />
                <Footer />
            </div>
        </AppTheme>
    );
}
