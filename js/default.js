$(document).ready(function(){

  $("#offer_ride_form").submit(function() {

    alert('now offer ride');

    var data = {
      'person_name': $('#person_name').val(),
      'departure': $('#departure').val(),
      'arrival': $('#arrival').val(),
      'chandigarh': $('#chandigarh').val(),
      'departure_date': $('#departure_date').val(),
      'return_date': $('#return_date').val(),
      'stopovers': $('#stopovers').val(),
      'price': $('#price').val(),
      'ride_detail': $('#ride_detail').val(),
      'no_of_seats': $('#no_of_seats').val(),
      'max_luggage_size': $('#max_luggage_size').val(),
      'leave_at': $('#leave_at').val(),
      'detaur': $('#detaur').val()
      };

    $.ajax({
          type: 'GET',
          url: 'http://goyaar.testingwebsitedesign.com/saveApiRide',
          crossDomain: true,
          data: data,
          cache: false,
          datatype: 'jsonp',

          success: function(data) {
          alert('Data Added');
          }
        });

    return false;
  });



$("#find_ride_form").submit(function() {

    alert('now ride form');

    $('.custom-div').empty();

    var data = {
      'departure': $('#departure').val(),
      'arrival': $('#arrival').val(),
      };

    $.ajax({
          type: 'GET',
          url: 'http://goyaar.testingwebsitedesign.com/fetchApiRideData',
          crossDomain: true,
          data: data,
          cache: false,
          datatype: 'jsonp',

          success: function(data) {
          parsedData = $.parseJSON(data);
          str = '';
          $.each(parsedData, function(index, value) {
              //$("#servers").text($("#servers").text() + " " + value.servername);
              //alert(value.person_name);
               str += '<div class="col-sm-6 custom-list"><span id="date">'+value.departure_date+'<p></p></span><br><span id="label">Price : </span><span id="price">'+value.price+'</span><br><span id="label">Person Name : </span><span id="person-name">'+value.person_name+'</span><br><span id="label">Departure : </span><span id="departure">'+value.departure+'</span><br><span id="label">Arrival : </span><span id="arrival">'+value.arrival+'</span><br><span id="label">Stoppovers : </span><span id="stoppovers">'+value.stopovers+'</span><br><span id="label">Max Luggage Size : </span><span id="max-luggage-size">'+value.max_luggage_size+'</span><br><span id="label">Seats : </span><span id="seats">'+value.no_of_seats+'</span><br></div>';
              //$('.custom-div').append( str ).fadeIn(9000);
              $(str).hide().appendTo(".custom-div").fadeIn(1000);
          });
          
          }
        });

    return false;
  });


$("#register_user_form").submit(function() {

    var data = {
      'name': $('#name').val(),
      'email': $('#email').val(),
      'password': $('#password').val(),
      'password_confirmation': $('#password_confirmation').val()
      };

    $.ajax({
          type: 'GET',
          url: 'http://goyaar.testingwebsitedesign.com/registerApiUser',
          crossDomain: true,
          data: data,
          cache: false,
          datatype: 'jsonp',

          success: function(data) {
          alert(data);
          window.location = "OfferRide.html";
          }
        });

    return false;
  });

});