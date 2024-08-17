

// إزالة عنصر <main> من DOM
const mainElement = document.getElementById("main");
if (mainElement) {
  mainElement.remove();
}

// إنشاء عنصر <h1> وتعيينه للمتغير newHeader
const newHeader = document.createElement("h1");

// تعيين id للعنصر <h1>
newHeader.id = "victory";

// تعيين نص للعنصر <h1>
newHeader.textContent = "YOUR-NAME is the champion"; // استبدل YOUR-NAME باسمك

// إضافة العنصر <h1> إلى body
document.body.append(newHeader);
