export const pageTitle = (title) => {
  return (document.title =
    title + " - Colores Tree Service | Aromas, CA");
};

const base = typeof import.meta !== "undefined" && import.meta.env && import.meta.env.BASE_URL ? import.meta.env.BASE_URL : "/";
export const assetUrl = (path) => {
  const p = path.startsWith("/") ? path.slice(1) : path;
  return base + (base.endsWith("/") ? p : "/" + p);
};
