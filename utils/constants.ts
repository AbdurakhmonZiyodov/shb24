export const genImage = async (code: string) => {
  const baseUrl = `https://ik.imagekit.io/z6k3ktb71/${code}`;

  let format = "";
  try {
    const image = await fetch(baseUrl);
    const blob = await image.blob();
    format = blob.type.split("/")[1].toLowerCase();
  } catch (error) {
    console.error("Rasimni yuklab olmoqda xatolik yuz berdi:", error);
  }

  return {
    format,
    baseUrl,
  };
};
