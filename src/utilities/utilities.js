import { toPng, toSvg } from 'html-to-image';

export const gradiant_to_img = () => {
    const node = document.getElementById('gradient')
    toPng(node)
    .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'gradient.png';
        link.href = dataUrl;
        link.click();
    })
    .catch((error) => {
        alert("Error in saving Image")
        console.error('Error saving PNG:', error);
    });
}

export const copyInfo = (setImg) => {
    const info = document.getElementById('info')
    setImg('./clipart3011315.png')
    setTimeout(()=>{
        setImg('./copy_5844601.png')
    }, 2000)
    navigator.clipboard.writeText(info.innerText);
}

// export const gradiant_to_svg = (gradiant) => {
//     console.log(gradiant)

//     const node = document.getElementById('gradient')
//     toSvg(node)
//         .then((svgString) => {
//             const blob = new Blob([svgString], { type: 'image/svg+xml' });
//             const link = document.createElement('a');
//             link.download = 'gradient.svg';
//             link.href = URL.createObjectURL(blob);
//             link.click();
//         })
//         .catch((error) => {
//             console.error('Error saving SVG:', error);
//         });
// }