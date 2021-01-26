$("#signin").click(function (e) {
    e.preventDefault();
    
    var your_name=$("#your_name").val();
    // console.log(value);
    var your_pass=$("#your_pass").val();
    // console.log(value);
    
    
    $.ajax({
      method: "POST",
      url: "http://localhost/server/",
      data: { name: your_name, password: your_pass }
    })
      .done(function( msg ) {
        location.reload();
      });


    
});
