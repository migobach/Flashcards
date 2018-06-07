let current_card = ""

const flashcards = [
  { question: "What is a string", answer: "less than 250 charachters" },
  { question: "Here is a question", answer: "Here is an answer."}
]
let card = flashcards.length - 1


$('#newCard').on('click', function() {
  current_card = flashcards[Math.floor(Math.random() * flashcards.length)]
  $('#showCard').text(current_card.question)
})

$('#flipCard').on('click', function() {
  if $('#showCard')
})


function add_flashcard() {
  var q = $('#front').val();
  var a = $('#back').val();
  flashcards.push( { q, a } )
  alert(`Added at index ${card + 1}`);
  card++;
  debugger

}






// let x = 0;
// const array = Array();

// function add_element_to_array()
// {
//  array[x] = document.getElementById("text1").value;
//  alert(`Element: ${array[x]} Added at index ${x}`);
//  x++;
//  document.getElementById("text1").value = "";
// }

// function display_array()
// {
//    let e = "<hr/>";   
    
//    for (let y=0; y<array.length; y++)
//    {
//      e += `Element ${y} = ${array[y]}<br/>`;
//    }
//    document.getElementById("Result").innerHTML = e;
// }