var zip = require("./zip");

module.exports = function (gj, options) {
  const zipName = (options && options.folder) || "download";
  options.folder = false;

  zip(gj, options).then((b64Data) => {
    const blob = b64toBlob(b64Data, "application/zip");
    const blobUrl = URL.createObjectURL(blob);

    const anchor = document.createElement("a");

    anchor.download = `${zipName}.zip`;
    anchor.href = blobUrl;
    anchor.dataset.downloadurl = [
      "application/zip",
      anchor.download,
      anchor.href,
    ].join(":");
    anchor.click();

    URL.revokeObjectURL(blobUrl);
  });
};

const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};
