//var map =[
//         "####################",
//         "#                # #",
//         "# ############## # #",
//         "# # # #       ## # #",
//         "# # # # # ###### # #",
//         "# # # # # # # ## # #",
//         "# # # # # # #    # #",
//         "# # ##### # # #### #",
//         "#                  #",
//         "####################",
//        ];
     
     
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
     
function emptyChamber(x, y){
    var chamber = [Array(x+1).join("#")];
    for(var i=1; i < y-1; i++){
        chamber.push("#"+Array(x-1).join(" ")+"#");
    }
    chamber.push(Array(x+1).join("#"));
    return chamber;
        
}               
function random(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function divideChamber(rect, maze){
    if(rect.x2 - 2 - rect.x1 - 2 <0){
        
        return;
    }
    if(rect.y2 - 2 - rect.y1 - 2 <0){
        return;
    }
   var x=  random(rect.x1+2, rect.x2 -2);
   var y=  random(rect.y1+2, rect.y2 -2);
   console.log("x "+x+"  Y "+y);
   for(var i = rect.x1; i <rect.x2; i++){
       
       maze[y] = maze[y].replaceAt(i, "#");
   }
   for(var i = rect.y1; i <rect.y2; i++){
     
       maze[i]= maze[i].replaceAt(x, "#");
   }
   var door = random(rect.x1+1, x-1);
   maze[y] = maze[y].replaceAt(door, " ");
   door = random(x+1, rect.x2-1);
   maze[y] = maze[y].replaceAt(door, " ");
   door = random(rect.y1+1, y-1);
   maze[door] = maze[door].replaceAt(x, " ");
   door = random(y+1, rect.y2-1);
   maze[door] = maze[door].replaceAt(x, " ");
   
   divideChamber({x1:rect.x1, x2: x, y1: rect.y1, y2: y}, maze);
   divideChamber({x1:x, x2: rect.x2, y1: rect.y1, y2: y},maze);
   divideChamber({x1:x, x2: rect.x2, y1: y, y2: rect.y2},maze);
   divideChamber({x1:rect.x1, x2: x, y1: y, y2: rect.y2},maze);
   
   
}
map = emptyChamber(22,10);
divideChamber({x1: 1, x2: 21, y1:1, y2:9}, map);


       