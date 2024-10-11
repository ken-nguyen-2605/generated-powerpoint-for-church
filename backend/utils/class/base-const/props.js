import path from "path";
import { fileURLToPath } from 'url';
// Convert module URL to file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const layoutProps = {
  name: "Church",
  width: 13.3334645669,
  height: 7.5,
};
export const moiCacEmQuyProps = {
  path: path.resolve(__dirname, "../../resources/images/moiCacEmQuy.jpg"),
  x: 6.22440945,
  y: 0.208661417,
  w: 5.19291339,
  h: layoutProps.height - 2 * 0.208661417,
};
export const tinMungProps = {
  path: path.resolve(__dirname, "../../resources/images/tinMung.png"),
  x: 1.65354331,
  y: 0.334645669,
  w: 7.16929134,
  h: 6.83464567,
};

export const logoXuDoanProps = {
  path: path.resolve(__dirname, "../../resources/images/logoXuDoan.png"),
  x: 0.7716535433,
  y: 0.3622047244,
  w: 2.3307086614,
  h: 2.3307086614,
};
export const namMucVuProps = {
  path: path.resolve(__dirname, "../../resources/images/namMucVu2024.png"),
  x: layoutProps.width - 3.4173228346,
  y: 0,
  w: 3.4173228346,
  h: 3.4173228346,
};

export const sectionOfTitleProps = {
  x: 0.8307086614,
  y: 2.7913385827,
  w: "20%",
  h: 0.842519685,
  color: "FFFFFF",
  fontFace: "Times New Roman",
  fontSize: 44,
  bold: true,
  align: "left",
  valign: "top",
};
