// $(document).ready( function() {


let current_card = ""

const flashcards = [
  { question: "What is a string", answer: "less than 250 charachters" },
  { question: "Here is a question", answer: "Here is an answer."}
]
$.each(flashcards, function(index, flashcards) {
  $('#card_options').append('<option>' + flashcards.question + '</option>');
  $('#card_options2').append('<option>' + flashcards.answer + '</option>');
});

function add_flashcard() {
  var q = $('#front').val();
  var a = $('#back').val();
  flashcards.push( { question: q, answer: a} )
  $('#card_options').append('<option>' + q + '</option>');
  $('#card_options2').append('<option>' + a + '</option>');
}



$('#newCard').on('click', function() {
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
//below nee

$('#deleteCard').click(function() {
  // const index = Array.from(el.parentElement.chidren).indexOf(el)
  // debugger
})

// onst index = Array.from(el.parentElement.children).indexOf(el)

$('#editCard').click(function () {
  //put in the edit feature
})



