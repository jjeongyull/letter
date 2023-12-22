$(document).on('click', '#btn', function(){
  let name = $('#name').val();

  if(name === "20231210"){
    $('#div').empty();
    $('#div').load('letter.html', () => {

    });
  }else{
    alert('틀렸다');
    return;
  }
});