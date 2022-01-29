export let addHTMLAttributes = function (htmlElement, attributes) {
  for (let attributeValue in attributes)
    htmlElement[attributeValue] = attributes[attributeValue];
  return htmlElement;
}

export let addChildElements =function (htmlElement, children) {
  children.forEach((child) => {
    // checks whether to append the child as a text or an element node
    typeof child === "string"
      ? htmlElement.appendChild(document.createTextNode(child))
      : htmlElement.appendChild(child);
  });
  return htmlElement;
}
export let createHTMLElement = function (elementTagName, attributes, ...children) {
  let htmlElement = document.createElement(elementTagName);
  htmlElement = addHTMLAttributes(htmlElement, attributes);
  htmlElement = addChildElements(htmlElement, children);
  return htmlElement;
}
export let getfullDayTime = function (DataMillSeconds) {
    let dt = new Date(DataMillSeconds);
    let dateObj ={
        Date :`${dt.getDate()}`,
        Month :`${dt.getMonth()}`,
        FullYear :`${dt.getFullYear()}`,
        Hours :`${dt.getHours()}`,
        Minutes :`${ dt.getMinutes()}`,
        Seconds :`${dt.getSeconds()}`
    }
    return dateObj;
  }