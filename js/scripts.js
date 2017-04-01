var triangle1Area = getTriangleArea(10,15),
triangle2Area = getTriangleArea(2,3),
triangle3Area = getTriangleArea(10,2);
function getTriangleArea(a, h) {
	if (a <= 0) {
		console.log('Nieprawidłowe dane')
	} else if (h <= 0) {
		console.log('Nieprawidłowe dane')
	}
	return a * h / 2
}
console.log( getTriangleArea(10,6), triangle1Area, triangle2Area, triangle3Area);

