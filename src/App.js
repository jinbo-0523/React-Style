import { InlineStyle } from "./Components/InlineStyle";
import { CssModules } from "./Components/CssModules";
import "./styles.css";
import { StyledJsx } from "./Components/StyledJsx";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}
