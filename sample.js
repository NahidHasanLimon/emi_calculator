/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



		var pieData = [
				{
					value: 30,
					color:"#F38630"
				},
				{
					value : 100-30,
					color : "#69D2E7"
				}
			
			];
                   
	
            function myfun(){

                /**
                 * Values from EMI calci
                 * @type @exp;document@call;getElementById@pro;value
                 */
              var loanamt=document.getElementById('v1').value;
              var repaytrm=document.getElementById('v2').value;
              var intrest=document.getElementById('v3').value;
                 
                 /**
                  * EMI Logic
                  */
                 parseInt(loanamt);
                 var rate1 = (parseFloat(intrest)/100)/12;
                 
                 rate = 1+rate1;
                 //Math.round(rate);
		var interestRate = Math.pow(rate,repaytrm);
		//Math.round(interestRate);
		var E1 = loanamt*rate1*interestRate;
		//Math.round(E1);
		var E2 = interestRate-1;
		//Math.round(E2);
		var EMI = (E1/E2);
                EMI.toFixed(2);
                
                var total_payable=EMI*repaytrm;
                var total_interest=(total_payable-loanamt);
                var emi_perc=(total_interest/total_payable)*100;
                emi_perc.toFixed(2);
                    
                /**
                 *  Values to disply
                 * @type Array
                 */    
                var a=Math.round(EMI);
                var b=Math.round(total_interest);
                var c=Math.round(total_payable);
                document.getElementById('emi').innerHTML='&#8377'+' <b>'+a+'</b>';
                document.getElementById('tip').innerHTML='&#8377'+'<b> '+b+'</b>';
                document.getElementById('tp').innerHTML='&#8377'+' <b>'+c+'</b>';
                    
                  var pieData = [
                                          {
                                                  value: emi_perc,
                                                  color:"#F38630"
                                          },
                                          {
                                                  value : 100-emi_perc,
                                                  color : "#69D2E7"
                                          }
                                  ];
                  var myPie = new Chart(document.getElementById("canvas").getContext("2d")).Pie(pieData);
              }
            
    
              function validate(input){
                 if(input.value=='' || isNaN(input.value)){
                    // alert('er');
                     input.focus();
                  }
              }
              function numeralsOnly(evt) 
              {
                evt = (evt) ? evt : event;
                var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : 
                    ((evt.which) ? evt.which : 0));
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    //alert("Enter only Numbers in this field.");
                   return false;
                }
                return true;
            }
            function numeralsAndDecimalOnly(evt) 
              {
                evt = (evt) ? evt : event;
                var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : 
                    ((evt.which) ? evt.which : 0));
                if (charCode > 31 && (charCode < 48 || charCode > 57)&& charCode != 46) {
                    //alert("Enter only Numbers in this field.");
                   return false;
                }
                return true;
            }
              function v1inputChange(){
                    var vv=$("#v1").val();
                    $("#slider1").simpleSlider("setValue",vv);
              }
              function v2inputChange(){
                    var vv=$("#v2").val();
                    $("#slider2").simpleSlider("setValue",vv);
              }
              function v3inputChange(){
                    var vv=$("#v3").val();
                    $("#slider3").simpleSlider("setValue",vv);
              }
              $("#slider1").
                      bind("slider:ready slider:changed", function (event, data) {
                        var v=    $("#slider1").val();
                        $("#v1").val(v);
                        myfun();
                        });
              $("#slider2").
                      bind("slider:ready slider:changed", function (event, data) {
                        var v=    $("#slider2").val();
                        $("#v2").val(v);
                        
                        myfun();
                        });
             $("#slider3").
                      bind("slider:ready slider:changed", function (event, data) {
                        var v=    parseFloat($("#slider3").val());
                        v.toFixed(2);
                        $("#v3").val(v);
                        myfun();
                        });
  $("[data-slider]")
    .each(function () {
      var input = $(this);
      
    })
    .bind("slider:ready slider:changed", function (event, data) {
   
    });
    s