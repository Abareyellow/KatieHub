let enter = $('.enter');
console.log(enter);

var fileContent = $.ajax({type: "GET", url: "https://gist.githubusercontent.com/dracos/dd0668f281e685bad51479e5acaadb93/raw/6bfa15d263d6d5b63840a8e5b64e04b382fdb079/valid-wordle-words.txt", async: false}, ).responseText;

let masterList = fileContent.split('\n');
console.log(masterList)


//fileContent = jQuery.get('https://gist.githubusercontent.com/dracos/dd0668f281e685bad51479e5acaadb93/raw/6bfa15d263d6d5b63840a8e5b64e04b382fdb079/valid-wordle-words.txt').responseText;

//console.log(fileContent)
//console.log(file)
//var msg = $.ajax({type: "GET", url: "my_script.php", async: false}).resp