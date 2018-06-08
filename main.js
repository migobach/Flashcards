// $(document).ready( function() {


let current_card = ""

const flashcards = [
  { question: "What is a string", answer: "less than 250 charachters" },
  { question: "Here is a question", answer: "Here is an answer."}
]



function add_flashcard() {
  var q = $('#front').val();
  var a = $('#back').val();
  flashcards.push( { question: q, answer: a} )
}



$('#newCard').on('click', function() {
  // window.location.reload()
  current_card = flashcards[Math.floor(Math.random() * flashcards.length)]
  $('#showCard').text(current_card.question)
})

$('#flipCard').click(function() {
  if ($('#showCard').text() == current_card.question) {
    $('#showCard').text(current_card.answer)
  } else {
    $('#showCard').text(current_card.question)
  }
})




