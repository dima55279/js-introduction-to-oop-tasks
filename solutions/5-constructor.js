// BEGIN
function getX () {
    return this.x;
}
function getY () {
    return this.y;
}
export function Point (x, y) {
    this.x = x;
    this.y = y;
    this.getX = getX;
    this.getY = getY;
}
function getBeginPoint () {
    return this.beginPoint;
}
function getEndPoint () {
    return this.endPoint;
}
export function Segment (beginPoint, endPoint) {
    this.beginPoint = new Point(beginPoint.getX(), beginPoint.getY());
    this.endPoint = new Point(endPoint.getX(), endPoint.getY());
    this.getBeginPoint = getBeginPoint;
    this.getEndPoint = getEndPoint;
}
export const reverse = (segment) => {
    return new Segment (segment.getEndPoint(), segment.getBeginPoint());
};
// END
