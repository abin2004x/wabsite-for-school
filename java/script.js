var count=1
var maxcount=3

function init(){
for(let i=1;i<=maxcount;i++){
    document.getElementById("d"+i).style.display = "none";
    document.getElementById("d"+count).style.display = "block";
    document.getElementById("button-text").innerHTML = count+"/"+maxcount;
    }

}
function next(){
  if(count<maxcount){
    count=count+1
  }
  else {if(count==maxcount){
    count=1
  }}
  init()
}

function priv(){
    if(count==1){
    count=maxcount
  }
  else {
    count=count-1
  }
  init()
}
