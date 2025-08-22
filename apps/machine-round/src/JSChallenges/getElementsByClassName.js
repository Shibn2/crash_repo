/**
 * @param {Element} element
 * @param {string} classNames
 * @return {Array<Element>}
 */
export default function getElementsByClassName(element, classNames) {
  const childrens = element.children;

  const elems = [];
  classNames = classNames.split(" ");
  function domTreeIteration(childrens, classNames) {
    for (const children of childrens) {
      if (children.hasChildNodes()) {
        domTreeIteration(children.children, classNames);
      }
      console.log(
        "[...children.classList]",
        [...children.classList],
        "classNames",
        classNames
      );
      const childClassList = [...children.classList];
      const isAllClassPresentInChild = childClassList.every((clas) =>
        classNames.includes(clas)
      );

      if (isAllClassPresentInChild && childClassList?.length) {
        elems.push(children);
      }
    }
  }

  domTreeIteration(childrens, classNames);
  console.log("elems--->", elems);
  return elems;
}
