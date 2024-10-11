import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Convert module URL to file path
export const greenTheme = path.resolve(__dirname, "../../resources/theme/green.jpg") ;
export const redTheme = path.resolve(__dirname, "../../resources/theme/red.jpg");
export const purpleTheme = path.resolve(__dirname, "../../resources/theme/purple.jpg");