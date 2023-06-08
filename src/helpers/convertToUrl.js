export const convertToUrl = (base64Image) => {
    if (base64Image) {
        const base64Data = base64Image.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
        const byteCharacters = atob(base64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
            const slice = byteCharacters.slice(offset, offset + 1024);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: 'image/jpeg' }); // Replace 'image/jpeg' with the appropriate MIME type
        return URL.createObjectURL(blob);
    }
}
