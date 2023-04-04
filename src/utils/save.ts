import JSZip from 'jszip'
import FileSaver from 'file-saver'
 
export default function toZip(imgSrcList: any, fileName: any) {
	if (imgSrcList.length > 1) {  // 用压缩包的形式保存多张图片
		let zip = new JSZip();  // 实例化一个压缩文件对象
		let imgFolder = zip.folder(fileName);  // 新建一个图片文件夹用来存放图片，参数为文件名
		for(let i=0; i<imgSrcList.length; i++){  // 向文件夹中添加图片
			let src = imgSrcList[i];
			let tempImage = new Image();
			tempImage.src = src;
			tempImage.crossOrigin = "*";
			tempImage.onload = ()=> {
				imgFolder?.file((i+1)+'.jpg', getBase64Image(tempImage).substring(22), { base64: true })
			}
		}
		setTimeout(()=>{
			zip.generateAsync({ type: 'blob' }).then( function(content) {
				FileSaver.saveAs(content, 'images.zip')
			})
		},3000)
	}
  else if (imgSrcList.length === 1) {  // 直接保存单张图片
		console.log("single");
		let src = imgSrcList[0];
		FileSaver.saveAs(src, "image.jpg");
	}
}
 
function getBase64Image(img: any) {
	let canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	let ctx = canvas.getContext("2d");
	ctx?.drawImage(img, 0, 0, img.width, img.height);
	let ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
	let dataURL = canvas.toDataURL("image/"+ext);
	return dataURL;
}

 