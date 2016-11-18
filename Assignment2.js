function assignment2(rect1, rect2) {
	var xmin = Math.max(rect1.x, rect2.x); //We find the "minimum" x coord among the rectangles 
  var xmax1 = rect1.x + rect1.width; //Max X coord of rectangle 1
  var xmax2 = rect2.x + rect2.width; //Max X coord of rectangle 2
  var xmax = Math.min(xmax1, xmax2); //Maximun X coord that we can have in order to have an intersection
  if (xmax > xmin) { //We check if one rectangle has its X coord between the other rectangle
     var ymax = Math.min(rect1.y, rect2.y); //We find the "max" y coord among the rectangles
     var ymin1 = rect1.y - rect1.height; //Min Y coord of rectangle 1
     var ymin2 = rect2.y - rect2.height; //Min Y coord of rectangle 2
     var ymin = Math.max(ymin1, ymin2); //Min Y coord that we can have in order to have an intersection
     if (ymax > ymin) { //We check if one rectangle has its Y coord between the other rectangle
        return true; //Having the 2 cases we can affirm that there is an intersection between the two give rectangles
     }
  }
  return false;
}