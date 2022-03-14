$(document).ready(function () {

    $('#check1').hide();
    $('#check2').hide();
    $('#check3').hide();
    $('#check4').hide();
    $('#check5').hide();
    $('#check6').hide();
    $('#check7').hide();  
    $('#check8').hide(); 
    $('#check9').hide(); 
    $('#check10').hide();
    $('#check11').hide();
    $('#check12').hide();
    $('#check20').hide();
    $("#submit").click(function(){
    var name=$("#name").val();
    var dob=$("#dob").val();
    var sex=$("input[name='gender']:checked").val();
    var email=$("#email").val();
    var address=$("#address").val();
    var school=$("#select2 option:selected").text();
    var department=$("#select3 option:selected").text();
    var course=$("#select1 option:selected").text();
    var mobile=$("#mobile").val();
    var pattern = /^[a-zA-Z\s]+$/;
    console.log("Patter Test name "+pattern.test(name));
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var validateMobNum= /^\d*(?:\.\d{1,2})?$/;
    console.log(validateMobNum.test(mobile ));
    if(name == '')
    {
        $('#check1').show();
        
    }
    else if(!pattern.test(name))
    {
        $('#check10').show();
        $('#check1').hide();
    } 
    else if(dob == '')
    {
        $('#check2').show();
        $('#check1').hide();
        $('#check10').hide();
    }
    else if(sex == '')
    {
        $('#check3').show();
        $('#check2').hide();
        $('#check1').hide();
        $('#check10').hide();
    }
    else if(email == '')
    {
        $('#check4').show();
       
        $('#check3').hide();
        $('#check2').hide();
        $('#check1').hide();
        $('#check10').hide();
    }
    else if(!regex.test(email))
    {
        $('#check11').show();
        $('#check4').hide();
       
        $('#check3').hide();
        $('#check2').hide();
        $('#check1').hide();
        $('#check10').hide();
    }
   else if(address == '')
    {
        $('#check5').show();
        $('#check11').hide();
        $('#check4').hide();
       
        $('#check3').hide();
        $('#check2').hide();
        $('#check1').hide();
        $('#check10').hide();
    }
    else if(school == '')
    {
        $('#check6').show();
        $('#check5').hide();
        $('#check11').hide();
        $('#check4').hide();
       
        $('#check3').hide();
        $('#check2').hide();
        $('#check1').hide();
        $('#check10').hide();
    }
    else if(department == '')
    {
        $('#check7').show();
        $('#check6').hide();
        $('#check5').hide();
        $('#check11').hide();
        $('#check4').hide();
       
        $('#check3').hide();
        $('#check2').hide();
        $('#check1').hide();
        $('#check10').hide();
    }
    else if(course == '')
    {
        $('#check8').show();
        $('#check7').hide();
        $('#check6').hide();
        $('#check5').hide();
        $('#check11').hide();
        $('#check4').hide();
        $('#check3').hide();
        $('#check2').hide();
        $('#check1').hide();
        $('#check10').hide();
    }
    else if(mobile == '')
    {
        $('#check9').show();
        $('#check8').hide();
        $('#check7').hide();
        $('#check6').hide();
        $('#check5').hide();
        $('#check11').hide();
        $('#check4').hide();
        $('#check3').hide();
        $('#check2').hide();
        $('#check1').hide();
        $('#check10').hide();
        
    }
   else if (validateMobNum.test(mobile ) && mobile.length !== 10) {
    $('#check12').show();
    $('#check9').hide();
        $('#check8').hide();
        $('#check7').hide();
        $('#check6').hide();
        $('#check5').hide();
        $('#check11').hide();
        $('#check4').hide();
        $('#check3').hide();
        $('#check2').hide();
        $('#check1').hide();
        $('#check10').hide();
    }
    else{
        $('#check1').hide();
    $('#check2').hide();
    $('#check3').hide();
    $('#check4').hide();
    $('#check5').hide();
    $('#check6').hide();
    $('#check7').hide();  
    $('#check8').hide(); 
    $('#check9').hide(); 
    $('#check10').hide();
    $('#check11').hide();
    $('#check12').hide();
    $('#check20').show();
    }
});
});