getCSS.onclick = () => {
    console.log('css')
  const request = new XMLHttpRequest();
  request.open("GET", "style.css");
  request.onreadystatechange = () => {
      console.log('css')
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      }
    }
  };

  request.send();
};

// getJS.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "required.js");
//   request.onreadystatechange = () => {
//     if (request.readyState === 4) {
//       if (request.status >= 200 && request.status < 300) {
//         const script = document.createElement("script");
//         script.innerHTML = request.response;
//         document.body.appendChild(script);
//       }
//     }
//   };
//   request.send();
// };

// getHTML.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "required.html");
//   request.onreadystatechange = () => {
//     if (request.readyState === 4) {
//       if (request.status >= 200 && request.status < 300) {
//         const div = document.createElement("div");
//         div.innerHTML = request.response;
//         requiredHTML.appendChild(div);
//       }
//     }
//   };
//   request.send();
// };

// getXML.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "required.xml");
//   request.onreadystatechange = () => {
//     if (request.readyState === 4) {
//       if (request.status >= 200 && request.status < 300) {
//         const dom = request.responseXML;
//         const text = dom.getElementsByTagName("waring")[0].textContent.trim();
//         const p = document.createElement("p");
//         p.innerText = text;
//         requiredXML.appendChild(p);
//       }
//     }
//   };
//   request.send();
// };

// getJSON.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open("GEt", "required.json");
//   request.onreadystatechange = () => {
//     if (request.readyState === 4) {
//       if (request.status >= 200 && request.status < 300) {
//         console.log(request.response);
//       }
//     }
//   };
//   request.send();
// };

// let n = 1;
// getPAGE1.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", `page${n + 1}.json`);
//   request.onreadystatechange = () => {
//     if (request.readyState === 4) {
//       if (request.status >= 200 && request.status < 300) {
//         const array = JSON.parse(request.response);
//         array.forEach(item => {
//           const li = document.createElement("li");
//           li.innerText = item.id;
//           xxx.appendChild(li);
//         });
//       }
//     n = n + 1;
//     }
//   };
//   request.send();
// };
