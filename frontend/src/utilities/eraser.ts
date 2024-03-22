

import { ElementType } from "../types";


 const eraseElements = (
  elements: ElementType[],
  mouseX: number,
  mouseY: number,
  eraserSize: number
 ) => {
     
  const updatedElements = elements.filter((element) => {
    // Check if the element intersects with the eraser cursor
    if (element.type === "pencil" && element.points) {
      // For pencil elements, check each point if it's within the eraser size range
      const remainingPoints = element.points.filter(
        ({ x, y }) => distance(mouseX, mouseY, x, y) > eraserSize
      );
      return remainingPoints.length > 0; // Keep the element if any points remain
    } else {
      // For other element types, check if any part of the element is within the eraser size range
      // You may need to adjust this logic based on your specific requirements
      return !isPointWithinElement(element, mouseX, mouseY, eraserSize);
    }
  });

  return updatedElements;
};

const distance = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

const isPointWithinElement = (
  element: ElementType,
  x: number,
  y: number,
  eraserSize: number
) => {
  // Check if the point is within the bounding box of the element
  return (
    x >= element.x1 - eraserSize &&
    x <= element.x2 + eraserSize &&
    y >= element.y1 - eraserSize &&
    y <= element.y2 + eraserSize
  );
};

export default eraseElements;
