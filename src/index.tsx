import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./app/providers/ThemeProvider";
import "shared/config/i18n/i18n";
import {ErrorBoundary} from "./app/providers/errorBoundary";
// eslint-disable-next-line import/order
import {StoreProvider} from "app/providers/StoreProvider";
import App from "./app/App";
import "app/styles/index.scss";

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root")
);
