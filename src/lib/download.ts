export const handleDownload = async (
  url: string,
  fileName: string,
  onStart?: () => void,
  onEnd?: () => void
) => {
  if (onStart) onStart();

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}`);
    const blob = await response.blob();
    const objectUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(objectUrl);
  } catch (error) {
    console.error("Download failed:", error);
  } finally {
    if (onEnd) onEnd();
  }
};
