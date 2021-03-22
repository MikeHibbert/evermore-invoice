export default function magicDownload(data, fileName, ContentType) {
    var blob = data;

    if(typeof blob != Blob) {
        blob = new Blob([data], {
            type: ContentType,
        });
    }

    // create hidden link
    var element = document.createElement("a");
    document.body.appendChild(element);
    element.setAttribute("href", window.URL.createObjectURL(blob, {type: ContentType}));
    element.setAttribute("download", fileName);

    element.style.display = "";

    element.click();

    document.body.removeChild(element);
}