/*
function disp_modal(id_user, modal){
	$('#' + modal).modal('show');
	$('#'+modal).on('shown', function() {
		$('#form_' + modal + ' :input[name="id_user"]').val(id_user);
	});
}

function disp_modal_up_user(id_user){
	$('#up_user').modal('show');
	$('#up_user').on('shown', function() {
		$('#form_up_user :input[name="id_user"]').val(id_user);
		$('#form_up_user :input[name="name"]').val($('#name_'+id_user).html());
		$('#form_up_user :input[name="surname"]').val($('#surname_'+id_user).html());
		$('#form_up_user :input[name="department"]').val($('#department_'+id_user).html());
		$('#form_up_user :input[name="email"]').val($('#email_'+id_user).html());
		//$('#form_up_user :input[name="log"]').val($('#log_'+id_user).html());
	});
}

$(document).ready(function() {

$('#form_up_user').submit(function() {
		$.post('./fonctions_ajax/personal_info.ajax.php?up_user', $(this).serialize(),
			function (data) {
				var th;
				try {
					var rep = $.parseJSON(data);
					if (rep.rep == "false")
						alert("ERROR : " + rep.msg);
					else {
						$('#name_'+$('#form_up_user :input[name="id_user"]').val()).html($('#form_up_user :input[name="name"]').val());
						$('#surname_'+$('#form_up_user :input[name="id_user"]').val()).html($('#form_up_user :input[name="surname"]').val());
						$('#department_'+$('#form_up_user :input[name="id_user"]').val()).html($('#form_up_user :input[name="department"]').val());
						$('#email_'+$('#form_up_user :input[name="id_user"]').val()).html($('#form_up_user :input[name="email"]').val());
						//$('#log_'+$('#form_up_user :input[name="id_user"]').val()).html($('#form_up_user :input[name="log"]').val());
						$('#up_user').modal('hide');
					}
				} catch (e) {
					alert('ERROR PHP : ' + data);
				}
			});
			
		return false;
	});
	
	$('#form_up_parameters').submit(function() {
		$.post('./fonctions_ajax/personal_info.ajax.php?up_parameters', $(this).serialize(),
			function (data) {
				var th;
				try {
					var rep = $.parseJSON(data);
					if (rep.rep == "false")
						alert("ERROR : " + rep.msg);
					else {
						location.reload();
					}
				} catch (e) {
					alert('ERROR PHP : ' + data);
				}
			});
			
		return false;
	});
	
});
*/

function loadXMLDoc()
{

	var str = document.getElementById("searchInput").value;
	if (str == "")
		return;
	
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("test").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","ajax.txt",true);
xmlhttp.send();
}

   function toggleNewNews() {

         window.open('../Include/createNews.php','Nouvelle News','menubar=no, scrollbars=no, top=100, left=100, width=350, height=400');

    }


    function retourIndex()
    {
    	location.href = "index.php";
    }