/*
Create a function that returns the area of the overlap between two rectangles. The function will receive two rectangles, each with the coordinates of two of its opposite angles.

Examples
overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
  [{ x: 3, y: 2 }, { x: 6, y: 7 }]
) ➞ 6

overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
) ➞ 10

overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
) ➞ 5

Notes
Coordinates can be positive or negative integers.
*/

function overlappingRectangles(rec1, rec2) {
  //your code
  if (
    rec1[0].x > rec2[1].x ||
    rec2[0].x > rec1[1].x ||
    rec1[0].y > rec2[1].y ||
    rec2[0].y > rec1[1].y
  ) {
    return 0;
  }
  const XYStart = getXYStart(rec1[0], rec2[0]);
  const XYEnd = getXYEnd(rec1[1], rec2[1]);
  return caluclateArea([XYStart, XYEnd]);
}

function getXYStart(rec1, rec2) {
  const getX = rec1.x > rec2.x ? rec1.x : rec2.x;
  const getY = rec1.y > rec2.y ? rec1.y : rec2.y;
  return { x: getX, y: getY };
}
function getXYEnd(rec1, rec2) {
  const getX = rec1.x < rec2.x ? rec1.x : rec2.x;
  const getY = rec1.y < rec2.y ? rec1.y : rec2.y;
  return { x: getX, y: getY };
}
function caluclateArea(rec) {
  console.log("y2: " + rec[1].y);
  console.log("y1: " + rec[0].y);
  console.log("x1: " + rec[1].x);
  console.log("x2: " + rec[0].x);
  return (rec[1].y - rec[0].y) * (rec[1].x - rec[0].x);
}

exports.solution = overlappingRectangles;
