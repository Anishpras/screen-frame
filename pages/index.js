// import domtoimage from "dom-to-image";
// import html2canvas from "html2canvas";

export default function Home() {
  // const downloadDiv = () => {
  //   var div = document.getElementById("node");
  //   // domtoimage
  //   //   .toPng(node)
  //   //   .then(function (dataUrl) {
  //   //     var img = new Image();
  //   //     img.src = dataUrl;
  //   //     document.body.appendChild(img);
  //   //   })
  //   //   .catch(function (error) {
  //   //     console.error("oops, something went wrong!", error);
  //   //   });
  //   // html2canvas(document.getElementById("node")).then(function (canvas) {
  //   //   document.body.appendChild(canvas);
  //   // });
  //   function downloadURI(uri, name) {
  //     var link = document.createElement("a");
  //     link.download = name;
  //     link.href = uri;
  //     link.click();
  //     //after creating link you should delete dynamic link
  //     //clearDynamicLink(link);
  //   }
  //   html2canvas(div, {
  //     onrendered: function (canvas) {
  //       var myImage = canvas.toDataURL("image/png");
  //       //create your own dialog with warning before saving file
  //       //beforeDownloadReadMessage();
  //       //Then download file
  //       downloadURI("data:" + myImage, "yourImage.png");
  //     },
  //   });
  // };

  return (
    <div className="w-screen h-full">
      {/* <div id="node" className="w-96 h-96 border border-red-600">
        <iframe
          src="https://www.anishprashun.me/"
          width="100%"
          height="100%"></iframe>
      </div>
      <button onClick={downloadDiv}>Download</button> */}
    </div>
  );
}
