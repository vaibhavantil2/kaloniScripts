function portletNamecl(request, response){
    var water = "https://system.na2.netsuite.com/core/media/media.nl?id=1167581&c=3559763&h=b297afb975abb1a03f6d";
   var recId = request.getParameter('id');
   var record = nlapiLoadRecord('Customer', recId);
   var id = record.getFieldValue('entityid');
   var name = record.getFieldValue('altname');
   var type = record.getFieldValue('isperson');
   var date = record.getFieldValue('custentity4');
   var sex = record.getFieldText('custentity_sexo');
   var executive = record.getFieldValue('custentity145');
   var hair = record.getFieldValue('custentity144');
   var medical = record.getFieldValue('custentity145');
   var category = record.getFieldText('category');
  var age = record.getFieldValue('custentity149');
   var comment = record.getFieldValue('comments');

/*try{
  var separador='*';
  var myArray = comment.split(separador);

var counArr2=myArray.length;
  var text=''
for (i = 1; i <counArr2; i++) {
    text +=i.toString()+'. '+ myArray[i]+'<br/>';
}
  
}catch(e){}

  */


   var e_mail = record.getFieldValue('email');
   var no_exp=record.getFieldValue('custentity114');
    //datos hoja frontal
   var date_pros = record.getFieldValue('custentity157');
   var Num_pros = record.getFieldValue('custentity158');
   var Num_tiras= record.getFieldValue('custentity159');
    var Day10 = record.getFieldValue('custentity160');
   var horas24 = record.getFieldValue('custentity226');
   var Mes1 = record.getFieldValue('custentity161');
   var Mes3 = record.getFieldValue('custentity162');
   var Mes6 = record.getFieldValue('custentity163');
   var Mes9 = record.getFieldValue('custentity164');
   var Mes12 = record.getFieldValue('custentity165');
   var Mes14 = record.getFieldValue('custentity166');
   var Mes10 = record.getFieldValue('custentity329');
   var Ref_imp = record.getFieldValue('custentity167');
   var IDX = record.getFieldValue('custentity169');
   var TX = record.getFieldValue('custentity170');
   var nota24horas = record.getFieldValue('custentity249');
   var nota = record.getFieldValue('custentity235');
   var nota2 = record.getFieldValue('custentity236');
   var nota3 = record.getFieldValue('custentity237');
   var nota4 = record.getFieldValue('custentity238');
   var nota5 = record.getFieldValue('custentity239');
   var nota6 = record.getFieldValue('custentity240');
   var nota7 = record.getFieldValue('custentity241');
   var nota10 = record.getFieldValue('custentity330');
  var medicam1 = record.getFieldValue('custentity252');
  var medicam2 = record.getFieldValue('custentity253');
  var medicam3 = record.getFieldValue('custentity254');
  var medicam4 = record.getFieldValue('custentity255');
  var medicam5 = record.getFieldValue('custentity256');
  var medicam6 = record.getFieldValue('custentity257');
  var medicam7 = record.getFieldValue('custentity258');
   var medicam8 = record.getFieldValue('custentity259');
   var medicam10 = record.getFieldValue('custentity331');
    var Responsable1= record.getFieldValue('custentity260');
  var Responsable2= record.getFieldValue('custentity261');
  var Responsable3= record.getFieldValue('custentity262');
  var Responsable4= record.getFieldValue('custentity263');
  var Responsable5= record.getFieldValue('custentity264');
  var Responsable6= record.getFieldValue('custentity265');
  var Responsable7= record.getFieldValue('custentity266');
  var Responsable8= record.getFieldValue('custentity267');
  var Responsable10= record.getFieldValue('custentity332');
  //fin datos hoja frontal
  // Area de Checkbox
   var hair = record.getFieldValue('custentity6');
   var hair_check= record.getFieldValue('custentity40');
   var alteration = record.getFieldValue('custentity13');
   var white = record.getFieldValue('custentity16');
   var hairs = record.getFieldValue('custentity15');
   var exp_file = record.getFieldValue('custentity155');
  //seccion exp clinico
   var grandfather = record.getFieldValue('custentity18');
   var father = record.getFieldValue('custentity17');
   var cirugia = record.getFieldValue('custentity19');
   var alergia = record.getFieldValue('custentity21');
   var nasal = record.getFieldValue('custentity45');
   var hipertencion = record.getFieldValue('custentity50');
   var text_hiper = record.getFieldValue('custentity51');
   var renal = record.getFieldValue('custentity52');
   var neurologic = record.getFieldValue('custentity54');
   var VIH = record.getFieldValue('custentity56');
   var artritis = record.getFieldValue('custentity58');
   var asma = record.getFieldValue('custentity59');
   var cancer = record.getFieldValue('custentity60');
   var claustrofobia = record.getFieldValue('custentity61');
   var colitis = record.getFieldValue('custentity62');
   var eczema = record.getFieldValue('custentity63');
   var epilepsia = record.getFieldValue('custentity64');
   var hipotiroidismo= record.getFieldValue('custentity65');
   var gastritis = record.getFieldValue('custentity66');
   var hipertiroidismo = record.getFieldValue('custentity67');
   var psoriasis = record.getFieldValue('custentity68');
   var smock = record.getFieldValue('custentity70');
   var alcoholismo = record.getFieldValue('custentity71');
   var toma_medicamento = record.getFieldValue('custentity73');
   var phone = record.getFieldValue('phone');
   var dataimport = record.getFieldValue('custentity72');
  var SinMetabolico= record.getFieldValue('custentity269');
  //Fin de Checkbox
  //GetText
   var cellphone = record.getFieldValue('mobilephone');
   var personal_phone = record.getFieldValue('homephone');
   var address = record.getFieldValue('defaultaddress');
   var sucursal = record.getFieldText('custentity25');
  if (sucursal=="Bogota"){
       water = "https://system.na2.netsuite.com/core/media/media.nl?id=1167581&c=3559763&h=b297afb975abb1a03f6d";
    } if(sucursal=="Medellin"){
      water = "https://system.na2.netsuite.com/core/media/media.nl?id=1167582&c=3559763&h=ce4a37106e9500cb1362";
    }
   var countrys = record.getFieldValue('custentity137');
   var city = record.getFieldValue('custentity129');
   var medios = record.getFieldText('custentity38');
   var campaign = record.getFieldText('leadsource');
   var starter_hair = record.getFieldText('custentity7');
   var since = record.getFieldText('custentity9');
   var textlost_hair = record.getFieldText('custentity10');
   var textobservation = record.getFieldText('custentity11');
   var textfrecuenci = record.getFieldText('custentity12');
   var lost = record.getFieldText('custentity10');
   var paciente_db = record.getFieldText('custentity47');
   var anestesia = record.getFieldText('custentity20');
   var Mod_pros = record.getFieldText('custentity78');
   //Fin GetText
  var res = record.getFieldValue('custentity57');
  //text exp_clinico
  var answer1 = record.getFieldValue('custentity42');
  var answer2 = record.getFieldValue('custentity43');
  var answer3 = record.getFieldValue('custentity44');
  var type_c=record.getFieldText('custentity46');
  //
  var tratamiento1 = record.getFieldValue('custentity48');
  var tratamiento2 = record.getFieldValue('custentity50');
  var tratamiento3 = record.getFieldValue('custentity53');
  var tratamiento4 = record.getFieldValue('custentity55');
  var Medic = record.getFieldValue('custentity75');
  var text_obs = record.getFieldValue('custentity79');
   //-----------------------------------------------INICIO HOJA ENFERMERIA------------------------------------
  var alerta=record.getFieldText('custentity190');
  var orientado=record.getFieldText('custentity191');
  var conciente=record.getFieldText('custentity192');
  var tranquilo=record.getFieldText('custentity193');
  var ansioso=record.getFieldText('custentity194');
  var letargico=record.getFieldText('custentity195');
  var nervioso=record.getFieldText('custentity196');
  var otro=record.getFieldValue('custentity197');
  var foto_in=record.getFieldText('custentity198');
  var foto_fin=record.getFieldText('custentity199');
  var Anes_anes=record.getFieldValue('custentity200');
  var Anes_infiltro=record.getFieldValue('custentity201');
  var Anes_horain=record.getFieldValue('custentity202');
  var Anes_horafin=record.getFieldValue('custentity203');
  var Anes_anes2=record.getFieldValue('custentity204');
  var Anes_infiltro2=record.getFieldValue('custentity205');
  var Anes_horain2=record.getFieldValue('custentity206');
  var Anes_horafin2=record.getFieldValue('custentity207');
  var Anti_Realizo=record.getFieldValue('custentity208');
  var Anti_Region=record.getFieldText('custentity209');
  var Antiseptico=record.getFieldValue('custentity210');
  var Anti_Realizo2=record.getFieldValue('custentity211');
  var Anti_Region2=record.getFieldText('custentity212');
  var Antiseptico2=record.getFieldValue('custentity213');
   //-----------------------------------------------FIN HOJA ENFERMERIA------------------------------------
     //-----------------------------------------------INICIO MUESTRA PRP------------------------------------
    var respon=record.getFieldValue('custentity214');
    var equi=record.getFieldValue('custentity215');
    var sitioPun=record.getFieldValue('custentity216');
    var no_inten =record.getFieldValue('custentity217');
    var tubos=record.getFieldValue('custentity218');
    var centrifugados=record.getFieldValue('custentity219');
    var tiempo=record.getFieldValue('custentity221');
    var responPRP1=record.getFieldValue('custentity222');
    var regionPRP1=record.getFieldValue('custentity223');
    var responPRP2=record.getFieldValue('custentity224');
    var regionPRP2=record.getFieldValue('custentity225');
    //-----------------------------------------------FIN MUESTRA PRP------------------------------------
   //-----------------------------------------------INICIO HOJA DIGRMA DE ALOPECIA------------------------------------
  var type_alop = record.getFieldValue('custentity168');
  var type_alop_text = record.getFieldText('custentity77');
   var CIE10 = record.getFieldText('custentity270');
  var DCDOA1= record.getFieldValue('custentity171');
  var DCDOB1= record.getFieldValue('custentity173');
  var DCDOC1= record.getFieldValue('custentity174');
  var DCDOpro= record.getFieldValue('custentity175');
  var DCZRA1= record.getFieldValue('custentity176');
  var DCZRB1= record.getFieldValue('custentity177');
  var DCZRC1= record.getFieldValue('custentity178');
  var DCZRpro= record.getFieldValue('custentity179');
  
  var AreaZD= record.getFieldValue('custentity172');
  var AreaZDA= record.getFieldValue('custentity180');
  var AreaZDB= record.getFieldValue('custentity181');
  var AreaZDC=record.getFieldValue('custentity182');
  var AreaZD2= record.getFieldValue('custentity183');
  var type_razurado= record.getFieldText('custentity184');
  var patologi= record.getFieldValue('custentity74');
    var image_valoration1= record.getFieldValue('custentity274');
    var image_valoration2= record.getFieldValue('custentity275');
    var image_valoration3= record.getFieldValue('custentity276');
    var image_valoration4= record.getFieldValue('custentity291');
    var medic_valoration= record.getFieldText('custentity278');
  

   //-----------------------------------------------FIN HOJA DIGRMA DE ALOPECIA------------------------------------
  try{
    var dataID="Expediente_KHG_HAIR/"+sucursal+"_EXP_KHG_HAIR/"+id+"_FOLDER/EXP_"+id+"_signDoc.pdf";

var LOADfile = nlapiLoadFile(dataID);
  response.setContentType('PDF',"EXP_"+id+"_signDoc.pdf", 'INLINE');
   response.write(LOADfile.getValue());
 
  }catch(err){
        

  //-----------------------------------------------INICIO HOJA CONTEO FOLICULAR------------------------------------
  var idProsc=0;
idProsc=record.getFieldValue('custentity227');
  if(idProsc!=null){
    try{
       var record2 = nlapiLoadRecord('supportcase', parseInt(idProsc));
    }
    
    catch(err){}
    if(record2!=null){
  var textoimagnes=record2.getFieldValue('custevent88');
  var date_incid=record2.getFieldValue('startdate');
  var TA_PRE=record2.getFieldValue('custevent4');
  var FC_PRE=record2.getFieldValue('custevent7');
  var TA_TRANS=record2.getFieldValue('custevent5');
  var FC_TRANS=record2.getFieldValue('custevent8');
  var TA_POST=record2.getFieldValue('custevent6');
  var FC_POST=record2.getFieldValue('custevent9');
  var total_folic=record2.getFieldValue('custevent_ns_cuf_total');
  var IN_EXTR=record2.getFieldValue('custevent_inicio_extraccion');
   var TER_EXTR=record2.getFieldValue('custevent_termino_extraccion');
   var IN_CORT=record2.getFieldValue('custevent_inicio_corte');
   var TER_CORT=record2.getFieldValue('custevent_termino_corte');
   var IN_IMPLA=record2.getFieldValue('custevent_inicio_implantacion');
   var TER_IMPLA=record2.getFieldValue('custevent_termino_implantacion');
   var FOLI_V=record2.getFieldValue('custevent_ns_cf_total');
   var FOLI_NV=record2.getFieldValue('custevent_ns_cf_total_nv');
   var FOLI_V_NV=record2.getFieldValue('custevent_ns_cf_total_tt');
   var proyectados=record2.getFieldValue('custevent74');
   var DATEPOST=record2.getFieldText('custevent16');
    var image_1= record2.getFieldValue('custevent76');
    var image_2= record2.getFieldValue('custevent77');
    var image_3= record2.getFieldValue('custevent78');
    var image_4= record2.getFieldValue('custevent81');
    var image_5= record2.getFieldValue('custevent82'); 
            var image_6= record2.getFieldValue('custevent83');
            var image_7= record2.getFieldValue('custevent84');
            var image_8= record2.getFieldValue('custevent85');
        var inciImport= record2.getFieldValue('custevent14');
     //-----------------------------------------------INICIO VARIABLES PROCEDIMIENTO------------------------------------

  var asigMedicos=record2.getFieldText('custevent28');
  var enfer_extra=record2.getFieldText('custevent71');
  var enfer_implan=record2.getFieldText('custevent72');
  var enfer_trico=record2.getFieldValue('custevent75');
  var apply =record2.getFieldTexts('custevent29');

    var applySublitsCount = record2.getLineItemCount('recmachcustrecord_nro_cf');
     var litsCount = record2.getLineItemCount('recmachcustrecord_nro_cfs');
      var coutControlCor=record2.getLineItemCount("recmachcustrecord_control_corte");
      var litsCount_noViables = record2.getLineItemCount('recmachcustrecord_nro_cfs_nv');
    }
  }else{
    record2=null;
  }
    //-----------------------------------------------FIN HOJA CONTEO FOLICULAR------------------------------------
  //-----------------------IMAGENES ALOPECIA-----------------------------------------

  var PDF_PRESUPUESTO= record.getFieldValue('custentity186');
  if(PDF_PRESUPUESTO!=null&&PDF_PRESUPUESTO!=""){
  var filePDFPRE = nlapiLoadFile(PDF_PRESUPUESTO);
  var DOCPDFPRE= filePDFPRE.getURL();}else{DOCPDFPRE=null;}

 var file_firma= record.getFieldValue('custentity187');
  if(file_firma!=null){
  var fileImage = nlapiLoadFile(file_firma);
  var urlImage= fileImage.getURL();
    var firma="<img height=\"60px\" width=\"120px\" src=\""+nlapiEscapeXML(urlImage)+"\"/>";
  }else{firma="";}

  var firma_doc_assig= record.getFieldValue('custentity189');
  if(firma_doc_assig!=null){
  var fileImage = nlapiLoadFile(firma_doc_assig);
  var urlImage= fileImage.getURL();
    var firma2="<img height=\"60px\" width=\"120px\" src=\""+nlapiEscapeXML(urlImage)+"\"/>";
  }else{firma2="";}

   var firma_doc_Injert= record.getFieldValue('custentity271');
  if(firma_doc_Injert!=null){
  var fileImage = nlapiLoadFile(firma_doc_Injert);
  var urlImage= fileImage.getURL();
    var firma3="<img height=\"60px\" width=\"120px\" src=\""+nlapiEscapeXML(urlImage)+"\"/>";
  }else{firma3="";}
  
  ///-------------------------fotos valoracion----------------------------------
  
  if(image_valoration1!=null&&image_valoration1!=""){
  var file_image1 = nlapiLoadFile(image_valoration1);
 var image_url1= file_image1.getValue();
 var img_val_1 ="<img height=\"250px\" width=\"250px\" src=\"data:image/jpg;base64,"+nlapiEscapeXML(image_url1)+"\"/>";
}else{
  img_val_1="<p style=\"color:red\">NO HAY IMAGEN!</p>";
}

    if(image_valoration2!=null&&image_valoration2!=""){
    var file_image2 = nlapiLoadFile(image_valoration2);
 var image_url2= file_image2.getValue();
 var img_val_2 ="<img height=\"250px\" width=\"250px\" src=\"data:image/jpg;base64,"+nlapiEscapeXML(image_url2)+"\"/>";

}else{
  img_val_2="<p style=\"color:red\">NO HAY IMAGEN!</p>";
}
 
if(image_valoration3!=null&&image_valoration3!=""){
  var file_image3 = nlapiLoadFile(image_valoration3);
  var image_url3= file_image3.getValue();
  var img_val_3 ="<img height=\"250px\" width=\"250px\" src=\"data:image/jpg;base64,"+nlapiEscapeXML(image_url3)+"\"/>";
}else{
  img_val_3="<p style=\"color:red\">NO HAY IMAGEN!</p>";
}
if(image_valoration4!=null&&image_valoration4!=""){
  var file_image4 = nlapiLoadFile(image_valoration4);
  var image_url4= file_image4.getValue();
  var img_val_4 ="<img height=\"250px\" width=\"250px\" src=\"data:image/jpg;base64,"+nlapiEscapeXML(image_url4)+"\"/>";
}else{
  img_val_4="<p style=\"color:red\">NO HAY IMAGEN!</p>";
}

    ///-------------------------fin fotos valoracion----------------------------------

   if(record2!=null){
  if(image_1!=null&&image_1!=""){
  var file1 = nlapiLoadFile(image_1);
  image_1= file1.getValue();
 var imgtry ="<img height=\"250px\" width=\"250px\" src=\"data:image/jpg;base64,"+nlapiEscapeXML(image_1)+"\"/>";
}else{
  imgtry="<p style=\"color:red\">NO HAY IMAGEN!</p>";
}

    if(image_2!=null&&image_2!=""){
    var file2 = nlapiLoadFile(image_2);
  image_2= file2.getValue();
 var imgtry2 ="<img height=\"250px\" width=\"250px\" src=\"data:image/jpg;base64,"+nlapiEscapeXML(image_2)+"\"/>";

}else{
  imgtry2="<p style=\"color:red\">NO HAY IMAGEN!</p>";
}
 
if(image_3!=null&&image_3!=""){
  var file3 = nlapiLoadFile(image_3);
  image_3= file3.getValue();
  var imgtry3 ="<img height=\"250px\" width=\"250px\" src=\"data:image/jpg;base64,"+nlapiEscapeXML(image_3)+"\"/>";
}else{
  imgtry3="<p style=\"color:red\">NO HAY IMAGEN!</p>";
}
if(image_4!=null&&image_4!=""){
  var file4 = nlapiLoadFile(image_4);
  image_4= file4.getValue();
  var imgtry4 ="<img height=\"250px\" width=\"250px\" src=\"data:image/jpg;base64,"+nlapiEscapeXML(image_4)+"\"/>";
}else{
  imgtry4="<p style=\"color:red\">NO HAY IMAGEN!</p>";
}
     
if(image_5!=null&&image_5!=""){
  var file5 = nlapiLoadFile(image_5);
  image_5= file5.getValue();
  var imgtry5 ="<img height=\"250px\" width=\"250px\" src=\"data:image/jpg;base64,"+nlapiEscapeXML(image_5)+"\"/>";
}else{
  imgtry5="<p style=\"color:red\">NO HAY IMAGEN!</p>";
}
if(image_6!=null&&image_6!=""){
  var file6 = nlapiLoadFile(image_6);
  image_6= file6.getValue();
  var imgtry6 ="<img height=\"250px\" width=\"250px\" src=\"data:image/jpg;base64,"+nlapiEscapeXML(image_6)+"\"/>";
}else{
  imgtry6="<p style=\"color:red\">NO HAY IMAGEN!</p>";
}     

if(image_7!=null&&image_4!=""){
  var file7 = nlapiLoadFile(image_7);
  image_7= file7.getValue();
  var imgtry7 ="<img height=\"250px\" width=\"250px\" src=\"data:image/jpg;base64,"+nlapiEscapeXML(image_7)+"\"/>";
}else{
  imgtry7="<p style=\"color:red\">NO HAY IMAGEN!</p>";
} 
     
if(image_8!=null&&image_4!=""){
  var file8 = nlapiLoadFile(image_8);
  image_8= file8.getValue();
  var imgtry8 ="<img height=\"250px\" width=\"250px\" src=\"data:image/jpg;base64,"+nlapiEscapeXML(image_8)+"\"/>";
}else{
  imgtry8="<p style=\"color:red\">NO HAY IMAGEN!</p>";
}
  }else{
  imgtry="<p style=\"color:red\">NO HAY IMAGEN!</p>";
  imgtry2="<p style=\"color:red\">NO HAY IMAGEN!</p>";
  imgtry3="<p style=\"color:red\">NO HAY IMAGEN!</p>";
  imgtry4="<p style=\"color:red\">NO HAY IMAGEN!</p>";
  imgtry5="<p style=\"color:red\">NO HAY IMAGEN!</p>";
  imgtry6="<p style=\"color:red\">NO HAY IMAGEN!</p>";
  imgtry7="<p style=\"color:red\">NO HAY IMAGEN!</p>"; 
  imgtry8="<p style=\"color:red\">NO HAY IMAGEN!</p>";
}
  //----------------------FIN IMAGENES ALOPECIA-----------------------------
     if(record2!=null){
var myarray=new Array();
   myarray=apply;
  //var asigEnferm=myarray[0]+"_"+myarray[1];
  var countArray=myarray.length;
  var enfermero1=""; var enfermero2="";
  if(countArray<=2){
 enfermero1=myarray[0];
  enfermero2=myarray[1];
  }
     else{
        enfermero1="";
  enfermero2="";
     }
     }

// asigEnferm=xd;
     //-----------------------------------------------FIN VARIABLES PROCEDIMIENTO------------------------------------


    var footer_image="https://system.na2.netsuite.com/core/media/media.nl?id=740506&c=3559763&h=b6a79d6f686805a642c3";
  var alopesiType="https://system.na2.netsuite.com/core/media/media.nl?id=742247&c=3559763&h=74fbf0392166942c7410";

  function checado(checks) {
var check ="";
 if (checks == "T"){
     var path = "https://system.na2.netsuite.com/core/media/media.nl?id=740487&c=3559763&h=e1eb9a6dd4127855a2d1";
     check ="<img height=\"15px\" width=\"15px\" src=\""+nlapiEscapeXML(path)+"\">probando</img>";
   }
  else {
    if(checks == "F"){
       var path2 = "https://system.na2.netsuite.com/core/media/media.nl?id=740488&c=3559763&h=cf9e78c446e99e18fefb";
       check ="<img height=\"15px\" width=\"15px\" src=\""+nlapiEscapeXML(path2)+"\"/>";
   }else {
     if(checks == null){
       check ="";
     }else{
       check=checks;
     }
   }
       }
   return check;
}

  function typeEstado(checks) {
var check ="";
 if (checks == "Sí"){
     var path = "https://system.na2.netsuite.com/core/media/media.nl?id=740487&c=3559763&h=e1eb9a6dd4127855a2d1";
     check ="<img height=\"15px\" width=\"15px\" src=\""+nlapiEscapeXML(path)+"\">probando</img>";
   }
  else {
    if(checks == "No") {
       var path2 = "https://system.na2.netsuite.com/core/media/media.nl?id=740488&c=3559763&h=cf9e78c446e99e18fefb";
       check ="<img height=\"15px\" width=\"15px\" src=\""+nlapiEscapeXML(path2)+"\"/>";
   }else {
     if(checks == null){
       check ="_";
     }else{
       check=checks;
     }
   }
       }
   return check;
}

 function dates(varDate){
   var dates="";
   if(varDate!=null&&varDate!=""){
      var path = "https://system.na2.netsuite.com/core/media/media.nl?id=740487&c=3559763&h=e1eb9a6dd4127855a2d1";
   dates ="<img height=\"15px\" valign=\"middle\" width=\"15px\" src=\""+nlapiEscapeXML(path)+"\">probando</img>";
   }else{
       var path2 = "https://system.na2.netsuite.com/core/media/media.nl?id=740488&c=3559763&h=cf9e78c446e99e18fefb";
     dates ="<img height=\"15px\" width=\"15px\" src=\""+nlapiEscapeXML(path2)+"\"/>";
   }
   return dates;
 }
  function funt1(Num){
    var entero=parseInt(Num);
    var imageSelect="";
         imageSelect="https://system.na2.netsuite.com/core/media/media.nl?id=743291&c=3559763&h=1e56212e1db2d20cecd8";
  if(entero==1){
     imageSelect= "<img height=\"78px\" valign=\"middle\" border=\"2px\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }else{

  imageSelect= "<img height=\"78px\" valign=\"middle\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }
     return imageSelect;
  }
    function funt2(Num){
      var entero=parseInt(Num);
      var imageSelect="";
       imageSelect="https://system.na2.netsuite.com/core/media/media.nl?id=743292&c=3559763&h=76fba8deb7014f71c1f7";
  if(entero==2){
     imageSelect= "<img height=\"78px\" valign=\"middle\" border=\"2px\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }else{

  imageSelect= "<img height=\"78px\" valign=\"middle\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }
  return imageSelect;
    }
  function funt3(Num){
    var entero=parseInt(Num);
    var imageSelect="";
      imageSelect="https://system.na2.netsuite.com/core/media/media.nl?id=743293&c=3559763&h=7dec6caa816e21b8bc6e";
         if(entero==3){
     imageSelect= "<img height=\"78px\" valign=\"middle\" border=\"2px\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }else{

  imageSelect= "<img height=\"78px\" valign=\"middle\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }
    return imageSelect;
  }

    function funt4(Num){
      var entero=parseInt(Num);
      var imageSelect="";
      imageSelect="https://system.na2.netsuite.com/core/media/media.nl?id=743294&c=3559763&h=1185d5785a0770214839";
      if(entero==4){
     imageSelect= "<img height=\"78px\" valign=\"middle\" border=\"2px\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }else{
  imageSelect= "<img height=\"78px\" valign=\"middle\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }
      return imageSelect;
    }
      function funt5(Num){
        var entero=parseInt(Num);
         var imageSelect="";
         imageSelect="https://system.na2.netsuite.com/core/media/media.nl?id=743295&c=3559763&h=7a635732f3364dfd193f";
         if(entero==5){
     imageSelect= "<img height=\"78px\" valign=\"middle\" border=\"2px\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }else{

  imageSelect= "<img height=\"78px\" valign=\"middle\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }
         return imageSelect;
      }
    function funt6(Num){
      var entero=parseInt(Num);
       var imageSelect="";
       imageSelect="https://system.na2.netsuite.com/core/media/media.nl?id=743296&c=3559763&h=2d035ee0a3af4a40b135";
         if(entero==6){
     imageSelect= "<img height=\"78px\" valign=\"middle\" border=\"2px\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }else{
  imageSelect= "<img height=\"78px\" valign=\"middle\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }
      return imageSelect;
    }
   function funt7(Num){
     var entero=parseInt(Num);
     var imageSelect="";
      imageSelect="https://system.na2.netsuite.com/core/media/media.nl?id=743297&c=3559763&h=d1987980bf9f6bb72443";
         if(entero==7){
     imageSelect= "<img height=\"78px\" valign=\"middle\" border=\"2px\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }else{
  imageSelect= "<img height=\"78px\" valign=\"middle\" width=\"78px\" src=\""+nlapiEscapeXML(imageSelect)+"\"></img>";
  }
     return imageSelect;
   }
 // var imageSelected= typeAlopesi(type_alop);
  function DateNow(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    today = mm+'/'+dd+'/'+yyyy; // change the format depending on the date format preferences set on your account
    return today;
}
   //----------------------------------------------------------------------------------------- inicio conteo por unidad folicular----------------------------------------------

  var cadena="";
  var totalRecord=0;
  var style="style=\"background-color:#C8C8C8\"";
  var contador=0;
  var sumaH1=0;  var sumaH2=0;  var sumaH3=0;  var sumaH4=0;  var sumaH5=0;
  if(record2!=null){
for (var i = 0; i < applySublitsCount; i++) {
 var RecordNumero = record2.getLineItemValue('recmachcustrecord_nro_cf', 'custrecord_nro_cuf', i+1);
var RecordH1 = record2.getLineItemValue('recmachcustrecord_nro_cf', 'custrecord_una_hora', i+1);
 var RecordH2 = record2.getLineItemValue('recmachcustrecord_nro_cf', 'custrecord_dos_horas', i+1);
var RecordH3 = record2.getLineItemValue('recmachcustrecord_nro_cf', 'custrecord_tres_horas', i+1);
 var RecordH4 = record2.getLineItemValue('recmachcustrecord_nro_cf', 'custrecord_cuatro_horas', i+1);
var RecordH5 = record2.getLineItemValue('recmachcustrecord_nro_cf', 'custrecord_cinco_horas', i+1);
  var RecordSubtotal = record2.getLineItemValue('recmachcustrecord_nro_cf', 'custrecord_cf_sub_total', i+1);
      totalRecord+=parseInt(RecordSubtotal);
  sumaH1+=parseInt(RecordH1);
   sumaH2+=parseInt(RecordH2);
     sumaH3+=parseInt(RecordH3);
       sumaH4+=parseInt(RecordH4);
         sumaH5+=parseInt(RecordH5);
  if(contador==0){
    style="";
    contador=1;
  }else{

      style="style=\"background-color:#C8C8C8\"";
      contador=0;
  }

 if(i==00){
 cadena +="<tr>";
  cadena +="<td width=\"10\" align=\"center\"  border=\"1px\">"+checado(RecordNumero)+"";
  cadena +="</td>";

  cadena +="<td align=\"center\"  border=\"1px\">"+checado(RecordH1)+"";
  cadena +="</td>";

  cadena +="<td align=\"center\"  border=\"1px\">"+checado(RecordH2)+"";
  cadena +="</td>";
  cadena +="<td align=\"center\"  border=\"1px\">"+checado(RecordH3)+"";
  cadena +="</td>";

  cadena +="<td align=\"center\"  border=\"1px\">"+checado(RecordH4)+"";
  cadena +="</td>";

  cadena +="<td align=\"center\"  border=\"1px\">"+checado(RecordH5)+"";
  cadena +="</td>";

  cadena +="<td align=\"center\"  border=\"1px\">"+checado(RecordSubtotal)+"";
  cadena +="</td>";

  cadena +="<td border=\"1px\" align=\"center\" valign=\"middle\" rowspan=\"5\">contaNum";
  cadena +="</td>";
  cadena +="</tr>";
  }

   if(i!=00){
     cadena +="<tr>";
  cadena +="<td width=\"10\" align=\"center\"  "+style+" border=\"1px\">"+checado(RecordNumero)+"";
  cadena +="</td>";

  cadena +="<td align=\"center\" "+style+"  border=\"1px\">"+checado(RecordH1)+"";
  cadena +="</td>";

  cadena +="<td align=\"center\" "+style+"  border=\"1px\">"+checado(RecordH2)+"";
  cadena +="</td>";

  cadena +="<td align=\"center\" "+style+"  border=\"1px\">"+checado(RecordH3)+"";
  cadena +="</td>";

   cadena +="<td align=\"center\" "+style+"  border=\"1px\">"+checado(RecordH4)+"";
  cadena +="</td>";
  
   cadena +="<td align=\"center\" "+style+"  border=\"1px\">"+checado(RecordH5)+"";
  cadena +="</td>";
  
   cadena +="<td align=\"center\" "+style+"  border=\"1px\">"+checado(RecordSubtotal)+"";
  cadena +="</td>";
    cadena +="<td>";
  cadena +="</td>";
  cadena +="</tr>";
   }
}
    cadena +="<tr>";
  
  cadena +="<td border=\"1px\">";
  cadena +="</td>";
  
  cadena +="<td align=\"center\"  border=\"1px\">"+checado(sumaH1)+"";
  cadena +="</td>";
  
  cadena +="<td align=\"center\"  border=\"1px\">"+checado(sumaH2)+"";
  cadena +="</td>";
  
   cadena +="<td align=\"center\" border=\"1px\">"+checado(sumaH3)+"";
  cadena +="</td>";
  
   cadena +="<td align=\"center\"  border=\"1px\">"+checado(sumaH4)+"";
  cadena +="</td>";
  
   cadena +="<td align=\"center\"  border=\"1px\">"+checado(sumaH5)+"";
  cadena +="</td>";
  
   cadena +="<td border=\"1px\">";
  cadena +="</td>";
    cadena +="<td>";
  cadena +="</td>";
  cadena +="</tr>";
 var rest= parseInt(FOLI_V_NV)-parseInt(FOLI_NV);
 var PERCEN1=(rest*(100))/(parseInt(FOLI_V_NV));
 var PERCEN=parseInt(PERCEN1);
   
    cadena=cadena.replace("contaNum",totalRecord);
  }
 //----------------------------------------------------------------------------------------- fin conteo por unidad folicular----------------------------------------------
   //----------------------------------------------------------------------------------------- inicio unidad folicular viables----------------------------------------------

  var cadena2="";
  var totalRecord2=0;
  var contador=0;
  var totalH1=0;  var totalH2=0;  var totalH3=0;  var totalH4=0;  var totalH5=0;
  if(record2!=null){
  if(litsCount!=null){
for (var i = 0; i < litsCount; i++){

 var Record2Numero = record2.getLineItemValue('recmachcustrecord_nro_cfs', 'custrecord_nro_fc', i+1);
var Record2H1 = record2.getLineItemValue('recmachcustrecord_nro_cfs', 'custrecord_una_hora_cf', i+1);
  var Record2H2 = record2.getLineItemValue('recmachcustrecord_nro_cfs','custrecord_dos_horas_cf', i+1);
var Record2H3 = record2.getLineItemValue('recmachcustrecord_nro_cfs', 'custrecord_tres_horas_cf', i+1);
  var Record2H4 = record2.getLineItemValue('recmachcustrecord_nro_cfs', 'custrecord_cuatro_horas_cf', i+1);
var Record2H5 = record2.getLineItemValue('recmachcustrecord_nro_cfs', 'custrecord_cinco_horas_cf', i+1);
  totalH1+=parseInt(Record2H1);
   totalH2+=parseInt(Record2H2);
     totalH3+=parseInt(Record2H3);
       totalH4+=parseInt(Record2H4);
         totalH5+=parseInt(Record2H5);
totalRecord2+=(parseInt(Record2H1)+parseInt(Record2H2)+parseInt(Record2H3)+parseInt(Record2H4)+parseInt(Record2H5));
   //   totalRecord2+=parseInt(Record2H1)+parseInt(Record2H2)++parseInt(Record2H3)+parseInt(Record2H4)+parseInt(Record2H5);
  if(i==00){
  cadena2 +="<tr>";

  cadena2 +="<td align=\"center\" border=\"1px\" valign=\"middle\"><b>"+checado(Record2Numero)+"</b>";
   cadena2 +="</td>";
  
   cadena2 +="<td align=\"center\" border=\"1px\" valign=\"middle\"><b>"+checado(Record2H1)+"</b>";
   cadena2 +="</td>";
    cadena2 +="<td align=\"center\" border=\"1px\" valign=\"middle\"><b>"+checado(Record2H2)+"</b>";
   cadena2 +="</td>";
    cadena2 +="<td align=\"center\" border=\"1px\" valign=\"middle\"><b>"+checado(Record2H3)+"</b>";
   cadena2 +="</td>";

   cadena2 +="<td align=\"center\" border=\"1px\" valign=\"middle\"><b>"+checado(Record2H4)+"</b>";
   cadena2 +="</td>";

   cadena2 +="<td align=\"center\" border=\"1px\" valign=\"middle\"><b>"+checado(Record2H5)+"</b>";
   cadena2 +="</td>";

      cadena2 +="<td align=\"center\" border=\"1px\" rowspan=\"4\" valign=\"middle\"><b>contaNum</b>";
   cadena2 +="</td>";
  cadena2 +="</tr>";
}

   if(i!=00){
   cadena2 +="<tr>";

  cadena2 +="<td align=\"center\" border=\"1px\" valign=\"middle\"><b>"+checado(Record2Numero)+"</b>";
   cadena2 +="</td>";

   cadena2 +="<td align=\"center\" border=\"1px\" valign=\"middle\"><b>"+checado(Record2H1)+"</b>";
   cadena2 +="</td>";
  
    cadena2 +="<td align=\"center\" border=\"1px\" valign=\"middle\"><b>"+checado(Record2H2)+"</b>";
   cadena2 +="</td>";
  
    cadena2 +="<td align=\"center\" border=\"1px\" valign=\"middle\"><b>"+checado(Record2H3)+"</b>";
   cadena2 +="</td>";

     cadena2 +="<td align=\"center\" border=\"1px\" valign=\"middle\"><b>"+checado(Record2H4)+"</b>";
   cadena2 +="</td>";

      cadena2 +="<td align=\"center\" border=\"1px\" valign=\"middle\"><b>"+checado(Record2H5)+"</b>";
   cadena2 +="</td>";

      cadena2 +="<td>";
   cadena2 +="</td>";
  cadena2 +="</tr>";
 }
 }
 
  cadena2=cadena2.replace("contaNum",totalRecord2);
  }}
     //----------------------------------------------------------------------------------------- fin unidad folicular----------------------------------------------
     //----------------------------------------------------------------------------------------- inicio unidad folicular no viables----------------------------------------------

    var totalNVH1=0;  var totalNVH2=0;  var totalNVH3=0;  var totalNVH4=0;  var totalNVH5=0;
  var RecordNVH1=0;  var RecordNVH2=0;  var RecordNVH3=0;  var RecordNVH4=0;  var RecordNVH5=0;
  if(record2!=null){
  for(var i=0; i<litsCount_noViables;i++){
      RecordNVH1 = record2.getLineItemValue('recmachcustrecord_nro_cfs_nv', 'custrecord_una_hora_cf_nv', i+1);
      RecordNVH2 = record2.getLineItemValue('recmachcustrecord_nro_cfs_nv', 'custrecord_dos_horas_cf_nv', i+1);
      RecordNVH3 = record2.getLineItemValue('recmachcustrecord_nro_cfs_nv', 'custrecord_tres_horas_cf_nv', i+1);
      RecordNVH4 = record2.getLineItemValue('recmachcustrecord_nro_cfs_nv', 'custrecord_cuatro_horas_cf_nv', i+1);
      RecordNVH5 = record2.getLineItemValue('recmachcustrecord_nro_cfs_nv', 'custrecord_cinco_horas_cf_nv', i+1);
    if(RecordNVH1==null)
      RecordNVH1=0;
    if(RecordNVH2==null)
      RecordNVH2=0;
    if(RecordNVH3==null)
      RecordNVH3=0;
    if(RecordNVH4==null)
      RecordNVH4=0;
      if(RecordNVH5==null)
      RecordNVH5=0;
 totalNVH1+=parseInt(RecordNVH1);
   totalNVH2+=parseInt(RecordNVH2);
     totalNVH3+=parseInt(RecordNVH3);
       totalNVH4+=parseInt(RecordNVH4);
         totalNVH5+=parseInt(RecordNVH5);
 }}

 function porcentajes(foli_viables, foli_no_viables){

   if(foli_viables!=null&&foli_viables!=""&&foli_viables!=0){
     var suma=parseInt(foli_viables)+parseInt(foli_no_viables);
   var rest= suma-parseInt(foli_no_viables);
  var PERCEN_F=(rest*(100))/(parseInt(suma));
 var PERCEN1=parseInt(PERCEN_F);

   } else{

     PERCEN1=0;
   }
   return PERCEN1+" %";
 }

     //----------------------------------------------------------------------------------------- fin unidad folicular no viables----------------------------------------------
     //----------------------------------------------------------------------------------------- inicio control de corte----------------------------------------------

  var cadena3="";

  function checkHrs(hrs){
     var hrsCheck=0;
    if(hrs!=null&&hrs!=""){
    hrsCheck= hrs;

    }else{
       hrsCheck=0;

    }

   return hrsCheck;
  }
  if(record2!=null){
  if(coutControlCor!=null){

    for(var i=0; i<coutControlCor;i++){
 var RecordCorte_Enf = record2.getLineItemText('recmachcustrecord_control_corte', 'custrecord_enfermera', i+1);
var RecordCorteH1 = record2.getLineItemValue('recmachcustrecord_control_corte', 'custrecord_hora1_cc', i+1);
  var RecordCorteH2 = record2.getLineItemValue('recmachcustrecord_control_corte','custrecord_hora2_cc', i+1);
var RecordCorteH3 = record2.getLineItemValue('recmachcustrecord_control_corte', 'custrecord_hora3_cc', i+1);
  var RecordCorteH4 = record2.getLineItemValue('recmachcustrecord_control_corte', 'custrecord_hora4_cc', i+1);
var RecordCorteH5= record2.getLineItemValue('recmachcustrecord_control_corte', 'custrecord_hora5_cc', i+1);
      var subTotal = record2.getLineItemValue('recmachcustrecord_control_corte', 'custrecord_subtotal_cc', i+1);
      if(contador==0){
    style="";
    contador=1;
  }else{
       style="style=\"background-color:#C8C8C8\"";
      contador=0;
  }

  cadena3 +="<tr height=\"60px\">";
  cadena3 +="<td width=\"120\"  align=\"center\" "+style+" border=\"1px\" valign=\"middle\"><b>"+checado(RecordCorte_Enf)+"</b>";
  cadena3 +="</td>";
  cadena3 +="<td width=\"71\"  align=\"center\" "+style+" border=\"1px\"  valign=\"middle\"><b>"+checkHrs(RecordCorteH1)+"</b>";
  cadena3 +="</td>";
  cadena3 +="<td width=\"71\"  align=\"center\" "+style+" border=\"1px\"  valign=\"middle\"><b>"+checkHrs(RecordCorteH2)+"</b>";
  cadena3 +="</td>";
  cadena3 +="<td width=\"71\"  align=\"center\" "+style+" border=\"1px\" valign=\"middle\"><b>"+checkHrs(RecordCorteH3)+"</b>";
  cadena3 +="</td>";
  cadena3 +="<td width=\"71\"  align=\"center\" "+style+" border=\"1px\" valign=\"middle\"><b>"+checkHrs(RecordCorteH4)+"</b>";
  cadena3 +="</td>";
  cadena3 +="<td width=\"71\"  align=\"center\" "+style+" border=\"1px\"  valign=\"middle\"><b>"+checkHrs(RecordCorteH5)+"</b>";
  cadena3 +="</td>";
  cadena3 +="<td width=\"71\"  align=\"center\" "+style+" border=\"1px\"  valign=\"middle\"><b>"+checkHrs(subTotal)+"</b>";
  cadena3 +="</td>";
  cadena3 +="</tr>";
    }

  }}
     //----------------------------------------------------------------------------------------- fin control de corte----------------------------------------------

   var imageURL = "https://system.na2.netsuite.com/core/media/media.nl?id=743298&c=3559763&h=8560f5a4e2852363f9b4";
   var  imageDiagram ="<img width=\"180px\" height=\"300px\" src=\""+nlapiEscapeXML(imageURL)+"\"/>";
    var imagebefore = "https://system.na2.netsuite.com/core/media/media.nl?id=746457&c=3559763&h=1923a3309e352f7bc904";
   var  imagehead ="<img width=\"183px\" height=\"183px\" align=\"center\" src=\""+nlapiEscapeXML(imagebefore)+"\"/>";
   var imageafter = "https://system.na2.netsuite.com/core/media/media.nl?id=746460&c=3559763&h=ce9e8cb7e3871bf64e6f";
   var  imageheadcomplete ="<img width=\"183px\" height=\"183px\" align=\"center\" src=\""+nlapiEscapeXML(imageafter)+"\"/>";
  //-----------------------------------------------------------------------------------anexos expediente colombia--------------------------------------------------
  var subsidiary=record.getFieldText('subsidiary');
   var IdIdentifi=record.getFieldValue('custentity251');
  var MotivoConsul=record.getFieldText('custentity228');
  var EnfermedadAct=record.getFieldValue('custentity229');



   //var ExamenFis=record.getFieldText('custentity233');
  var estadoCivil=record.getFieldText('custentity242');
  var ocupacion=record.getFieldText('custentity243');
 var espacio= ' ';

    try{
  var RevisionSistemas = record.getFieldValue('custentity230');
  var separador='*';
  var myArray = RevisionSistemas.split(separador);
  var counArr2=myArray[0];

  var counArr3=myArray[1].slice(24,50);
  var counArr4=myArray[2].slice(16,50);
  var counArr5=myArray[3].slice(16,50);
  var counArr6=myArray[4].slice(17,50);
  var counArr7=myArray[5].slice(16,50);
  var counArr8=myArray[6].slice(15,50);
  var counArr9=myArray[7].slice(13,50);
  var counArr10=myArray[8].slice(15,50);
}catch(e){
    espacio=' ';
}

  var espacio2=' ';
  
        try{
       var Antecedentes=record.getFieldValue('custentity231');

  var separador2='*';
  var myArray2 = Antecedentes.split(separador2);

/*for(i = 0; i < myArray2.length; i++){
  var num1 = "1.";
  var num2 = "2.";
  var num3 = "3.";
  var num4 = "4.";
  var num5 = "5.";
  var num6 = "6.";
  var num7 = "7.";
  var num8 = "8.";
  var num9 = "9.";
}*/
  var Arr=myArray2[1].slice(12,50);
  var Arr2=myArray2[2].slice(12,50);
  var Arr3=myArray2[3].slice(10,50);
  var Arr4=myArray2[4].slice(12,50);
  var Arr5=myArray2[5].slice(17,50);
  var Arr6=myArray2[6].slice(14,50);
  var Arr7=myArray2[7].slice(16,50);
  var Arr8=myArray2[8].slice(17,50);
  var Arr9=myArray2[9].slice(41,60);
}catch(e){
    espacio2=' ';
}

 var espacio3='';
                try{
     var SignosVitales=record.getFieldValue('custentity232');
       
  var separador3='*';
  var myArray3 = SignosVitales.split(separador3);

  var Arrays=myArray3[1].slice(17,50);
  var Arrays2=myArray3[2].slice(20,50);
  var Arrays3=myArray3[3].slice(11,50);
  var Arrays4=myArray3[4].slice(5,50);
  var Arrays5=myArray3[5].slice(12,50);
}catch(e){
   espacio3='';
}

var espacio4='';
    
                    try{
       var ExamenFisico=record.getFieldValue('custentity233');
       
  var separador4='*';
  var myArray4 = ExamenFisico.split(separador4);

var Arreglo=myArray4[1].slice(16,50);
  var Arreglo2=myArray4[2].slice(6,50);
  var Arreglo3=myArray4[3].slice(21,50);
  var Arreglo4=myArray4[4].slice(5,50);
}catch(e){

espacio4='';

}
    
    
    
    
    
  var principal=record.getFieldValue('custentity279');
    var ConfiImprecion=record.getFieldText('custentity280');
var PlanTrabajo=record.getFieldValue('custentity277');
    

  //-----datos acompañante
    var nameAcompa=record.getFieldValue('custentity244');
    var Aseguradora=record.getFieldValue('custentity246');
    var TipoViculacion=record.getFieldValue('custentity245');
    var DireccionAcom=record.getFieldValue('custentity247');
   var TelAcom=record.getFieldValue('custentity248');
     var ParentAcom=record.getFieldValue('custentity268');
  ///----acompañante
  


  
   //----------------------------------------------------------------------------------- fin anexos expediente colombia--------------------------------------------------
  

  var strName0="<table width=\"100%\"><tr><td width=\"33%\"></td><td width=\"34%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" background-color=\"#346094\" align=\"center\"><b>FORMATO DE VALORACIÓN</b></td><td width=\"33%\"></td></tr></table>"; 
  // 
      strName0+="<p></p>";
    strName0+= "<table width=\"500\" style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\" >";
    strName0+="<tr>";
    strName0+="<td width=\"350\">";
  
    strName0+="<table width=\"350\">";
   strName0 += "<tr><td width=\"350\" align=\"center\" style=\"background-color:#346094\" color=\"#FFFFFF\"><b>Datos del Cliente</b></td></tr>";
    strName0 += "<tr><td><b>No. de Expediente: &nbsp;</b>" +checado(id)+ "</td></tr>";
  strName0 += "<tr><td><b>Nombre: &nbsp;</b>"+ checado(name) +  "</td></tr>";
  strName0 += "<tr><td><b>Edad: &nbsp;</b>" + checado(age) + "</td></tr>";
    strName0+= "<tr><td><b>Sexo: &nbsp;</b>" + checado(sex) + "</td></tr>";
   strName0 += "<tr><td><b>Esatdo Civil: &nbsp;</b>" + checado(estadoCivil) + "</td></tr>";
      strName0 += "<tr><td><b>Ocupacion: &nbsp;</b>" + checado(ocupacion) + "</td></tr>";
   strName0 += "<tr><td><b>No.Identificacion:</b><u>"+checado(IdIdentifi)+"</u></td></tr>";
    strName0 += "<tr><td><b>Fecha de nacimiento: &nbsp;</b>"+ checado(date) + "</td></tr>";
    strName0 += "<tr><td><b>Telefóno: &nbsp;</b>" + checado(phone) + "</td></tr>";
    strName0 += "<tr><td><b>Dirección: &nbsp;</b><u>"+ checado(address) + "</u></td></tr>";
  
     strName0+="</table>";
    strName0+="</td>";
  strName0+="<td width=\"40\">";
  strName0+="</td>";
    strName0+="<td width=\"160\">";
    strName0+="<table width=\"160\">";
    strName0 += "<tr><td  width=\"160\" align=\"center\" style=\"background-color:#346094\" color=\"#FFFFFF\"><b>Datos Acompañante</b></td></tr>";
    strName0 += "<tr><td><b>Nombre:</b>" + checado(nameAcompa) + "</td></tr>";
    strName0 += "<tr><td><p><b>Direccion:</b>" + checado(DireccionAcom) + "</p></td></tr>";
     strName0 += "<tr><td><p><b>Telefono:</b>" + checado(TelAcom) + "</p></td></tr>";
     strName0 += "<tr><td><b>Parentesco:</b>" + checado(ParentAcom) + "</td></tr>";
     strName0 += "<tr><td><p><b>Aseguradora:</b>" + checado(Aseguradora) + "</p></td></tr>";
    strName0 += "<tr><td><b>Tipo de Vinculo:</b>&nbsp;" + checado(TipoViculacion) + "</td></tr>";
    strName0+="</table>";
    strName0+="</td>";
    strName0 += "</tr>";
    strName0 += "</table>";
  strName0+="<p></p>";
   strName0 += "<p align=\"center\" width=\"100%\"  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\" background-color=\"#346094\" color=\"#FFFFFF\"><b>Datos de la Sucursal</b></p>";
    strName0+="<table width=\"100%\"  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";

  strName0+="<tr style=\"background-color:#D3D3D3\">";

  strName0+="<td>Sucursal:<b>"+checado(sucursal)+"</b></td>";
  strName0+="<td>Direccion:<b>Loc 102 Edificio Torres Unidad 2 Bogota Colombia</b></td>";
  strName0+="<td>Tel:<b>7456204, 7456204-30</b></td>";


  strName0+="</tr>";
  strName0+="</table>";
  strName0+="<p></p>";
    strName0 += "<p align=\"center\" width=\"100%\"  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\" background-color=\"#346094\" color=\"#FFFFFF\"><b>Motivo de Cosulta</b></p>";
    strName0+="<table width=\"510\"   style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";
    strName0+="<tr>";
    strName0+="<td ><b>Motivo de cosulta:&nbsp;</b>"+checado(MotivoConsul)+"";
    strName0+="</td>";
    strName0+="</tr>";
   strName0+="<tr>";
    strName0+="<td><b>Enfermedad Actual:&nbsp;</b>"+checado(EnfermedadAct)+"";
    strName0+="</td>";
    strName0+="</tr>";
  strName0+="</table>";

     strName0+="<pbr/>";
     strName0+="<br/>";
   strName0+="<table width=\"100%\"><tr><td width=\"33%\"></td><td width=\"34%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" background-color=\"#346094\" align=\"center\"><b>FORMATO DE VALORACIÓN</b></td><td width=\"33%\"></td></tr></table>"; 
    strName0+="<p></p>";
         strName0+="<table width=\"100%\" border=\"1px\" style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\" >";
    strName0+="<tr>";
  strName0+="<td  style=\"background-color:#346094\" color=\"#FFFFFF\" ><b>Revisión por sistema:</b>";
   strName0+="</td>";
   strName0+="</tr>";
   strName0+="<tr>";
   strName0+="<td>" + RevisionSistemas + " ";
   strName0+="</td>";
   strName0+="</tr>";
  strName0+="</table>";
  strName0+="<table width=\"100%\" border=\"1px\"  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";
   strName0+="<tr>";
   strName0+="<td style=\"background-color:#346094\" color=\"#FFFFFF\"><b>Antecedentes:</b>";
   strName0+="</td>";
   strName0+="</tr>";
   strName0+="<tr>";
   strName0+="<td>" + Antecedentes + " ";
   strName0+="</td>";
   strName0+="</tr>";
    strName0+="</table>";
// strName0+="<br/>";
 //  strName0+="<br/>";
     strName0+="<table width=\"100%\" border=\"1px\"  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";
   strName0+="<tr>";
   strName0+="<td style=\"background-color:#346094\" color=\"#FFFFFF\"><b>Exámen Físico:</b>";
   strName0+="</td>";
   strName0+="</tr>";
   strName0+="<tr>";
   strName0+="<td>" + ExamenFisico + " ";
   strName0+="</td>";
   strName0+="</tr>";
    strName0+="</table>";
  // strName0+="<br/>";
 
  strName0+="<table width=\"100%\" border=\"1px\"  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";
   strName0+="<tr>";
  strName0+="<td  style=\"background-color:#346094\" color=\"#FFFFFF\" ><b>Signos Vitales:</b>";
   strName0+="</td>";
   strName0+="</tr>";
   strName0+="<tr>";
   strName0+="<td>" + SignosVitales + " ";
   strName0+="</td>";
   strName0+="</tr>";
  strName0+="</table>";
  strName0 += "<p width=\"100%\"  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\" background-color=\"#346094\" color=\"#FFFFFF\"><b>CIE10</b></p>";
     strName0 += "<table width=\"100%\" style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";
  
   strName0 += "<tr>";
 
  strName0 += "<td  width=\"45%\">CIE10:&nbsp;<b>"+checado(CIE10)+"</b></td>";
   strName0 += "<td  width=\"15px\"><b>"+checado(principal)+"</b></td>";
    strName0 += "<td  width=\"15%\">Principal</td>";
    strName0 += "<td align=\"right\" width=\"40%\">&nbsp;<b>"+checado(ConfiImprecion)+"</b></td>";
   strName0 += "</tr>";
    strName0 += "</table>";
    strName0 += "<p width=\"100%\"  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\" background-color=\"#346094\" color=\"#FFFFFF\"><b>Analisis y Plan</b></p>";
       strName0 += "<table width=\"100%\" style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";
   strName0 += "<tr>";
  strName0 += "<td  width=\"100%\">&nbsp;<b>"+checado(PlanTrabajo)+"</b></td>";
  strName0 += "</tr>";
   strName0 += "</table>";
  //----------------------------------------------------------------------------------------------------------------------------------------------875
    strName0 +="<pbr/>";
  strName0 +="<br/>";
   strName0+="<table width=\"100%\"><tr><td width=\"33%\"></td><td width=\"34%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" background-color=\"#346094\" align=\"center\"><b>FORMATO DE VALORACIÓN</b></td><td width=\"33%\"></td></tr></table>"; 
  strName0 +="<div style=\"font-size:10pt\">";
   
  strName0 +="<br/>";
  strName0 += "<table width=\"100%\">";
    strName0 += "<tr>";
     strName0 += "<td style=\"font-family:'Aria', sans-serif\" align=\"center\" color=\"#FFFFFF\" colspan=\"2\" background-color=\"#346094\"><b>Como se entero de Nosotros</b></td>";
    strName0 += "</tr>";

   strName0 += "</table>";

   strName0 += "<table width=\"100%\">";
    strName0 += "<tr>";
    strName0 += "<td width=\"50%\"  style=\"font-family:'Aria', sans-serif\">MEDIOS: &nbsp;" +checado( medios) + "</td>";
    strName0 += "<td width=\"50%\"  style=\"font-family:'Aria', sans-serif\" align=\"right\">CAMPAÑA: &nbsp;" + checado(campaign) + "</td>";
    strName0 += "</tr>";
   strName0 += "</table>";
    strName0 += "<table width=\"100%\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"100%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" colspan=\"2\" background-color=\"#346094\" align=\"center\"><b>Datos Generales</b></td>";
     strName0 += "</tr>";
  strName0 += "</table>";
strName0 += "<br/>";
  strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\">" + checado(hair) +"</td>";
     strName0 += "<td width=\"255\">Familiar con pérdida de cabello</td>";
    strName0 += "<td width=\"20\"></td>";
  strName0 += "<td width=\"255\"><p>¿Como trató la pérdida de cabello?<b>"+ checado(textlost_hair) +"</b></p></td>";
     strName0+="</tr>";
    strName0 += "</table>";
  
  strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\"></td>";
  strName0 += "<td width=\"255\">Comienzo de pérdida de cabello:<b>&nbsp;"+ checado(starter_hair) +"</b></td>";
    strName0 += "<td width=\"20\"></td>";
     strName0 += "<td width=\"255\">¿Observó resultados?<b>&nbsp;"+ checado(textobservation) +"</b></td>";
     strName0 +="</tr>";
    strName0 += "</table>";
    strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\">" + checado(hair_check) +"</td>";
     strName0 += "<td width=\"255\">¿Trato la pérdida de cabello?</td>";
    strName0 += "<td width=\"20\"></td>";
     strName0 += "<td width=\"255\">¿Con que frecuencia lava su cabello?<b>&nbsp;"+ checado(textfrecuenci) +"</b></td>";
     strName0 +="</tr>";
    strName0 += "</table>";

   strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\"></td>";
     strName0 += "<td width=\"255\">¿Hace cuanto tiempo?<b>&nbsp;"+ checado(since)+"</b></td>";
    strName0 += "<td width=\"20\">"+ checado(alteration) +"</td>";
     strName0 += "<td width=\"255\">Alteraciónes recientes en el cuero cabelludo</td>";
     strName0 +="</tr>";
    strName0 += "</table>";

   strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\">"+ checado(hairs) +"</td>";
     strName0 += "<td width=\"255\">¿Comezón en el cuero cabelludo?</td>";
    strName0 += "<td width=\"20\">"+ checado(white) +"</td>";
     strName0 += "<td width=\"255\">¿Desprendido de placa blanquesina?</td>";
     strName0 +="</tr>";
    strName0 += "</table>";
   strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\">"+ checado(exp_file) +"</td>";
     strName0 += "<td width=\"255\">Expediente fisico</td>";
    strName0 += "<td width=\"20\"></td>";
  strName0 += "<td width=\"255\">No.de expediente:&nbsp;<b>"+ checado(no_exp) +"</b></td>";
     strName0 +="</tr>";
    strName0 += "</table>";
   strName0 += "<br/>";
    strName0 += "<table width=\"100%\" style=\"font-family:'Aria', sans-serif\">";
    strName0 +="<tr>";
  strName0 += "<td  width=\"100%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" background-color=\"#346094\" align=\"center\"><b>Historial Clinico</b></td>";
  strName0 +="</tr>";
    strName0 += "</table>";
  strName0 += "<br/>";
  strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\">" + checado(grandfather) +"</td>";
     strName0 += "<td width=\"255\">Enfermedad de importancia en abuelos<b> &nbsp;</b></td>";
    strName0 += "<td width=\"20\">"+ checado(renal)+"</td>";
     strName0 += "<td width=\"255\">¿Sufre de algún problema renal?<b>  &nbsp;</b></td>";
     strName0 +="</tr>";
    strName0 += "</table>";
  
  
  
   strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\">" + checado(father) +"</td>";
     strName0 += "<td width=\"255\">Enfermedad de importancia en padres<b> &nbsp;</b></td>";
    strName0 += "<td width=\"20\"></td>";
  strName0 += "<td width=\"255\">Tratamiento:<b> &nbsp;"+ checado(tratamiento3) + "</b></td>";
     strName0 +="</tr>";
    strName0 += "</table>";
  strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\"></td>";
     strName0 += "<td width=\"255\">¿Cual?&nbsp;<b>"+ checado(answer1) + "</b></td>";
    strName0 += "<td width=\"20\">"+ checado(neurologic) + "</td>";
     strName0 += "<td width=\"255\">¿Sufre de algún problema neurológico?</td>";
     strName0 +="</tr>";
    strName0 += "</table>";

   strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\">"+ checado(cirugia) + "</td>";
     strName0 += "<td width=\"255\">¿Algúna cirugía previa?</td>";
    strName0 += "<td width=\"20\"></td>";
  strName0 += "<td width=\"255\">Tratamiento:&nbsp;<b>"+checado(tratamiento4) +"</b></td>";
     strName0 +="</tr>";
    strName0 += "</table>";
  
   strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\"></td>";
     strName0 += "<td width=\"255\">¿Cual?&nbsp;<b>"+ checado(answer2) + "</b></td>";
    strName0 += "<td width=\"20\">"+ checado(VIH) + "</td>";
  strName0 += "<td width=\"255\">¿Se ha hecho pruevas de VIH o hepatitis?</td>";
     strName0 +="</tr>";
    strName0 += "</table>";
  
  strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\"></td>";
     strName0+= "<td width=\"255\">¿Anestesia previa?&nbsp;<b>"+ checado(anestesia) + "</b></td>";
    strName0 += "<td width=\"20\"></td>";
  strName0+= "<td width=\"255\">Respuesta:&nbsp;<b>"+ checado(res) +"</b></td>";
     strName0 +="</tr>";
    strName0 += "</table>";
   // strName += "</div>";
  

  // strName +="<div style=\"font-size:10pt\">";

   strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\">"+ checado(alergia) + "</td>";
     strName0 += "<td width=\"255\">¿Sufre usted de algún tipo de alergia?</td>";
    strName0 += "<td width=\"20\">"+ checado(hipertencion) + "</td>";
  strName0 += "<td width=\"255\">¿Sufre usted de hipertención?</td>";
   
  
     strName0 +="</tr>";
    strName0 += "</table>";
  
   strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\"></td>";
     strName0 += "<td width=\"255\">¿Cual?&nbsp;<b>"+ checado(answer3) + "</b></td>";
  strName0 += "<td width=\"20\"></td>";
  strName0 += "<td width=\"255\">Tratamiento:<b>&nbsp;"+ checado(text_hiper) + "</b></td>";
     strName0 +="</tr>";
    strName0 += "</table>";

   strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\"></td>";
     strName0 += "<td width=\"255\">¿Tiene usted diabetes?<b>&nbsp;"+ checado(paciente_db) + "</b></td>";
       strName0 += "<td width=\"20\">"+ checado(toma_medicamento) + "</td>";
  strName0 += "<td width=\"255\">¿Toma actualmente un medicamento?</td>";
     strName0 +="</tr>";
    strName0 += "</table>";
  
  strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
     strName0 += "<td width=\"20\"></td>";
     strName0 += "<td width=\"255\">Tratamiento:<b>&nbsp;"+ checado(tratamiento1) + "</b></td>";
    strName0 += "<td width=\"20\"></td>";
  strName0 += "<td width=\"255\">¿Cuál?<b>&nbsp;"+ checado(Medic) + "</b></td>";

     strName0 +="</tr>";
    strName0 += "</table>";
  
    strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
 
  strName0 += "<td width=\"20\">"+ checado(nasal) + "</td>";
  strName0 += "<td width=\"255\">¿Ha presentado sangrado GIN. o nasal?</td>";
    strName0 += "<td width=\"20\">"+ checado(alcoholismo) + "</td>";
 strName0 += "<td width=\"255\">¿Íngiere con frecuencia alcohol?</td>";
     strName0 +="</tr>";
    strName0 += "</table>";
  
   strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
     strName0 += "<tr>";
    strName0 += "<td width=\"20\"></td>";
   strName0 += "<td width=\"255\">¿Qué tipo de cicatrización tiene?&nbsp;<b>"+ checado(type_c) +"</b></td>";
     strName0 += "<td width=\"20\">"+ checado(smock) +"</td>";
  strName0 += "<td width=\"255\">¿Fuma?</td>";
   
     strName0 +="</tr>";
    strName0 += "</table>";
     strName0 += "</div>";
  
  
  
  
    strName0 += "<pbr/>";
   strName0 +="<br/>";

  strName0+="<table width=\"100%\"><tr><td width=\"33%\"></td><td width=\"34%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" background-color=\"#346094\" align=\"center\"><b>FORMATO DE VALORACIÓN</b></td><td width=\"33%\"></td></tr></table>"; 
  strName0 +="<br/>";
     strName0 +="<div style=\"font-size:10pt\">";
  strName0 += "<table style=\"font-family:'Aria', sans-serif\">";
   strName0+="<tr><td width=\"100%\" colspan=\"8\" style=\"background-color:#346094\" color=\"#FFFFFF\"><b>Marque la casilla si padece alguna de estas enfermedades: </b></td></tr>";
  
  strName0+="<tr><td width=\"20\">"+ checado(artritis) +"</td><td width=\"117\">Artritis</td><td width=\"20\">"+ checado(claustrofobia) +"</td><td width=\"125\">Claustrofobia</td><td width=\"20\">"+ checado(epilepsia) +"</td><td width=\"117\">Epilepsia</td><td width=\"20\">"+ checado(hipertiroidismo) +"</td><td width=\"117\">Hipertiroidismo</td></tr>";
  
   strName0+="<tr><td width=\"20\">"+ checado(asma) +"</td><td>Asma</td><td width=\"20\">"+ checado(colitis) +"</td><td>Colitis</td><td width=\"20\">"+ checado(hipotiroidismo) +"</td><td>Hipotiroidismo</td><td width=\"20\">"+ checado(psoriasis) +"</td><td>Psoriasis</td></tr>";

   
   strName0+="<tr><td width=\"20\">"+ checado(cancer) +"</td><td>Cáncer</td><td width=\"20\">"+ checado(eczema) +"</td><td>Eczema</td><td width=\"20\">"+ checado(gastritis) +"</td><td>Gastritis</td><td width=\"20\">"+ checado(SinMetabolico) +"</td><td>Síndrome Metabólico</td></tr>";
  
    
  
   
    strName0+="<tr><td><br/></td></tr>";
 
  strName0 += "</table>";
 strName0 +="</div>";

  strName0 +="<div style=\"font-size:10pt\">";
  strName0 +="<table width=\"550\" style=\"font-family:'Aria', sans-serif;\" >";
  strName0 +="<tr>";
  strName0 +="<td>";
  strName0 +="Algun otro dato que desee referirnos:";
  strName0 +="</td>";
  strName0 +="</tr>";
   strName0 +="</table>";
  strName0 +="</div>";
  
  strName0 +="<div style=\"font-size:10pt\">";
  strName0 +="<table border=\"1px\" width=\"100%\" height=\"100px\" style=\"font-family:'Aria', sans-serif;\" background-color=\"#D3D3D3\">";
  strName0 +="<tr>";
  strName0 +="<td>";
  strName0 +=""+ checado(text_obs) + "";
  strName0 +="</td>";
  strName0 +="</tr>";
  strName0 +="</table>";
  strName0 +="</div>";

  strName0 +="<div style=\"font-size:10pt\">";
  strName0 +="<table width=\"550\" style=\"font-family:'Aria', sans-serif;\" >";
  strName0 +="<tr>";
  strName0 +="<td>";
  strName0 +="IDX:";
  strName0 +="</td>";
  strName0 +="</tr>";
  strName0 +="</table>";
  strName0 +="</div>";
  
  strName0 +="<div style=\"font-size:10pt\">";
  strName0 +="<table border=\"1px\" width=\"100%\" height=\"100px\" style=\"font-family:'Aria', sans-serif;\" background-color=\"#D3D3D3\">";
  strName0 +="<tr>";
  strName0 +="<td>";
  strName0 +=""+checado(IDX)+"";
  strName0 +="</td>";
   strName0 +="</tr>";
   strName0 +="</table>";
   strName0 +="</div>";
  
  strName0 +="<div style=\"font-size:10pt\">";
  strName0 +="<table width=\"550\" style=\"font-family:'Aria', sans-serif;\" >";
  strName0 +="<tr>";
  strName0 +="<td>";
  strName0+="TX:";
  strName0 +="</td>";
  strName0 +="</tr>";
  strName0 +="</table>";
  strName0 +="</div>";
  
  strName0 +="<div style=\"font-size:10pt\">";
  strName0 +="<table border=\"1px\" width=\"100%\" height=\"100px\" style=\"font-family:'Aria', sans-serif;\" background-color=\"#D3D3D3\">";
  strName0 +="<tr>";
  strName0 +="<td>";
  strName0 +=""+checado(TX)+"";
  strName0 +="</td>";
  strName0 +="</tr>";
  strName0+="</table>";
  strName0 +="</div>";
    strName0 +="<br/>";
      strName0 +="<br/>";
  

  strName0 +="<div style=\"font-size:10pt\">";
    strName0 +="<br/>";
     strName0 +="<br/>";
     strName0 +="<br/>";
    strName0 +="<br/>";
     strName0 +="<br/>";
   strName0 +="<table width=\"550\" style=\"font-family:'Aria', sans-serif;\" >";
  strName0 += "<tr>";
   strName0 += "<td  style=\"font-family:'Aria', sans-serif\" align=\"center\"><u>"+checado(name)+"</u>";
  strName0 += "</td>";
    strName0 +="<td  style=\"font-family:'Aria', sans-serif\" align=\"center\"><u>"+checado(medic_valoration)+"</u>";
  strName0 += "</td>";
  strName0 += "</tr>";
    strName0 += "<tr>";
   strName0 += "<td width=\"275\">";
    strName0 +="<p style=\"font-family:'Aria', sans-serif\" align=\"center\"><b>Nombre y firma del paciente</b></p>";
   strName0 += "</td>";
   strName0 += "<td width=\"275\">";
  strName0 +="<p style=\"font-family:'Aria', sans-serif\" align=\"center\"><b>Nombre y firma</b></p>";
   strName0 += "</td>";
   strName0 += "</tr>";
   strName0 +="</table>";
   strName0 +="</div>";


    
  
  
  
  
    strName0 += "<pbr/>";
  strName0 += "<br/>";
  strName0+="<table width=\"100%\"><tr><td width=\"33%\"></td><td width=\"34%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" background-color=\"#346094\" align=\"center\"><b>FORMATO DE VALORACIÓN</b></td><td width=\"33%\"></td></tr></table>";
  strName0 +="<div style=\"font-size:10pt\">";
  
    strName0 += "<table>";
    strName0 += "<tr>";
  strName0 += "<td width=\"550\" style=\"align:center\"></td>";
    strName0 += "</tr>";
    strName0 += "</table>";
   strName0 += "<table style=\"font-family:'Aria', sans-serif\">";
   strName0 += "<tr>";
   strName0 += "<td style=\"align:lefth\">";
   strName0 +="<ul>";
   strName0 +="<li>DIGRAMA DE CLASIFICACIÓN TIPO AA";
   strName0 +="</li>"; 
   strName0 +="</ul>"; 
  strName0 += "</td>";
   strName0 += "</tr>";
  strName0 += "</table>";
   strName0 += "<table width=\"550\" style=\"font-family:'Aria', sans-serif\">";
    strName0 += "<tr>";
  strName0 += "<td width=\"78\">"+funt1(type_alop)+"</td>";
   strName0 += "<td width=\"78\">"+funt2(type_alop)+"</td>";
   strName0 += "<td width=\"78\">"+funt3(type_alop)+"</td>";
   strName0 += "<td width=\"78\">"+funt4(type_alop)+"</td>";
   strName0 += "<td width=\"78\">"+funt5(type_alop)+"</td>";
  strName0 += "<td width=\"78\">"+funt6(type_alop)+"</td>";
  strName0 += "<td width=\"78\">"+funt7(type_alop)+"</td>";
    strName0 += "</tr>";
  strName0 += "<tr >";
   strName0 += "<td align=\"center\" width=\"78\">1</td>";
 strName0 += "<td align=\"center\"  width=\"78\">2</td>";
  strName0 += "<td align=\"center\"  width=\"78\">3</td>";
  strName0 += "<td align=\"center\"  width=\"78\">4</td>";
  strName0 += "<td align=\"center\"  width=\"78\">5</td>";
  strName0 += "<td align=\"center\"  width=\"78\">6</td>";
  strName0 += "<td align=\"center\"  width=\"78\">7</td>";
   strName0 += "</tr>";
  
    strName0 += "</table>";
   strName0 += "<table width=\"100%\" style=\"font-family:'Aria', sans-serif\">";
   strName0 += "<tr>";
  strName0 += "<td style=\"align:lefth\" width=\"50%\">Grado:&nbsp;<b>"+checado(type_alop)+"</b></td>";
  strName0 += "<td align=\"right\" width=\"50%\"></td>";
   strName0 += "</tr>";
   strName0 += "</table>";
 
     strName0 += "<table style=\"font-family:'Aria', sans-serif\">";
   strName0 += "<tr>";
   strName0 += "<td style=\"align:lefth\">";
  strName0 +="<ul>";
   strName0 +="<li>REGISTRO DE EVALUACIÓN DE DENSIDAD";
   strName0 +="</li>"; 
   strName0 +="</ul>"; 
  strName0 += "</td>";
   strName0 += "</tr>";
    strName0 += "</table>";
  strName0 += "<table  border=\"1px\" style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";//
   strName0 += "<tr>";
   strName0 += "<td valign=\"middle\"  width=\"250\" border=\"1px\">Densidad de Cabellos / cm2 en zona donante A1 </td>";
  strName0 += "<td valign=\"middle\" align=\"center\" width=\"95\"  border=\"1px\"><b>"+checado(DCDOA1)+"</b></td>";
  strName0 += "<td width=\"180\" height=\"300px\" align=\"center\" border=\"1px\" rowspan=\"8\">"+imageDiagram+" </td>";
   strName0 += "</tr>";
  strName0 += "<tr>";
   strName0 += "<td valign=\"middle\" width=\"300\" border=\"1px\">Densidad de Cabellos / cm2 en zona donante B1 </td>";
  strName0 += "<td valign=\"middle\" align=\"center\" width=\"45\" border=\"1px\"><b>"+checado(DCDOB1)+"</b></td>";
   strName0 += "</tr>";
  strName0 += "<tr>";
   strName0 += "<td valign=\"middle\" width=\"300\" border=\"1px\">Densidad de Cabellos / cm2 en zona donante C1 </td>";
  strName0 += "<td valign=\"middle\" align=\"center\" width=\"45\" border=\"1px\"><b>"+checado(DCDOC1)+"</b></td>";
   strName0 += "</tr>";
  strName0 += "<tr>";
   strName0 += "<td valign=\"middle\" width=\"300\" border=\"1px\">Densidad de Cabellos / cm2 en zona donante (PROMEDIO) </td>";
  strName0+= "<td valign=\"middle\" align=\"center\"  width=\"45\" border=\"1px\"><b>"+checado(DCDOpro)+"</b></td>";
  strName0 += "</tr>";
   //strName += "</table>";
     //strName += "<table border=\"1px\" style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";
    strName0 += "<tr>";
   strName0 += "<td valign=\"middle\" width=\"300\" border=\"1px\">Densidad de Cabellos / cm2 en zona receptora A </td>";
  strName0 += "<td valign=\"middle\" align=\"center\"  width=\"45\" border=\"1px\"><b>"+checado(DCZRA1)+"</b></td>";
   strName0 += "</tr>";
   strName0 += "<tr>";
   strName0 += "<td valign=\"middle\" width=\"300\" border=\"1px\">Densidad de Cabellos / cm2 en zona receptora B </td>";
  strName0 += "<td valign=\"middle\" align=\"center\"  width=\"45\" border=\"1px\"><b>"+checado(DCZRB1)+"</b></td>";
   strName0 += "</tr>";
   strName0 += "<tr>";
   strName0 += "<td valign=\"middle\" width=\"300\" border=\"1px\">Densidad de Cabellos / cm2 en zona receptora C </td>";
  strName0 += "<td valign=\"middle\" align=\"center\"  width=\"45\" border=\"1px\"><b>"+checado(DCZRC1)+"</b></td>";
   strName0 += "</tr>";
   strName0 += "<tr>";
   strName0 += "<td valign=\"middle\" width=\"300\" border=\"1px\">Densidad de Cabellos / cm2 en zona receptora (PROMEDIO) </td>";
  strName0 += "<td valign=\"middle\" align=\"center\"  width=\"45\" border=\"1px\"><b>"+checado(DCZRpro)+"</b></td>";
   strName0 += "</tr>";
   strName0 += "</table>";
   strName0 += "<table style=\"font-family:'Aria', sans-serif\" >";
   strName0 += "<tr>";
   strName0 += "<td style=\"align:lefth\" >";
  strName0 +="<ul>";
   strName0 +="<li>ÁREA DE MEDICIÓN";
   strName0 +="</li>"; 
   strName0 +="</ul>"; 
  strName0 += "</td>";
   strName0 += "</tr>";
   strName0 += "</table>";
  strName0 += "<table border=\"1px\" style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";
    strName0 += "<tr>";
   strName0 += "<td valign=\"middle\" width=\"300\" border=\"1px\">Área (cm2) en zona donante</td>";
  strName0 += "<td valign=\"middle\" align=\"center\"  width=\"45\" border=\"1px\"><b>"+checado(AreaZD)+"</b></td>";
   strName0 += "</tr>";
   strName0 += "<tr>";
   strName0 += "<td valign=\"middle\" width=\"300\" border=\"1px\">Área (cm2) en zona receptora A</td>";
  strName0 += "<td valign=\"middle\" align=\"center\"  width=\"45\" border=\"1px\"><b>"+checado(AreaZDA)+"</b></td>";
   strName0 += "</tr>";
   strName0 += "<tr>";
   strName0 += "<td valign=\"middle\" width=\"300\" border=\"1px\">Área (cm2) en zona receptora B</td>";
  strName0 += "<td valign=\"middle\" align=\"center\" width=\"45\" border=\"1px\"><b>"+checado(AreaZDB)+"</b></td>";
   strName0 += "</tr>";
   strName0 += "<tr>";
   strName0 += "<td valign=\"middle\" width=\"300\" border=\"1px\">Área (cm2) en zona receptora C</td>";
  strName0 += "<td valign=\"middle\" align=\"center\" width=\"45\" border=\"1px\"><b>"+checado(AreaZDC)+"</b></td>";
   strName0 += "</tr>";
    strName0 += "<tr>";
   strName0 += "<td valign=\"middle\" width=\"300\" border=\"1px\">Área (cm2) en zona receptora</td>";
  strName0 += "<td valign=\"middle\" align=\"center\"  width=\"45\" border=\"1px\"><b>"+checado(AreaZD2)+"</b></td>";
   strName0 += "</tr>";
   strName0 += "</table>";
  strName0 += "<p/>";
  strName0 += "<table  style=\"font-family:'Aria', sans-serif\" width=\"100%\" >";
    strName0 += "<tr>";
   strName0 += "<td style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" background-color=\"#346094\" width=\"100%\" ><b>TIPOS DE ALOPECIA</b>";
  strName0 += "</td>";
   strName0 += "</tr>";
   strName0 += "</table>";
   strName0 += "<table width=\"100%\" style=\"font-family:'Aria', sans-serif\" font-size=\"9pt\">";
  strName0 += "<tr>";
  strName0 += "<td width=\"30%\" align=\"center\">TIPO:&nbsp;<b>"+checado(type_alop_text)+"</b></td>";
  strName0 += "<td width=\"40%\" align=\"center\">RASURADO:&nbsp;<b>"+checado(type_razurado)+"</b></td>";
    strName0 += "<td width=\"30%\" align=\"center\">PATOLOGIA:&nbsp;<b>"+checado(patologi)+"</b></td>";
  strName0 += "</tr>";
 
   strName0 += "</table >";
      strName0 +="<table width=\"100%\">";
  
  strName0 +="<tr>";
  strName0 +="<td width=\"100%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" font-size=\"10pt\" colspan=\"3\" background-color=\"#346094\">";
  strName0 +="<b>HOJA FRONTAL HAIR</b>";
  strName0 +="</td>";
   strName0 +="</tr>";
  
  strName0 +="<tr>";
  
   strName0 +="<td style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\" width=\"200px\">";
  strName0 +="Fecha de procedimiento: &nbsp;<b>"+ checado(date_pros) + "</b>";
    strName0 +="</td>";
  

  
    strName0 +="<td width=\"100px\" style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";
strName0 +="Procedimiento KHR: <b>&nbsp;"+ checado(Num_pros) + "</b>";
 strName0 +="</td>";
  
  strName0 +="<td width=\"100px\" style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";
strName0 +="Tiras: <b>&nbsp;"+ checado(Num_tiras) + "</b>";
 strName0 +="</td>";

   strName0 +="</tr>";
   strName0 +="</table>";

  strName0+="</div>";

   strName0 += "<pbr/>";
  strName0 += "<br/>";
  strName0+="<table width=\"100%\"><tr><td width=\"33%\"></td><td width=\"34%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" background-color=\"#346094\" align=\"center\"><b>FORMATO DE VALORACIÓN</b></td><td width=\"33%\"></td></tr></table>"; 


  strName0 +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif;\" font-size=\"10pt\">";
  strName0 +="<tr>";
  strName0 +="<td>";
  strName0 +="<br/>";
  strName0 +="</td>";
  strName0 +="</tr>";
  strName0 +="<tr>";
  strName0 +="<td width=\"33%\" align=\"center\">Foto antes del injerto" + img_val_1 + "</td>";
  strName0 +="<td width=\"33%\" align=\"center\" valign=\"middle\"></td>";
  strName0 +="<td width=\"33%\" align=\"center\">Foto antes del injerto" + img_val_2 + "</td>";
  strName0 +="</tr>";
  strName0 +="<tr>";
  strName0 +="<td>";
  strName0 +="<br/>";
  strName0 +="</td>";
  strName0 +="</tr>";
  strName0 += "</table>";

  strName0 +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif;\" font-size=\"10pt\" >";
  strName0 +="<tr>";
  strName0 +="<td width=\"77%\"  align=\"center\">Foto Preliminar" + img_val_3 + "</td>";
  strName0 +="<td width=\"32%\" align=\"center\" valign=\"middle\"></td>";
  strName0 +="<td width=\"77%\"  align=\"center\">Coronilla" + img_val_4 + "</td>";
  strName0 +="</tr>";
  strName0 +="<tr>";
  strName0 +="<td width=\"277px\" align=\"center\" valign=\"middle\"></td>";
  strName0 +="<td width=\"300px\" align=\"center\" valign=\"middle\">"+firma+"</td>";
  strName0 +="<td  width=\"277px\" align=\"center\" valign=\"middle\"></td>";
  strName0 +="</tr>";
     strName0 += "</table>";
     strName0 +="<br/><br/><br/><br/>";
    strName0 +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif;\" font-size=\"10pt\" >";  
  strName0 +="<tr>";
  strName0 +="<td width=\"277px\" align=\"center\" valign=\"middle\"></td>";
  strName0 +="<td width=\"300px\" align=\"center\" valign=\"middle\"><u>"+checado(name)+"</u></td>";
  strName0 +="<td  width=\"277px\" align=\"center\" valign=\"middle\"></td>";
  strName0 +="</tr>";
  strName0 +="<tr>";
  strName0 +="<td width=\"277px\" align=\"center\" valign=\"middle\"></td>";
  strName0 +="<td width=\"300px\" align=\"center\" valign=\"middle\"><b>Nombre y firma del paciente</b></td>";
  strName0 +="<td  width=\"277px\" align=\"center\" valign=\"middle\"></td>";
  strName0 +="</tr>";
  strName0 += "</table>";
  
  //-------------------//////////////////////////////////////////////////////////////////////////////////////////////////////////////////1374
  
  var strName = "";
  if(record2!=null){
  strName += "<br/>";
  // strName +="<br/>";
  strName +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif\"  font-size=\"8.8pt\">";
  strName +="<tr>";
  strName += "<td style=\"align:center\" font-size=\"10pt\"><b>Aviso de Privacidad</b></td>";
  strName +="</tr>";
  
   strName +="<tr>";
  strName += "<td style=\"align:center\"><b>Kaloni Colombia S.A.S. (KALONI)</b>, con domicilio en Carrera 9N.      113-52,     Edificio   Torres   Unidas   2.     Centro Empresarial Santa  Bárbara, en la ciudad  de  Bogotá D.C.,  Colombia, es responsable de recabar  sus datos personales, del uso que se le dé a los mismos y de su protección,  de acuerdo  con el ordenamiento jurídico colombiano, con fundamento  en la ley  1266 de 2008 y la ley  1581  de 2012. </td>";
  strName +="</tr>";
  
  
     strName +="<tr>";
  strName += "<td style=\"align:center\">Su  información  personal será utilizada para  (i)  proveer  los servicios y productos  que  ha solicitado, (ii)  informarle sobre  cambios en  los mismos y  (iii)   evaluar  la  calidad  del  servicio que  le  brindamos. Para las  finalidades antes  mencionadas,  requerimos obtener los siguientes  datos personales y datos personales sensibles:</td>";
  strName +="</tr>";
  
  strName +="<tr>";
  strName += "<td style=\"align:center\">";
   strName +="<ul>";
    strName +="<li>1.Nombre Completo</li>";
   strName +="<li>2.Fecha de Nacimiento</li>";
   strName +="<li>3.Domicilio, Calle, Número Interior, Número Exterior, Barrio, Municipio o Departamento,  Entidad Corporativa  y Código  Postal.</li>";
   strName +="<li>4.Teléfono Fijo y Teléfono Móvil</li>";
   strName +="<li>5.E-mail.</li>";
    strName +="</ul>";
  strName +="</td></tr>";
  
    strName +="<tr>";
  strName += "<td style=\"align:center\">Del mismo modo,  considerados como  datos sensibles según la Ley 1266/08 de Protección de  Datos Personales, requerimos de su parte  los siguientes  documentos:</td>";
  strName +="</tr>";
  
    strName +="<tr>";
  strName += "<td style=\"align:center\">";
   strName +="<ul>";
    strName +="<li>Fotografías varias según el procedimiento.</li>";
   strName +="<li>Historia Medica:  Tabaquismo,  Hepatitis, Diabetes, Sanguíneos, Cirugías Anteriores,  Estado de  Embarazo/Lactancia,  Que medicamentos toma actualmente,  Alcohol, Tabaquismo, Renales, Cardiovasculares y Alergias.</li>";
    strName +="</ul>";
  strName +="</td></tr>";
 
  strName +="<tr>";
  strName += "<td style=\"align:center\">Nos comprometemos  a  que  los mismos serán tratados  bajo  medidas  de  seguridad  administrativas, técnicas  y físicas contra daño,   pérdida,   alteración,   destrucción    o   el   uso,   acceso    o   tratamiento    no   autorizado,   siempre   garantizando    su confidencialidad.  En  caso de  requerimiento de  alguna autoridad, los datos personales y/o datos  sensibles podrán  ponerse a disposición de éstas,  únicamente si se hiciera estrictamente  necesario en  cumplimiento de la Ley.Si  acepta  la presente autorización, sus datos personales serán incluidos en nuestra base de datos con la siguiente finalidad:</td>";
  strName +="</tr>";
  
   strName +="<tr>";
  strName += "<td style=\"align:center\">";
   strName +="<ul>";
    strName +="<li>Dar cumplimiento a obligaciones contractuales.</li>";
   strName +="<li>Informar acerca  de cambios sobre nuestros productos y servicios. Evaluar la calidad de los productos o servicios ofrecidos. </li>";
   strName +="<li>Seguridad de nuestras instalaciones.</li>";
   strName +="<li>Proporcionar y compartir información publicitaria y/o  de carácter  comercial. Solicitar productos y servicios requeridos.</li>";
   strName +="<li>Compartir,  incluyendo la transferencia y transmisión de  sus  datos  personales a terceros y a terceros  países para  los fines relacionados con la prestación de nuestros servicios.</li>";
  strName +="<li>Ser evaluado como  proveedor  potencia.</li>";
  strName +="<li>Elaborar y celebrar contratos.</li>";
    strName +="</ul>";
  strName +="</td></tr>";
  
   strName +="<tr>";
  strName += "<td style=\"align:center\">Estas actividades  las podremos  realizar a través de correo  físico,  electrónico,  celular o dispositivo móvil,  vía mensajes de  texto, dispositivos de  captura   de  información  biométrica  o  a  través  de  cualquier  medio  onóloqo  y/o  digital  de  comunicación, conocido o por conocer.</td>";
  strName +="</tr>";
  
   strName +="<tr>";
  strName += "<td style=\"align:center\">Usted tiene derecho  de acceder, rectificar y cancelar sus datos personales, así como  de oponerse al tratamiento  de los mismos o revocar  el consentimiento  que  para  tal fin nos haya  otorgado,  a través de  los procedimientos  que  hemos implementado. Para conocer  dichos  procedimientos,  los requisitos y  plazos,  se puede  poner  en  contacto  con  nuestro  departamento  de Atención  al Cliente dirigiéndose a: Viviana Gil   Teléfonos  7456204/6030/6726  Con  Dirección:  Av. Cra  9 No. 11 3-5 2 Ed.  Torres Unidas           II                          Local            201                 o             visitar            nuestro             sitio            en             internet: <b>kaloni.com</b></td>";
  strName +="</tr>";
  
  
     strName +="<tr>";
  strName += "<td style=\"align:center\">Este   Aviso   de    Privacidad    así   como    cualquier   modificación    al    mismo,    podrá    consultarla    en    nuestro   sitio   en Internet:<b> kaloni.com  </b> Fecha de última actualización [ 19/02/2016 ].</td>";
  strName +="</tr>";
  
   strName +="<tr>";
  strName += "<td style=\"align:center\">Por último, y con la intención de comunicarle sobre productos y servicios que en adelante  puedan ser de su interés, solicitamos su autorización expresa.</td>";
  strName +="</tr>";
  
    strName +="<tr>";
  strName += "<td style=\"align:center\"><br/><br/><br/><br/><br/></td>";
  strName +="</tr>";
 
  
     strName +="<tr>";
  
  strName += "<td style=\"align:center\" font-size=\"10pt\" ><b>Nombre y firma del paciente:&nbsp;</b><u>"+checado(name)+"</u></td>";
  strName +="</tr>";
 
  strName +="</table>";
  
  
   
  //INICIO DE HOJA DE CONSENTIMIENTO INFORMADO, AVISO DE PRIVACIDAD, FOTOGRAFÍAS ANEXADAS ANTES Y DESPUÉS
  strName += "<pbr/>";
  strName +="<br/>";
   strName +="<br/>";
  strName +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif;\" >";
  strName +="<tr>";
  strName += "<td style=\"align:center\"><b>HOJA DE CONSENTIMENTO INFORMADO</b></td>";
  strName +="</tr>";
  strName +="<tr>";
  strName +="<td>";
  strName +="<br/>";
strName +="</td>";
  strName +="</tr>";
  strName +="<tr>";
  strName += "<td style=\"font-family:'Aria', sans-serif\" font-size=\"11pt\" align=\"left\">Colombia<b><u>"+ checado( date_pros) + "</u></b>.</td>";
  strName +="</tr>";
  strName +="<tr>";
  strName += "<td style=\"font-family:'Aria', sans-serif\" font-size=\"11pt\" align=\"right\">Hora <b><u>"+ checado(date_incid) + "</u></b>.</td>";
  strName +="</tr>";
  strName +="<tr>";
  strName +="<td>";
  strName +="<br/>";
  strName +="</td>";
  strName +="</tr>";
  strName +="<tr>";
  strName +="<td>";
  strName +="<p style=\"font-family:'Aria', sans-serif\" font-size=\"11pt\">Yo&nbsp;<b><u>"+checado(name)+"</u></b>&nbsp;por mi propio derecho y en pleno uso de mis facultades, de <b><u>"+ checado(age)+"</u></b>" + " años de edad, declaro libremente que se me informó en forma amplia, clara, precisa y sencilla de los riesgos y beneficios de someterme al procedimiento de injerto de cabello; que he formulado las preguntas que he considerado necesarias y mis dudas han sido atendidas a mi entera satisfacción. He sido informado, igualmente, que puede existir cierta predisposición a presentar respuestas alérgicas, reacciones adversas por idiosincrasia propia a medicamentos utilizados durante mi procedimiento, los cuales pueden desconocerse previamente a la administración de los mismos. Por otro lado, comprendo que la práctica de la medicina y del procedimiento a que se refiere esta carta, no es una ciencia exacta, y por tal motivo reconozco que no se me ha asegurado ni garantizado que el resultado del procedimiento de injerto de cabello necesariamente alcance los beneficios esperados, incluyendo factores fortuitos propios de la idiosincrasia propia de cada paciente.</p>";
  strName +="</td>";
  strName +="</tr>";
  
   strName +="<tr>";
    strName +="<td>";
   strName +="<p>Asimismo, declaro que se me informó y me obligo a cumplir con las indicaciones que se me den respecto a los cuidados que debo tener post-procedimiento, así como a acudir a las citas que me sean asignadas ya que se me ha hecho hincapié en las atenciones necesarias para que los implantes logren el objetivo esperado. Se y estoy de acuerdo en que gran parte del éxito recae en los cuidados de los mismos.</p>";
    strName +="</td>";
   strName +="</tr>";

  strName +="<tr>";
  strName +="<td>";
  strName +="<p style=\"font-family:'Aria', sans-serif\" font-size=\"11pt\">He sido también informado(a) de que mis datos personales serán protegidos e incluidos en un expediente clínico, que deberá estar sometido a las garantías de la Norma aplicable. Asimismo, autorizo la toma de fotografías de la zona con fines clínicos, garantizándose la confidencialidad de mi expediente.</p>";
  strName +="</td>";
  strName +="</tr>";
  
  strName +="<tr>";
  strName +="<td>";
  strName +="<p style=\"font-family:'Aria', sans-serif\" font-size=\"11pt\">Se me ha explicado que durante el procedimiento pueden presentarse imprevistos que varíen el procedimiento original, por consiguiente ante cualquier complicación a efecto adverso durante dicho procedimiento, especialmente ante una urgencia médica autorizo y solicito al médico encargado y sus colaboradores, que realicen los procedimientos médicos que consideren necesarios, en ejercicio de su juicio y experiencia profesional, para la protección de mi salud.</p>";
  strName +="</td>";
  strName +="</tr>";

 strName +="<tr>";
  strName +="<td>";
  strName +="<p style=\"font-family:'Aria', sans-serif\" font-size=\"11pt\">Declaro que todas las explicaciones han sido claras, no tengo dudas al respecto y estoy satisfecho(a) de la información recibida. Comprendido el alcance de los riesgos y beneficios, firmo este consentimiento por mi libre voluntad en presencia de mis testigos y/o familiares sin haber estado sujeto(a) a ningún tipo de presión o coacción para hacerlo, por lo anterior es mi decisión autorizar al médico a someterme al procedimiento de implante de cabello. </p>";
  strName +="</td>";
  strName +="</tr>";
 strName += "<tr>";
 strName += "<td width=\"275\">";
 strName +="<p style=\"font-family:'Aria', sans-serif\" align=\"center\"><b>ATENTAMENTE</b></p>";
 strName += "</td>";
 strName +="</tr>";
strName +="<tr>"
 strName += "<td width=\"275\">";
 strName +="<p style=\"font-family:'Aria', sans-serif\" align=\"center\">"+firma+"</p>";
 strName += "</td>";
 strName +="</tr>";
 strName +="<tr>"
 strName += "<td width=\"275\">";
 strName +="<p style=\"font-family:'Aria', sans-serif\" align=\"center\"><u>"+ checado(name)+"</u></p>";
  strName += "</td>";
  strName +="</tr>";
  strName += "<tr>";
  strName += "<td width=\"275\">";
  strName +="<p style=\"font-family:'Aria', sans-serif\" align=\"center\"><b>Nombre y Firma del Paciente Responsable C.C.</b></p>";
  strName += "</td>";
  strName +="</tr>";
 strName += "<tr>";
 strName += "<td width=\"275\">";
 strName +="<p style=\"font-family:'Aria', sans-serif\" align=\"center\"><b>TESTIGO</b></p>";
 strName += "</td>";
 strName +="</tr>";
strName +="<tr>"
 strName += "<td width=\"275\">";
 strName +="<p style=\"font-family:'Aria', sans-serif\" align=\"center\">"+firma+"</p>";
 strName += "</td>";
 strName +="</tr>";
 strName +="<tr>"
 strName += "<td width=\"275\">";
 strName +="<p style=\"font-family:'Aria', sans-serif\" align=\"center\"><u>"+ checado(name)+"</u></p>";
  strName += "</td>";
  strName +="</tr>";
  strName += "<tr>";
  strName += "<td width=\"275\">";
  strName +="<p style=\"font-family:'Aria', sans-serif\" align=\"center\"><b>Nombre y Firma</b></p>";
  strName += "</td>";
  strName +="</tr>";
  strName += "<tr>";
  strName += "<td width=\"275\">";
    strName +="<p style=\"font-family:'Aria', sans-serif\" align=\"right\"><b>Autor:    </b>"+ checado(medic_valoration)+"</p>";
  strName += "</td>";
  strName +="</tr>";
strName +="</table>";
  }
 
  
  if(record2!=null){//-------------------------------------------------------------------------HOJAS DE PROCEDIMIENTO----------------------------------------------
 strName += "<pbr/>";//INICIA HOJA DE CONTEO KHG
   strName += "<br/>";
      strName+="<table width=\"100%\"><tr><td width=\"33%\"></td><td width=\"34%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" background-color=\"#346094\" align=\"center\"><b>HOJA DE CONTEO KHG</b></td><td width=\"33%\"></td></tr></table>";
  strName += "<p style=\"font-family:'Aria', sans-serif\" font-size=\"9pt\" align=\"right\">FECHA:&nbsp;<b>"+checado(date_pros)+"</b></p>";
  strName += "<p style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>SIGNOS VITALES:</b></p>";
  strName += "<table width=\"100%\" border=\"1px\" style=\"font-size:9pt\" >";
   strName += "<tr style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\"  background-color=\"#346094\">";
  strName += "<td width=\"50\" align=\"center\">";
   strName += "</td>";
  strName += "<td   width=\"167\" align=\"center\"><b>PRE</b>";
   strName += "</td>";
  strName += "<td  width=\"167\" align=\"center\"><b>TRANS</b>";
   strName += "</td>";
  strName += "<td width=\"167\" align=\"center\"><b>POST</b>";
   strName += "</td>";
   strName += "</tr>";
   strName += "<tr style=\"font-family:'Aria', sans-serif\">";
  strName += "<td border=\"1px\"  align=\"center\">T/A";
   strName += "</td>";
  strName += "<td border=\"1px\" align=\"center\">"+checado(TA_PRE)+"";
   strName += "</td>";
  strName += "<td  border=\"1px\"  align=\"center\">"+checado(TA_TRANS)+"";
   strName += "</td>";
  strName += "<td border=\"1px\"  align=\"center\">"+checado(TA_POST)+"";
   strName += "</td>";
   strName += "</tr>";
     strName += "<tr style=\"font-family:'Aria', sans-serif\" background-color=\"#D3D3D3\">";
  strName += "<td  border=\"1px\"  align=\"center\">F.C.";
   strName += "</td>";
  strName += "<td border=\"1px\" align=\"center\">"+checado(FC_PRE)+"";
   strName += "</td>";
  strName += "<td border=\"1px\"  align=\"center\">"+checado(FC_TRANS)+"";
   strName += "</td>";
  strName += "<td  border=\"1px\"  align=\"center\">"+checado(FC_POST)+"";
   strName += "</td>";
   strName += "</tr>";
   strName += "</table>";
   strName += "<table width=\"100%\" style=\"font-family:'Aria', sans-serif\" font-size=\"9pt\" >";
  strName += "<tr  height=\"10px\"><td height=\"10px\"></td></tr>";
   strName += "<tr>";
  strName += "<td width=\"150\" border=\"1px\" style=\"background-color:#f4f4f4\">INFILTRACIÓN";
    strName += "</td>";
    strName += "<td width=\"100\" border=\"1px\" style=\"background-color:#f4f4f4\">";
    strName += "</td>";
  strName += "<td width=\"100\">";
   strName += "</td>";
  strName += "<td width=\"100\" border=\"1px\" style=\"background-color:#f4f4f4\">INICIÓ CORTE";
  strName += "</td>";
  strName += "<td width=\"100\" border=\"1px\" style=\"background-color:#f4f4f4\">"+checado(IN_CORT)+"";
  strName += "</td>";
   strName += "</tr>";
   strName += "<tr>";
   strName += "<td  border=\"1px\" style=\"background-color:#D3D3D3\">INICIÓ EXTRACCIÓN";
    strName += "</td>";
    strName += "<td  border=\"1px\" style=\"background-color:#D3D3D3\">"+checado(IN_EXTR)+"";
    strName += "</td>";
   strName += "<td >";
   strName += "</td>";
  strName += "<td  border=\"1px\" style=\"background-color:#C8C8C8\">TERMINÓ CORTE";
  strName += "</td>";
  strName += "<td  border=\"1px\" style=\"background-color:#C8C8C8\">"+checado(TER_CORT)+"";
  strName += "</td>";
   strName += "</tr>";
  strName += "<tr>";
   strName += "<td  border=\"1px\" style=\"background-color:#C8C8C8\">TERMINÓ EXTRACCIÓN";
    strName += "</td>";
    strName += "<td  border=\"1px\"  style=\"background-color:#C8C8C8\" >"+checado(TER_EXTR)+"";
    strName += "</td>";
   strName += "</tr>";
   strName += "</table>";
  strName += "<p align=\"center\" style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>CONTEO UNIDADES FOLICULARES</b></p>";
   strName +="<table width=\"100%\" border=\"1px\" style=\"font-family:'Aria', sans-serif\" font-size=\"9pt\">";
  strName +="<tr style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\"  background-color=\"#346094\">";
  strName +="<td width=\"10\" align=\"center\">";
  strName +="</td>";
  
   strName +="<td width=\"77\" align=\"center\"><b>1 HR</b>";
  strName +="</td>";
  
   strName +="<td width=\"77\" align=\"center\"><b>2 HRS</b>";
  strName +="</td>";
  
   strName +="<td width=\"77\" align=\"center\"><b>3 HRS</b>";
  strName +="</td>";
  
   strName +="<td width=\"77\" align=\"center\" ><b>4 HRS</b>";
  strName +="</td>";
  
   strName +="<td width=\"77\" align=\"center\" ><b>5 HRS</b>";
  strName +="</td>";
  
   strName +="<td width=\"77\" align=\"center\"><b>SUBTOTAL</b>";
  strName +="</td>";
  
   strName +="<td width=\"77\" align=\"center\"><b>TOTAL</b>";
  strName +="</td>";
  strName +="</tr>";
  //---------------------------------------------------------------------///ingresa lineas aqui tr///--------------------------------------------------------------
  strName+=cadena;
  
     strName +="</table>";
   
  strName +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";
    strName += "<tr  height=\"5px\"><td height=\"5px\"></td></tr>";
  strName +="<tr>";
    strName +="<td width=\"396\" >";
  strName +="</td>";
  strName +="<td width=\"77\" border=\"1px\" style=\"background-color:#f4f4f4\">HOYOS";
  strName +="</td>";
   strName +="<td width=\"77\" border=\"1px\" align=\"center\" valign=\"middle\" style=\"background-color:#f4f4f4\">"+checado(FOLI_V_NV)+"";
   strName +="</td>";
  strName +="</tr>";
   strName +="<tr>";
  strName +="<td>";
  strName +="</td>";
  strName +="<td>";
  strName +="</td>";
  strName +="<td border=\"1px\" align=\"right\" style=\"background-color:#C8C8C8\">"+PERCEN+"%";
  strName +="</td>";
  strName +="</tr>";
  strName +="</table>";
   // strName +="<p></p>";
  strName +="<table>";
  strName +="<tr>";
  strName +="<td>";
   strName +="<table width=\"400\"  style=\"font-family:'Aria', sans-serif\" font-size=\"8pt\">";
  strName +="<tr><td colspan=\"7\" align=\"center\" style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\" ><b>CONTEO FOLÍCULOS</b></td></tr>";
   strName +="<tr style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\"  background-color=\"#346094\">";
  
  strName +="<td width=\"10\"  align=\"center\" valign=\"middle\">";
   strName +="</td>";
  
   strName +="<td width=\"65\" align=\"center\" valign=\"middle\"><b>1 HRS</b>";
   strName +="</td>";
  
    strName +="<td width=\"65\" align=\"center\" valign=\"middle\"><b>2 HRS</b>";
   strName +="</td>";
  
    strName +="<td width=\"65\" align=\"center\" valign=\"middle\"><b>3 HRS</b>";
   strName +="</td>";
  
     strName +="<td width=\"65\" align=\"center\" valign=\"middle\"><b>4 HRS</b>";
   strName +="</td>";
  
      strName +="<td width=\"65\" align=\"center\" valign=\"middle\"><b>5 HRS</b>";
   strName +="</td>";
  
      strName +="<td width=\"65\" align=\"center\" valign=\"middle\"><b>TOTAL</b>";
   strName +="</td>";

  strName +="</tr>";
strName+=cadena2;
 
   strName +="</table>";
  
 strName +="</td>";

   strName +="<td>";
  strName +="<br/>";
    strName +="<table width=\"120\" style=\"font-family:'Aria', sans-serif\" font-size=\"8pt\">";
   strName +="<tr width=\"120\">";
  strName +="<td align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">INFILTRACIÓN";
  strName +="</td>";
  strName +="</tr>";
  strName +="<tr>";
  strName +="<td align=\"center\" border=\"1px\" style=\"background-color:#f4f4f4\" valign=\"middle\">---";
  strName +="</td>";
    strName +="</tr>";
  strName +="<tr>";
  strName +="<td align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">INICIÓ IMPLANTACIÓN";
  strName +="</td>";
  strName +="</tr>";
  strName +="<tr>";
  strName +="<td align=\"center\"  border=\"1px\" style=\"background-color:#f4f4f4\" valign=\"middle\">"+checado(IN_IMPLA)+"";
  strName +="</td>";
    strName +="</tr>";
  strName +="<tr>";
  strName +="<td align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">TERMINÓ IMPLANTACIÓN";
  strName +="</td>";
  strName +="</tr>";
  strName +="<tr>";
  strName +="<td align=\"center\"  border=\"1px\" style=\"background-color:#f4f4f4\" valign=\"middle\">"+checado(TER_IMPLA)+"";
  strName +="</td>";
    strName +="</tr>";
   strName +="</table>";
   strName +="</td>";
    strName +="</tr>";
  strName +="</table>";
   strName +="<p style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\" align=\"center\"><b>TEMPERATURA *C</b></p>";
   strName +="<table width=\"100%\"  style=\"font-family:'Aria', sans-serif\" font-size=\"8pt\">";
   strName +="<tr height=\"5px\" >";
  strName +="<td width=\"55\" height=\"5px\" align=\"center\"  border=\"1px\" style=\"background-color:#346094\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>-4</b>";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>-3</b>";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>-2</b>";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>-1</b>";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>0</b>";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>1</b>";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>2</b>";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>3</b>";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>4</b>";
  strName +="</td>";
  strName +="</tr>";
  
   strName +="<tr height=\"5px\">";
  strName +="<td width=\"55\" height=\"5px\" align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">PRE";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
  strName +="</tr>";
  
   strName +="<tr height=\"5px\">";
  strName +="<td width=\"55\" height=\"5px\" align=\"center\"  border=\"1px\" valign=\"middle\">TRANS";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\"  valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\"  valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\"  valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\"  valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\"  valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\"  valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\"  valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\"  valign=\"middle\">";
  strName +="</td>";
  strName +="</tr>";
  
   strName +="<tr height=\"5px\">";
  strName +="<td width=\"55\" height=\"5px\" align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">POST";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
   strName +="<td width=\"55\"  align=\"center\"  border=\"1px\" style=\"background-color:#C8C8C8\" valign=\"middle\">";
  strName +="</td>";
  strName +="</tr>";
   strName +="</table>";
   
  
  
   strName +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif\" font-size=\"9pt\">";
   strName +="<tr>";
   strName +="<td width=\"275\">";
   strName +="<table>";
    strName +="<tr>";
  strName +="<td >Equipo Medico:";
  strName +="</td>";
   strName +="</tr>";
  strName +="<tr>";
  strName +="<td><b>Se utilizo la maquina para la insercion de los foliculos del paciente</b>";
  strName +="</td>";
   strName +="</tr>";
    strName +="</table>";
   strName +="</td>";
    strName +="<td width=\"275\">";
  
  strName +="<table>";
  strName +="<tr>";
  strName +="<td>Extrajo:";
  strName +="</td>";
  strName +="<td><b>"+enfer_extra+"</b>";
  strName +="</td>";
  strName +="</tr>";
  
    strName +="<tr>";
  strName +="<td>Implantó:";
  strName +="</td>";
   strName +="<td><b>"+enfer_implan+"</b>";
  strName +="</td>";
  strName +="</tr>";
  strName +="</table>";
  
  
   strName +="</td>";
   strName +="</tr>";
   strName +="</table>";
strName +="<pbr/>";
   strName +="<br/>";
     strName+="<table width=\"100%\"><tr><td width=\"33%\"></td><td width=\"34%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" background-color=\"#346094\" align=\"center\"><b>HOJA DE CONTEO KHG</b></td><td width=\"33%\"></td></tr></table>";
  strName +="<p style=\"font-family:'Aria', sans-serif\" font-size=\"12pt\">No. de expediente:&nbsp;<b>"+checado(id)+"</b></p>";
   strName +="<table  width=\"100%\" style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\" >";
    strName +="<tr>";
   strName +="<td  width=\"50\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>Hora</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>Doctor</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>Viables</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>No Viables</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>Total</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>Porcentaje</b>";
   strName +="</td>";
   strName +="</tr>";
  strName +="<tr height=\"60px\">";
   strName +="<td  width=\"50\"   align=\"center\"  border=\"1px\"  valign=\"middle\"><b>1H</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\"  valign=\"middle\"><b></b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\"  valign=\"middle\"><b>"+checado(totalH1)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"   align=\"center\"  border=\"1px\" valign=\"middle\"><b>"+checado(totalNVH1)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\" valign=\"middle\"><b>"+(totalH1+totalNVH1)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\" valign=\"middle\"><b>"+porcentajes(totalH1,totalNVH1)+"</b>";
   strName +="</td>";
   strName +="</tr>";
  strName +="<tr height=\"60px\">";
   strName +="<td  width=\"50\"   align=\"center\" style=\"background-color:#C8C8C8\"  border=\"1px\"  valign=\"middle\"><b>2H</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\" style=\"background-color:#C8C8C8\"  border=\"1px\"  valign=\"middle\"><b></b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\" style=\"background-color:#C8C8C8\"  border=\"1px\"  valign=\"middle\"><b>"+checado(totalH2)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"   align=\"center\" style=\"background-color:#C8C8C8\"  border=\"1px\" valign=\"middle\"><b>"+checado(totalNVH2)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\" style=\"background-color:#C8C8C8\"  border=\"1px\" valign=\"middle\"><b>"+(totalH2+totalNVH2)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\" style=\"background-color:#C8C8C8\"  border=\"1px\" valign=\"middle\"><b>"+porcentajes(totalH2,totalNVH2)+"</b>";
   strName +="</td>";
   strName +="</tr>";
    strName +="<tr height=\"60px\">";
   strName +="<td  width=\"50\"   align=\"center\"  border=\"1px\"  valign=\"middle\"><b>3H</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\"  valign=\"middle\"><b></b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\"  valign=\"middle\"><b>"+checado(totalH3)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"   align=\"center\"  border=\"1px\" valign=\"middle\"><b>"+checado(totalNVH3)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\" valign=\"middle\"><b>"+(totalH3+totalNVH3)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\" valign=\"middle\"><b>"+porcentajes(totalH3,totalNVH3)+"</b>";
   strName +="</td>";
   strName +="</tr>";
  strName +="<tr height=\"60px\">";
   strName +="<td  width=\"50\"   align=\"center\" style=\"background-color:#C8C8C8\"  border=\"1px\"  valign=\"middle\"><b>4H</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\" style=\"background-color:#C8C8C8\"  border=\"1px\"  valign=\"middle\"><b></b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\" style=\"background-color:#C8C8C8\"  border=\"1px\"  valign=\"middle\"><b>"+checado(totalH4)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"   align=\"center\" style=\"background-color:#C8C8C8\"  border=\"1px\" valign=\"middle\"><b>"+checado(totalNVH4)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\" style=\"background-color:#C8C8C8\"  border=\"1px\" valign=\"middle\"><b>"+(totalH4+totalNVH4)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\" style=\"background-color:#C8C8C8\"  border=\"1px\" valign=\"middle\"><b>"+porcentajes(totalH4,totalNVH4)+"</b>";
   strName +="</td>";
   strName +="</tr>";
  strName +="<tr height=\"60px\">";
   strName +="<td  width=\"50\"   align=\"center\"  border=\"1px\"  valign=\"middle\"><b>5H</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\"  valign=\"middle\"><b></b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\"  valign=\"middle\"><b>"+checado(totalH5)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"   align=\"center\"  border=\"1px\" valign=\"middle\"><b>"+checado(totalNVH5)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\" valign=\"middle\"><b>"+(totalH5+totalNVH5)+"</b>";
   strName +="</td>";
   strName +="<td  width=\"100\"  align=\"center\"  border=\"1px\" valign=\"middle\"><b>"+porcentajes(totalH5,totalNVH5)+"</b>";
   strName +="</td>";
   strName +="</tr>";
    strName +="</table>";
  strName +="<p style=\"font-family:'Aria', sans-serif\" font-size=\"12pt\">Control de Corte</p>";
  
  strName +="<table  width=\"100%\" style=\"font-family:'Aria', sans-serif\" font-size=\"8pt\" >";
  strName +="<tr>";
  strName +="<td width=\"120\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>Nombre</b>";
  strName +="</td>";
  strName +="<td width=\"71\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>1r Hora</b>";
  strName +="</td>";
  strName +="<td width=\"71\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>2a Hora</b>";
  strName +="</td>";
  strName +="<td width=\"71\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>3a Hora</b>";
  strName +="</td>";
  strName +="<td width=\"71\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>4a Hora</b>";
  strName +="</td>";
  strName +="<td width=\"71\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>5a Hora</b>";
  strName +="</td>";
  strName +="<td width=\"71\"  align=\"center\"  border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\" valign=\"middle\"><b>Total</b>";
  strName +="</td>";
  strName +="</tr>";
  
strName+=cadena3;

  strName +="</table>";
   strName +="<br/>";
  strName +="<p style=\"font-family:'Aria', sans-serif\" font-size=\"12pt\">TOTAL DE UNIDADES FOLICULARES:&nbsp;<b>"+checado(total_folic)+"</b></p>";
  //FIN HOJA DE CONTEO KHG
  }
 
  
   
   //-------------------------------------------- INICIO HOJA DE EFERMERIA KHG-----------------------------------------------------------------------
  if(record2!=null){
  strName += "<pbr/>";
  strName += "<br/>";
     strName+="<table width=\"100%\"><tr><td width=\"33%\"></td><td width=\"34%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" background-color=\"#346094\" align=\"center\"><b>HOJA DE ENFERMERÍA KHG</b></td><td width=\"33%\"></td></tr></table>";
   strName += "<p style=\"font-family: 'aria', sans-serif\" font-size=\"10pt\"><b>1.IDENTIFICACIÓN</b></p>";
  strName +="<table width=\"100%\" style=\"font-family: 'aria', sans-serif\" font-size=\"10pt\">";
  strName +="<tr>";
  strName +="<td width=\"275\">";
     strName += "<p>No.Expediente:&nbsp;<b>"+checado(id)+"</b></p>";
  strName +="</td>";
   strName +="<td width=\"275\">";
  strName += "<p align=\"right\">Fecha de incidente:&nbsp;<b>"+checado(date_pros)+"</b></p>";
  strName +="</td>";
  strName +="</tr>";
  strName +="</table>";

   strName += "<table width=\"100%\" style=\"font-family: 'aria', sans-serif\" font-size=\"10pt\">";
   strName += "<tr>";
   strName += "<td width=\"265\">";
  strName += "<p style=\"font-family: 'aria', sans-serif\" font-size=\"10pt\"><b>2.ESTADO DE CONCIENCIA Y FISICO</b></p>";
   strName += "<table width=\"115\" border=\"1px\">";
   strName += "<tr>";
  strName += "<td width=\"97\">Alerta:";
    strName += "</td>";
   // strName += "</td >";
   strName += "<td width=\"18\" valign=\"middle\">" + typeEstado(alerta) +"</td>";
   strName += "</tr>";
     strName += "<tr>";
  strName += "<td style=\"background-color:#C8C8C8\" >Orintado:";
    strName += "</td >";
   strName += "<td valign=\"middle\">" +  typeEstado(orientado) +"";
  strName += "</td >";
   strName += "</tr>";
     strName += "<tr>";
  strName += "<td>Consciente:";
    strName += "</td>";
   strName += "<td valign=\"middle\">" +  typeEstado(conciente)  +"";
  strName += "</td >";
   strName += "</tr>";
     strName += "<tr>";
  strName += "<td style=\"background-color:#C8C8C8\">Tranquilo:";
    strName += "</td>";
   strName += "<td valign=\"middle\">" + typeEstado(tranquilo)  +"";
  strName += "</td >";
   strName += "</tr>";
     strName += "<tr>";
  strName += "<td >Ansioso:";
    strName += "</td>";
   strName += "<td valign=\"middle\">" + typeEstado(ansioso )  +"";
  strName += "</td >";
   strName += "</tr>";
     strName += "<tr>";
  strName += "<td style=\"background-color:#C8C8C8\">Letárgico:";
    strName += "</td>";
   strName += "<td valign=\"middle\">" + typeEstado(letargico) +"";
  strName += "</td >";
   strName += "</tr>";
     strName += "<tr>";
  strName += "<td>Nerviso:";
    strName += "</td>";
   strName += "<td valign=\"middle\">" +  typeEstado(nervioso) +"";
  strName += "</td >";
   strName += "</tr>";
  strName += "<tr>";
  strName += "<td style=\"background-color:#C8C8C8\">Otro:&nbsp;<b>"+ typeEstado(otro)+"</b>";
    strName += "</td>";
   strName += "<td >";
  strName += "</td >";
   strName += "</tr>";
   strName += "</table>";
   strName += "</td>";
 strName += "<td width=\"10\">";
  strName += "</td>";
   strName += "<td width=\"240\">";
  strName +="<p><b>3.SIGNOS VITALES</b></p>";
  strName += "<table border=\"1px\" style=\"font-size:8pt\" >";

     strName += "<tr>";
   strName += "<td align=\"center\" border=\"1px\" width=\"60\" style=\"background-color:#346094\" color=\"#FFFFFF\"><b>Operatorio</b>";
   strName += "</td>";
   strName += "<td align=\"center\" border=\"1px\" width=\"60\" ><b>PRE</b>";
   strName += "</td>";
   strName += "<td align=\"center\" border=\"1px\" width=\"60\" ><b>TRANS</b>";
   strName += "</td>";
   strName += "<td align=\"center\" border=\"1px\" width=\"60\" ><b>POST</b>";
   strName += "</td>";
   strName += "</tr>";

    strName += "<tr>";
   strName += "<td align=\"center\" border=\"1px\" style=\"background-color:#346094\" color=\"#FFFFFF\"><b>F.C.</b>";
   strName += "</td>";
   strName += "<td align=\"center\" border=\"1px\" style=\"background-color:#C8C8C8\">"+checado(FC_PRE)+"";
   strName += "</td>";
   strName += "<td align=\"center\" border=\"1px\" style=\"background-color:#C8C8C8\">"+checado(FC_TRANS)+"";
   strName += "</td>";
   strName += "<td align=\"center\" border=\"1px\" style=\"background-color:#C8C8C8\">"+checado(FC_POST)+"";
   strName += "</td>";
   strName += "</tr>";

   strName += "<tr>";
   strName += "<td align=\"center\" border=\"1px\"  valign=\"middle\" style=\"background-color:#346094\" color=\"#FFFFFF\"><b>T/A mmHg</b>";
   strName += "</td>";
   strName += "<td align=\"center\" border=\"1px\" style=\"background-color:#D3D3D3\">"+checado(TA_PRE)+"";
   strName += "</td>";
   strName += "<td align=\"center\" border=\"1px\" style=\"background-color:#D3D3D3\">"+checado(TA_TRANS)+"";
   strName += "</td>";
   strName += "<td align=\"center\" border=\"1px\" style=\"background-color:#D3D3D3\">"+checado(TA_POST)+"";
   strName += "</td>";
  strName += "</tr>";
     strName += "</table>";
 
    strName +="<p><b>4.TOMA DE FOTOGRAFIAS</b></p>";
   strName += "<table border=\"1px\" width=\"240\">";
   strName += "<tr>";
  strName += "<td  colspan=\"2\"  border=\"1px\" style=\"color:#FFFFFF\" background-color=\"#346094\"><b>PROTOCOLO DE FOTOGRAFIAS</b>";
   strName += "</td>";
  strName += "<td>";
  strName += "</td>";
   strName += "</tr>";
  
   strName += "<tr>";
   strName += "<td  border=\"1px\"  width=\"30\" >Inicio";
   strName += "</td>";
  strName += "<td  border=\"1px\"  width=\"210\"><b>"+checado(foto_in)+"</b>";
  strName += "</td>";
   strName += "</tr>";
    strName += "<tr>";
   strName += "<td  border=\"1px\"  width=\"30\" style=\"background:#C8C8C8\">Final";
   strName += "</td>";
  strName += "<td  border=\"1px\"  width=\"210\" style=\"background:#C8C8C8\"><b>"+checado(foto_fin)+"</b>";
  strName += "</td>";
   strName += "</tr>";

   strName += "</table>";

   strName += "</td>";
   strName += "</tr>";
   strName += "</table>";

  strName += "<table width=\"100%\" style=\"font-family:'aria', sans-serif\" font-size=\"10pt\">";
   strName += "<tr>";
   strName += "<td width=\"270\">";
   strName += "<p><b>5.ANESTESIA</b></p>";
   strName += "<table width=\"270\" border=\"1px\">";
   strName += "<tr>";
  strName += "<td style=\"background:#346094\" color=\"#FFFFFF\"><b>Zona donadora:</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Anestésico:&nbsp;<b>"+checado(Anes_anes)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\">Infiltró:&nbsp;<b>"+checado(Anes_infiltro)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Hora de inicio:&nbsp;<b>"+checado(Anes_horain)+"</b>&nbsp;Hora de término:&nbsp;<b>"+checado(Anes_horafin)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td style=\"background:#346094\" color=\"#FFFFFF\"><b>Zona a implantar:</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Anestésico:&nbsp;<b>"+checado(Anes_anes2)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\">Infiltró:&nbsp;<b>"+checado(Anes_infiltro2)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Hora de inicio:&nbsp;<b>"+checado(Anes_horain2)+"</b>&nbsp;Hora de término:&nbsp;<b>"+checado(Anes_horafin2)+"</b></td>";
   strName += "</tr>";

   strName += "</table>";
   strName += "</td>";
   strName += "<td width=\"10\">";
   strName += "</td>";

  strName += "<td width=\"270\">";
  strName += "<p><b>6.ANTISEPSIA</b></p>";
     strName += "<table width=\"270\" border=\"1px\">";
   strName += "<tr>";
  strName += "<td style=\"background:#346094\" color=\"#FFFFFF\"><b>Zona donadora:</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Realizó:&nbsp;<b>"+checado(Anti_Realizo)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\">Región:&nbsp;<b>"+checado(Anti_Region)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Antiséptico:&nbsp;<b>"+checado(Antiseptico)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td style=\"background:#346094\" color=\"#FFFFFF\"><b>Zona a implantar:</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Realizó:&nbsp;<b>"+checado(Anti_Realizo2)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\">Región:&nbsp;<b>"+checado(Anti_Region2)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Antiséptico:&nbsp;<b>"+checado(Antiseptico2)+"</b></td>";
   strName += "</tr>";

   strName += "</table>";

   strName += "</td>";
   strName += "</tr>";
   strName += "</table>";

 
    strName += "<table width=\"100%\" style=\"font-family:'aria', sans-serif\" font-size=\"10pt\">";
   strName += "<tr>";
   strName += "<td width=\"270\">";
  strName += "<p><b>7.PROCEDIMIENTO</b></p>";
   strName += "<table width=\"270\" border=\"1px\">";
   strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\">Médico Responsable:&nbsp;<b>"+checado(asigMedicos)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Enfermero responsable:&nbsp;<b>"+checado(enfermero1)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\">Enfermero responsable:&nbsp;<b>"+checado(enfermero2)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Responsable de Tricotomía:&nbsp;<b>"+checado(enfer_trico)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\" >Tipo:&nbsp;<b>"+checado(type_razurado)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Responsable de extracción:&nbsp;<b>"+checado(asigMedicos)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\">Hora de inicio:&nbsp;<b>"+checado(IN_EXTR)+"</b>&nbsp;Hora de término:&nbsp;<b>"+checado(TER_EXTR)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Conteo de unidades foliculares:&nbsp;<b></b></td>";
   strName += "</tr>";
    strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\">Hora de inicio:&nbsp;<b>"+checado(IN_CORT)+"</b>&nbsp;Hora de término:&nbsp;<b>"+checado(TER_CORT)+"</b></td>";
   strName += "</tr>";
    strName += "<tr>";
  strName += "<td>Responsable de implantación:&nbsp;<b>"+checado(enfer_implan)+"</b></td>";
   strName += "</tr>";
    strName += "<tr>";
   strName += "<td style=\"background:#C8C8C8\">Hora de inicio:&nbsp;<b>"+checado(IN_IMPLA)+"</b>&nbsp;Hora de término:&nbsp;<b>"+checado(TER_IMPLA)+"</b></td>";
   strName += "</tr>";

   strName += "</table>";
   strName += "</td>";
   strName += "<td width=\"10\">";
   strName += "</td>";

  strName += "<td width=\"270\">";
  strName += "<p><b>8.MUESTRA DE SANGRE Y PRP</b></p>";
     strName += "<table width=\"270\" border=\"1px\">";
   strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\" >Responsable:&nbsp;<b>"+checado(respon)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Equipo utilizado:&nbsp;<b>"+checado(equi)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\">Sitio de punción:&nbsp;<b>"+checado(sitioPun)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Número de intentos:&nbsp;<b>"+checado(no_inten)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\" >Tubos obtenidos:&nbsp;<b>"+checado(tubos)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Centrifugados a:&nbsp;<b>"+checado(centrifugados)+"rpm</b>&nbsp;Tiempo:&nbsp;<b>"+checado(tiempo)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\">Responsable de PRP:&nbsp;<b>"+checado(responPRP1)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Región:&nbsp;<b>"+checado(regionPRP1)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td style=\"background:#C8C8C8\">Responsable de PRP:&nbsp;<b>"+checado(responPRP2)+"</b></td>";
   strName += "</tr>";
   strName += "<tr>";
  strName += "<td>Región:&nbsp;<b>"+checado(regionPRP2)+"</b></td>";
   strName += "</tr>";
   strName += "</table>";
   strName += "</td>";
   strName += "</tr>";
   strName += "</table>";
  strName += "<table>";
   strName += "<tr>";
   strName += "<td>";
  strName += "</td>";
   strName += "</tr>";
   strName += "</table>";
  }
   //-------------------------------------------- FIN HOJA DE EFERMERIA KHG-----------------------------------------------------------------------

  
   //NOTA POS-PROCEDIMIENTO
  if(record2!=null){
   strName +="<pbr/>";
     strName +="<div style=\"font-size:10pt\">";
   strName +="<br/>";
      strName += "<p width=\"100%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\"  background-color=\"#346094\" align=\"center\"><b>Nota Posprocedimiento</b></p>";
   strName += "<table width=\"100%\">";
 strName += "<tr>";
    strName += "<td width=\"250\">";
     strName += "<table width=\"250\">";
    strName += "<tr><td  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>PACIENTE: &nbsp;</b>" + checado(name)+"</td></tr>";
    strName += "<tr><td  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>FECHA DE PROCEDIMIENTO: &nbsp;</b>" +checado( date_pros) + "</td></tr>";
    strName += "<tr><td  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>FOLICULOS: &nbsp;</b>" + checado( FOLI_V_NV )+ "</td></tr>";
    strName += "<tr><td  style=\"font-family:'Aria', sans-serif\"  font-size=\"10pt\"><b>CABELLOS PROYECTADOS: &nbsp;</b>" + checado(proyectados)+ "</td></tr>";
    strName += "<tr><td  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>AREA IMPLANTADA: &nbsp;</b>" +checado( DATEPOST) + "</td></tr>";
    strName += "<tr><td  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>INICIO DE EXTRACCIÓN: &nbsp;</b>" +checado( IN_EXTR )+ "</td></tr>";
    strName += "<tr><td  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>INICIO DE IMPLANTACIÓN: &nbsp;</b>" +checado( IN_IMPLA) + "</td></tr>";
     strName += "</table>";
  strName += "</td>";
    strName += "<td width=\"250\">";
      strName += "<table width=\"250\">";
   strName += "<tr><td style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>EDAD: &nbsp;</b>" +checado( age) +"</td></tr>";
 strName += "<tr><td style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>UNIDADES FOLICULARES: &nbsp;</b>" + checado( total_folic ) + "</td></tr>";
 strName += "<tr><td style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>TERMINO DE EXTRACCIÓN: &nbsp;</b>" + checado(TER_EXTR )+ "</td></tr>";
    strName += "<tr><td style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>TERMINO DE IMPLANTACIÓN: &nbsp;</b>" +checado( TER_IMPLA) + "</td></tr>";
     strName += "</table>";
    
      strName += "</td>";
     strName += "</tr>";
    strName += "</table>";
    
      strName += "<table width=\"100%\">";
    strName += "<tr>";
    strName += "<td width=\"200\"  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>T/A: &nbsp;</b>" + checado(TA_PRE) + "</td>";
  strName += "<td width=\"200\"  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>F/C: &nbsp;</b>" +checado( FC_PRE) + "</td>";
  strName += "<td width=\"200\"  style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\"><b>F/R: &nbsp;</b>" + checado(FC_TRANS)+ "</td>";
  strName += "</tr>"
  strName += "</table>";
  strName +="<br/>";
  strName += "<table width=\"100%\">";
  strName += "<tr>";
  strName +="<td style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";
  strName +="<p>Inicia protocolo de implante de cabello con técnica KHG se realiza tricotomía de región occipital. Personal de enfermería toma muestra de sangre para extracción de plasma.Previa administración de medicamentos, asepsia, antisepsia e infiltración de xilocaina al 1% con epinefrina en zona donadora, se realiza extracción de unidades foliculares con micro extractor folicular de 1MM. Tras ofrecerle un ligero refrigerio al paciente se realiza propuesta de diseño, mismo que se fotografía y firma de conformidad. Se procede a la colocación de las unidades foliculares para aumentar densidad. Se da por terminado el procedimiento mediante instrucción estricta de los cuidados posteriores escritas y verbales. Se da receta y cita para los próximos 10 días. Egresa paciente en perfectas condiciones.</p>";
  strName +="</td>";
  strName +="</tr>";
  strName += "</table>";

  strName +="<br/>";
  strName += "<table width=\"100%\">";
  strName += "<tr>";
  strName += "<td width=\"275\"  style=\"font-family:'Aria', sans-serif\">INCIDENTES DE IMPORTANCIA: &nbsp;<b>"+checado(inciImport)+"</b></td>";
  strName += "</tr>";
  strName += "<tr>";
  strName += "<td><br/></td>";
  strName += "</tr>";
  strName += "<tr>";
  strName += "<td width=\"275\"  style=\"font-family:'Aria', sans-serif\">EQUIPO MEDICO ENFERMERIA: &nbsp;<b>"+checado(equi)+"</b></td>";
  strName += "</tr>";
  strName += "</table>";
 strName += "</div>";
  } 
//-----FIN NOTA POST-PROCEDIMIENTO-----
    
//---------------------DISEÑO EN SALA DE PROCEDIMIENTO---------------------------------
if(record2!=null){
  strName +="<pbr/>";
  strName +="<br/>";
  strName+="<table width=\"100%\"><tr><td width=\"43%\"></td><td width=\"70%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" background-color=\"#346094\" align=\"center\">DISEÑO EN SALA DE PROCEDIMIENTO</td><td width=\"43%\"></td></tr></table>";

  strName +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif;\">";
  strName +="<tr>";
  strName +="<td>";
  strName +="<br/>";
  strName +="</td>";
  strName +="</tr>";
  strName += "<tr><td width=\"50%\" style=\"font-family:'Aria', sans-serif\" align=\"center\" font-size=\"10pt\"><b>NOMBRE DEL PACIENTE: &nbsp;</b>" + checado(name )+ "&nbsp;"+ checado(date_pros)+ "</td></tr>";
  strName +="</table>";

  strName +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif;\">";
  strName +="<tr>";
  strName +="<td width=\"50%\" align=\"center\">" + imgtry5 + "</td>";
  strName +="<td width=\"30%\" align=\"center\" valign=\"middle\"></td>";
  strName +="<td width=\"50%\" align=\"center\">" + imgtry6 + "</td>";
  strName +="</tr>";
    strName +="<tr>";
  strName +="<td width=\"50%\" align=\"center\">" + imgtry7 + "</td>";
  strName +="<td width=\"30%\" align=\"center\" valign=\"middle\"></td>";
  strName +="<td width=\"50%\" align=\"center\">" + imgtry8 + "</td>";
  strName +="</tr>";
  
  strName += "</table>";


  strName +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif;\">";
  strName +="<tr>";
  strName +="<td>";
  strName +="<br/>";
  strName +="</td>";
  strName +="</tr>";

  strName += "</table>";
  strName += "<p style=\"font-family:'Aria', sans-serif;\">Nota:&nbsp;<b>"+checado(textoimagnes)+"</b></p>";
   strName +="<div>";
   strName +="<table width=\"500\" style=\"font-family:'Aria', sans-serif;\" >";
  strName += "<tr>";
   strName += "<td  style=\"font-family:'Aria', sans-serif\" align=\"center\">"+firma;
  strName += "</td>";
  strName +="<td  style=\"font-family:'Aria', sans-serif\" align=\"center\">"+firma2;
  strName += "</td>";
  strName += "</tr>";
  strName += "<tr>";
   strName += "<td style=\"font-family:'Aria', sans-serif\" align=\"center\" width=\"245\">_________________________________";
  strName += "</td>";
    strName +="<td style=\"font-family:'Aria', sans-serif\" align=\"center\" width=\"245\">_________________________________";
  strName += "</td>";
  strName += "</tr>";
  strName += "<tr>";
  strName += "<td width=\"245\">";
  strName +="<p style=\"font-family:'Aria', sans-serif\" align=\"center\"><b>Firma del Paciente</b></p>";
  strName += "</td>";
  strName += "<td width=\"245\">";
  strName +="<p style=\"font-family:'Aria', sans-serif\" align=\"center\"><b>Firma del Medico</b></p>";
   strName += "</td>";
   strName += "</tr>";
   strName +="</table>";
   strName +="</div>";
  }
//---------FIN DE FOTOS DE DISEÑO EN SALA DE PROCEDIMIENTO
  if(record2!=null){
strName +="<pbr/>";
    strName +="<br/>";
//INICIO DE FOTOS MICROINJERTO
  strName+="<table width=\"100%\"><tr><td width=\"33%\"></td><td width=\"34%\" style=\"font-family:'Aria', sans-serif\" color=\"#FFFFFF\" background-color=\"#346094\" align=\"center\">FOTOS MICROINJERTO</td><td width=\"33%\"></td></tr></table>";

  strName +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif;\" font-size=\"10pt\">";
  strName +="<tr>";
  strName +="<td>";
  strName+="<br/>";
  strName +="</td>";
  strName +="</tr>";
  strName +="<tr>";
  strName +="<td width=\"33%\" align=\"center\">Foto antes del injerto" + imgtry + "</td>";
  strName +="<td width=\"33%\" align=\"center\" valign=\"middle\"></td>";
  strName +="<td width=\"33%\" align=\"center\">Foto despúes del injerto" + imgtry2 + "</td>";
  strName +="</tr>";
  strName +="<tr>";
  strName +="<td>";
  strName +="<br/>";
  strName +="</td>";
  strName +="</tr>";
  strName += "</table>";

  strName +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif;\" font-size=\"10pt\">";
  strName +="<tr>";
  strName +="<td width=\"50%\"  align=\"center\">Foto de Frente" + imgtry3 + "</td>";
  strName +="<td width=\"30%\" align=\"center\" valign=\"middle\"></td>";
  strName +="<td width=\"50%\" align=\"center\">Foto de frente 2" + imgtry4 + "</td>";
  strName +="</tr>";
  strName += "</table>";
     strName +="<br/><br/><br/><br/>";
    strName +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif;\" font-size=\"10pt\" >";  
  strName +="<tr>";
  strName +="<td width=\"277px\" align=\"center\" valign=\"middle\"></td>";
  strName +="<td width=\"300px\" align=\"center\" valign=\"middle\"><u>"+checado(name)+"</u></td>";
  strName +="<td  width=\"277px\" align=\"center\" valign=\"middle\"></td>";
  strName +="</tr>";
  strName +="<tr>";
  strName +="<td width=\"277px\" align=\"center\" valign=\"middle\"></td>";
  strName +="<td width=\"300px\" align=\"center\" valign=\"middle\"><b>Nombre y firma del paciente</b></td>";
  strName +="<td  width=\"277px\" align=\"center\" valign=\"middle\"></td>";
  strName +="</tr>";
  strName += "</table>";
    
  }
  
 if(record2!=null){ 
  strName +="<pbr/>";
    strName +="<br/>";
  // strName +="<div style=\"font-size:10pt\">";
  strName +="<table width=\"100%\">";
  
  strName +="<tr>";
  strName +="<td width=\"100%\" style=\"font-family:'Aria', sans-serif\" align=\"center\" color=\"#FFFFFF\" font-size=\"10pt\" colspan=\"3\" background-color=\"#346094\">";
  strName +="<b>NOTAS MEDICAS</b>";
  strName +="</td>";
   strName +="</tr>";

    strName +="</table>";
  
    strName +="<table style=\"font-family:'Aria', sans-serif\" font-size=\"10pt\">";

  
  strName +="<tr>";
 
strName +="<td >";
  strName +="<br/>";
strName +="</td>";
 strName +="</tr>";
   strName +="</table>";
    strName +="<table  style=\"font-family:'Aria', sans-serif\" text-align=\"left\" font-size=\"10pt\">";
   strName +="<tr>";
  strName +="<td colspan=\"6\" >";
  strName +="<b>REVISIÓNES EFECTUADAS</b>";
  strName +="</td>";
  strName +="</tr>";
  strName +="</table>";

 strName +="<table border=\"1px\" width=\"100%\" style=\"font-family:'Aria', sans-serif;\" background-color=\"#D3D3D3\" font-size=\"10pt\">";

   strName +="<tr>";
   strName +="<td width=\"15px\"  background-color=\"#346094\" >";
   strName +="</td>";

   strName +="<td width=\"60px\" background-color=\"#346094\" >";
   strName +="</td>";

   strName +="<td width=\"80px\" background-color=\"#346094\" color=\"#FFFFFF\" >";
   strName +="<b>Fecha</b>";
   strName +="</td>";

   strName +="<td width=\"360px\" background-color=\"#346094\" color=\"#FFFFFF\" >";
   strName +="<b>Notas Médicas</b>";
   strName +="</td>";
  
  strName +="<td width=\"140px\" background-color=\"#346094\" color=\"#FFFFFF\" >";
   strName +="<b>Tratamiento</b>";
   strName +="</td>";
   strName +="</tr>";
  
  
  strName +="<tr>";
   strName +="<td valign=\"top\">"+dates(horas24)+"";
   strName +="</td>";

   strName +="<td >24 Horas";
   strName +="</td>";

   strName +="<td >";
   strName +=""+checado(horas24)+"";
   strName +="</td>";

   strName +="<td >";
   strName +="<p><u>"+checado(nota24horas)+"</u></p>";
   strName +="</td>";
  
  strName +="<td >";
   strName +=""+checado(medicam1)+"";
   strName +="</td>";
   strName +="</tr>";
  
  strName +="<tr>";
  strName +="<td colspan=\"5\">Nombre del Responsable:"+checado(Responsable1)+"";
    strName +="<hr border=\"1px\"/></td>";
  strName +="</tr>";
  
  
  strName +="<tr>";
   strName +="<td valign=\"top\">"+dates(Day10)+"";
   strName +="</td>";

   strName +="<td >10 Días";
   strName +="</td>";

   strName +="<td >";
   strName +=""+checado(Day10)+"";
   strName +="</td>";

   strName +="<td >";
   strName +="<p><u>"+checado(nota)+"</u></p>";
   strName +="</td>";
  
  strName +="<td >";
   strName +=""+checado(medicam2)+"";
   strName +="</td>";
   strName +="</tr>";
  
  strName +="<tr>";
 strName +="<td colspan=\"5\">Nombre del Responsable:"+checado(Responsable2)+"";
    strName +="<hr border=\"1px\"/></td>";
  strName +="</tr>";
  
    
  strName +="<tr>";
   strName +="<td valign=\"top\">"+dates(Mes1)+"";
   strName +="</td>";

   strName +="<td >1 Mes";
   strName +="</td>";

   strName +="<td >";
   strName +=""+checado(Mes1)+"";
   strName +="</td>";

   strName +="<td >";
   strName +="<p><u>"+checado(nota2)+"</u></p>";
   strName +="</td>";
  
  strName +="<td >";
   strName +=""+checado(medicam3)+"";
   strName +="</td>";
   strName +="</tr>";
  
  strName +="<tr>";
 strName +="<td colspan=\"5\">Nombre del Responsable:"+checado(Responsable3)+"";
   strName +="<hr border=\"1px\"/></td>";
  strName +="</tr>";
 
    
  strName +="<tr>";
   strName +="<td valign=\"top\">"+dates(Mes3)+"";
   strName +="</td>";

   strName +="<td >3 Meses";
   strName +="</td>";

   strName +="<td >";
   strName +=""+checado(Mes3)+"";
   strName +="</td>";

   strName +="<td >";
   strName +="<p><u>"+checado(nota3)+"</u></p>";
   strName +="</td>";
  
  strName +="<td >";
   strName +=""+checado(medicam4)+"";
   strName +="</td>";
   strName +="</tr>";
  
  strName +="<tr>";
 strName +="<td colspan=\"5\">Nombre del Responsable:"+checado(Responsable4)+"";
  strName +="<hr border=\"1px\"/></td>";
  strName +="</tr>";
  
  
    strName +="</table>";
  strName +="<pbr/>";
    strName +="<br/>";
 strName +="<table border=\"1px\" width=\"100%\" style=\"font-family:'Aria', sans-serif;\" background-color=\"#D3D3D3\" font-size=\"10pt\">";
  
     strName +="<tr>";
   strName +="<td width=\"15px\"  background-color=\"#346094\" >";
   strName +="</td>";

   strName +="<td width=\"60px\" background-color=\"#346094\" >";
   strName +="</td>";

   strName +="<td width=\"80px\" background-color=\"#346094\" color=\"#FFFFFF\" >";
   strName +="<b>Fecha</b>";
   strName +="</td>";

   strName +="<td width=\"360px\" background-color=\"#346094\" color=\"#FFFFFF\" >";
   strName +="<b>Notas Médicas</b>";
   strName +="</td>";
  
  strName +="<td width=\"140px\" background-color=\"#346094\" color=\"#FFFFFF\" >";
   strName +="<b>Tratamiento</b>";
   strName +="</td>";
   strName +="</tr>";
  
   strName +="<tr>";
   strName +="<td valign=\"top\">"+dates(Mes6)+"";
   strName +="</td>";

   strName +="<td >5 Meses";
   strName +="</td>";

   strName +="<td >";
   strName +=""+checado(Mes6)+"";
   strName +="</td>";

   strName +="<td >";
   strName +="<p><u>"+checado(nota4)+"</u></p>";
   strName +="</td>";
  
  strName +="<td >";
   strName +=""+checado(medicam5)+"";
   strName +="</td>";
   strName +="</tr>";
  
  strName +="<tr>";
 strName +="<td colspan=\"5\">Nombre del Responsable:"+checado(Responsable5)+"";
   strName +="<hr border=\"1px\"/></td>";
  strName +="</tr>";
  

  strName +="<tr>";
   strName +="<td valign=\"top\">"+dates(Mes10)+"";
   strName +="</td>";

   strName +="<td >7 Meses";
   strName +="</td>";

   strName +="<td >";
   strName +=""+checado(Mes10)+"";
   strName +="</td>";

   strName +="<td >";
   strName +="<p><u>"+checado(nota10)+"</u></p>";
   strName +="</td>";
  
  strName +="<td >";
   strName +=""+checado(medicam10)+"";
   strName +="</td>";
   strName +="</tr>";
  
  strName +="<tr>";
 strName +="<td colspan=\"5\">Nombre del Responsable:"+checado(Responsable6)+"";
 strName +="<hr border=\"1px\"/></td>";
  strName +="</tr>";

  strName +="<tr>";
   strName +="<td valign=\"top\">"+dates(Mes9)+"";
   strName +="</td>";

   strName +="<td >9 Meses";
   strName +="</td>";

   strName +="<td >";
   strName +=""+checado(Mes9)+"";
   strName +="</td>";

   strName +="<td >";
   strName +="<p><u>"+checado(nota5)+"</u></p>";
   strName +="</td>";
  
  strName +="<td >";
   strName +=""+checado(medicam6)+"";
   strName +="</td>";
   strName +="</tr>";
  
  strName +="<tr>";
 strName +="<td colspan=\"5\">Nombre del Responsable:"+checado(Responsable6)+"";
 strName +="<hr border=\"1px\"/></td>";
  strName +="</tr>";
  
  strName +="<tr>";
   strName +="<td valign=\"top\">"+dates(Mes12)+"";
   strName +="</td>";

   strName +="<td >12 Meses";
   strName +="</td>";

   strName +="<td >";
   strName +=""+checado(Mes12)+"";
   strName +="</td>";

   strName +="<td >";
   strName +="<p><u>"+checado(nota6)+"</u></p>";
   strName +="</td>";
  
  strName +="<td >";
   strName +=""+checado(medicam7)+"";
   strName +="</td>";
   strName +="</tr>";
  
  strName +="<tr>";
  strName +="<td colspan=\"5\">Nombre del Responsable:"+checado(Responsable7)+"";
 strName +="<hr border=\"1px\"/></td>";
  strName +="</tr>";
  
    strName +="<tr>";
 
   strName +="<td valign=\"top\">"+dates(Mes14)+"";
   strName +="</td>";

   strName +="<td >14 Meses";
   strName +="</td>";

   strName +="<td >";
   strName +=""+checado(Mes14)+"";
   strName +="</td>";

   strName +="<td >";
   strName +="<p><u>"+checado(nota7)+"</u></p>";
   strName +="</td>";
  
  strName +="<td >";
   strName +=""+checado(medicam8)+"";
   strName +="</td>";
   strName +="</tr>";

  strName +="<tr>";
   strName +="<td colspan=\"5\">Nombre del Responsable:"+checado(Responsable8)+"";
   strName +="</td>";
  strName +="</tr>";
   strName +="</table>";
 
/*  strName +="<table width=\"100%\" style=\"font-family:'Aria', sans-serif;\" font-size=\"10pt\">";
  strName +="<tr>";
  strName +="<td>";
  strName +="Referencias importantes:";
  strName +="</td>";
  strName +="</tr>";
  strName +="<tr>";
  strName +="<td border=\"1px\" width=\"100%\" height=\"100px\">";
  strName +=""+checado(Ref_imp)+"";
  strName +="</td>";
   strName +="</tr>";
  strName +="</table>";*/

 }
    
  // strName+="</div>";
  
 
  
  

    var xml = "<?xml version=\"1.0\"?>\n<!DOCTYPE pdf PUBLIC \"-//big.faceless.org//report\" \"report-1.1.dtd\">";
  xml += "<pdfset>";
xml += "<pdf>";
xml += "<head>";
xml += "<macrolist>";
 xml += "<macro id=\"myheader\">";
 
    xml += "<img height=\"100px\" width=\"220px\" align=\"center\" src=\"";
var path = "https://system.na2.netsuite.com/core/media/media.nl?id=752437&c=3559763&h=76856f6be6d66be1d53c";
    xml += nlapiEscapeXML(path);
    xml += "\"></img>";

xml += "</macro>";
//xml += "<macro  id=\"myfooter\">";
// xml+="<img align=\"riegth\"  height=\"80\" width=\"540\"  src=\""+nlapiEscapeXML(footer_image)+"\"></img>";
//xml += "</macro>";
xml += "</macrolist>";
xml += "</head>";//
xml+="<body  background-image=\""+nlapiEscapeXML(water)+"\" header=\"myheader\"  header-height=\"15mm\">";
 xml+="&nbsp;";
 xml += strName0;
  xml += "</body>\n</pdf>";
 if(DOCPDFPRE!=null)
xml+="<pdf src='"+ nlapiEscapeXML(DOCPDFPRE)+"'/>";
  xml+="<pdf>";
  
  xml += "<head>";
xml += "<macrolist>";
 xml += "<macro id=\"myheader\">";
 
    xml += "<img height=\"100px\" width=\"220px\" align=\"center\" src=\"";
var path = "https://system.na2.netsuite.com/core/media/media.nl?id=752437&c=3559763&h=76856f6be6d66be1d53c";
    xml += nlapiEscapeXML(path);
    xml += "\"></img>";

xml += "</macro>";

xml += "</macrolist>";
xml += "</head>";//
xml+="<body  background-image=\""+nlapiEscapeXML(water)+"\"  header=\"myheader\"  header-height=\"15mm\">"+strName;
xml += "</body>\n</pdf>";
  xml += "</pdfset>";
    var root = nlapiXMLToPDF(xml);

  //----------------------se obtinene la carpet o se verifica que exista---------
var folderP = nlapiCreateRecord('folder');
var parentP = folderP.getField('parent');
var folderPath = parentP.getSelectOptions("EXP_COL");
  if(folderPath.length!=0){
     var idPath=folderPath[0].getId();
      var folderP2 = nlapiCreateRecord('folder');
      var parentP1 = folderP2.getField('parent');
      var busca=sucursal+"_HAIR";
      var folderSubP = parentP1.getSelectOptions(busca);

   if(folderSubP.length!=0){
     var idPathSub=folderSubP[0].getId();
     var folderC = nlapiCreateRecord('folder');
var parentC = folderC.getField('parent');

var folderList = parentC.getSelectOptions(id+"_FOLDER");
  if(folderList.length!=0){
    var idsfol=folderList[0].getId();

         try{
        var v=record.getFieldValue('custentity114');
    var test=parseInt(v);
   var idmy= nlapiDeleteFile(test);
         }catch(e){}
 root.setFolder(idsfol);
root.setName('EXP_'+ id +'.pdf');
var myPDFfileID = nlapiSubmitFile(root);
    var n = myPDFfileID.toString();
  var LOADfile = nlapiLoadFile(myPDFfileID);
  var urlpdf= LOADfile.getURL();

record.setFieldValue('custentity293',urlpdf);
record.setFieldValue('custentity114',n);
  nlapiSubmitRecord(record);

try{
  
  
 /*   var folder3 = nlapiCreateRecord('folder');
    folder3.setFieldValue('name',id+'_MICROCAMARA');
    folder3.setFieldValue('parent',idsfol);
    var parentFolderId = nlapiSubmitRecord(folder3,true);
     var folder4 = nlapiCreateRecord('folder');
    folder4.setFieldValue('name',id+'_FOTOS_ENFERMERIA');
    folder4.setFieldValue('parent',idsfol);
    var parentFolderId = nlapiSubmitRecord(folder4,true);
    */
   
  
  var FOLD24H = nlapiCreateRecord('folder');
    FOLD24H.setFieldValue('name','R24HORAS');
    FOLD24H.setFieldValue('parent',idsfol);
    var ID_FOL_24H= nlapiSubmitRecord(FOLD24H,true);

    
             var FMICRO24H = nlapiCreateRecord('folder');
             FMICRO24H.setFieldValue('name','MC1');
             FMICRO24H.setFieldValue('parent',ID_FOL_24H);
             var ID_FOL_24H_MICRO = nlapiSubmitRecord(FMICRO24H,true);

    var FOLD10D = nlapiCreateRecord('folder');
    FOLD10D.setFieldValue('name','R10DIAS');
    FOLD10D.setFieldValue('parent',idsfol);
    var ID_FOL_10D= nlapiSubmitRecord(FOLD10D,true);
    
              var FMICRO10D = nlapiCreateRecord('folder');
             FMICRO10D.setFieldValue('name','MC2');
             FMICRO10D.setFieldValue('parent',ID_FOL_10D);
             var ID_FOL_10D_MICRO = nlapiSubmitRecord(FMICRO10D,true);
    
    var FOLD1MES = nlapiCreateRecord('folder');
    FOLD1MES.setFieldValue('name','R1MES');
    FOLD1MES.setFieldValue('parent',idsfol);
    var ID_FOL_1MES= nlapiSubmitRecord(FOLD1MES,true);
    
              var FMICRO1MES = nlapiCreateRecord('folder');
             FMICRO1MES.setFieldValue('name','MC3');
             FMICRO1MES.setFieldValue('parent',ID_FOL_1MES);
             var ID_FOL_1MES_MICRO = nlapiSubmitRecord(FMICRO1MES,true);

    var FOLD3MESES = nlapiCreateRecord('folder');
    FOLD3MESES.setFieldValue('name','R3MESES');
    FOLD3MESES.setFieldValue('parent',idsfol);
    var ID_FOL_3MESES= nlapiSubmitRecord(FOLD3MESES,true);
    
              var FMICRO3MESES = nlapiCreateRecord('folder');
             FMICRO3MESES.setFieldValue('name','MC4');
             FMICRO3MESES.setFieldValue('parent',ID_FOL_3MESES);
             var ID_FOL_3MESES_MICRO = nlapiSubmitRecord(FMICRO3MESES,true);
    
    var FOLD6MESES = nlapiCreateRecord('folder');
    FOLD6MESES.setFieldValue('name','R5MESES');
    FOLD6MESES.setFieldValue('parent',idsfol);
    var ID_FOL_6MESES= nlapiSubmitRecord(FOLD6MESES,true);

              var FMICRO6MESES = nlapiCreateRecord('folder');
             FMICRO6MESES.setFieldValue('name','MC5');
             FMICRO6MESES.setFieldValue('parent',ID_FOL_6MESES);
             var ID_FOL_6MESES_MICRO = nlapiSubmitRecord(FMICRO6MESES,true);

    var FOLD7MESES = nlapiCreateRecord('folder');
    FOLD7MESES.setFieldValue('name','R7MESES');
    FOLD7MESES.setFieldValue('parent',idsfol);
    var ID_FOL_7MESES= nlapiSubmitRecord(FOLD7MESES,true);

              var FMICRO7MESES = nlapiCreateRecord('folder');
             FMICRO7MESES.setFieldValue('name','MC10');
             FMICRO7MESES.setFieldValue('parent',ID_FOL_7MESES);
             var ID_FOL_7MESES_MICRO = nlapiSubmitRecord(FMICRO7MESES,true);

     var FOLD9MESES = nlapiCreateRecord('folder');
    FOLD9MESES.setFieldValue('name','R9MESES');
    FOLD9MESES.setFieldValue('parent',idsfol);
    var ID_FOL_9MESES= nlapiSubmitRecord(FOLD9MESES,true);

              var FMICRO9MESES = nlapiCreateRecord('folder');
             FMICRO9MESES.setFieldValue('name','MC6');
             FMICRO9MESES.setFieldValue('parent',ID_FOL_9MESES);
             var ID_FOL_9MESES_MICRO = nlapiSubmitRecord(FMICRO9MESES,true);

    var FOLD12MESES = nlapiCreateRecord('folder');
    FOLD12MESES.setFieldValue('name','R12MESES');
    FOLD12MESES.setFieldValue('parent',idsfol);
    var ID_FOL_12MESES= nlapiSubmitRecord(FOLD12MESES,true);

             var FMICRO12MESES = nlapiCreateRecord('folder');
             FMICRO12MESES.setFieldValue('name','MC7');
             FMICRO12MESES.setFieldValue('parent',ID_FOL_12MESES);
             var ID_FOL_12MESES_MICRO = nlapiSubmitRecord(FMICRO12MESES,true);
    
      var FOLD14MESES = nlapiCreateRecord('folder');
    FOLD14MESES.setFieldValue('name','R14MESES');
    FOLD14MESES.setFieldValue('parent',idsfol);
    var ID_FOL_14MESES= nlapiSubmitRecord(FOLD14MESES,true);
    
              var FMICRO14MESES = nlapiCreateRecord('folder');
             FMICRO14MESES.setFieldValue('name','MC8');
             FMICRO14MESES.setFieldValue('parent',ID_FOL_14MESES);
             var ID_FOL_12MESES_MICRO = nlapiSubmitRecord(FMICRO14MESES,true);

}catch(e){

}

  }else{
    
    var folder2 = nlapiCreateRecord('folder');
    folder2.setFieldValue('name',id+"_FOLDER");
    folder2.setFieldValue('parent',idPathSub);
    var subFolderId = nlapiSubmitRecord(folder2,true);
    root.setFolder(subFolderId);
	root.setName('EXP_'+ id +'.pdf');
	var myPDFfileID = nlapiSubmitFile(root);
      var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
newAttachment.setFolder(subFolderId);
newAttachment.setEncoding('UTF-8');
nlapiSubmitFile(newAttachment);

    var folder3 = nlapiCreateRecord('folder');
    folder3.setFieldValue('name',id+'_MICROCAMARA');
    folder3.setFieldValue('parent',subFolderId);
    var parentFolderId = nlapiSubmitRecord(folder3,true);
  var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
newAttachment.setFolder(parentFolderId);
newAttachment.setEncoding('UTF-8');
nlapiSubmitFile(newAttachment);
    
    var folder4 = nlapiCreateRecord('folder');
    folder4.setFieldValue('name',id+'_FOTOS_ENFERMERIA');
    folder4.setFieldValue('parent',subFolderId);
    var parentFolderId = nlapiSubmitRecord(folder4,true);
      var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
newAttachment.setFolder(parentFolderId);
newAttachment.setEncoding('UTF-8');
nlapiSubmitFile(newAttachment);
    
    var folder5 = nlapiCreateRecord('folder');
    folder5.setFieldValue('name','TRATAMIENTOS');
    folder5.setFieldValue('parent',subFolderId);
    var parentFolderId = nlapiSubmitRecord(folder5,true);
      var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
newAttachment.setFolder(parentFolderId);
newAttachment.setEncoding('UTF-8');
nlapiSubmitFile(newAttachment);
 
    
    var FOLD24H = nlapiCreateRecord('folder');
    FOLD24H.setFieldValue('name','R24HORAS');
    FOLD24H.setFieldValue('parent',subFolderId);
    var ID_FOL_24H= nlapiSubmitRecord(FOLD24H,true);
          var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
newAttachment.setFolder(ID_FOL_24H);
newAttachment.setEncoding('UTF-8');
nlapiSubmitFile(newAttachment);
    
              var FMICRO24H = nlapiCreateRecord('folder');
             FMICRO24H.setFieldValue('name','MC1');
             FMICRO24H.setFieldValue('parent',ID_FOL_24H);
             var ID_FOL_24H_MICRO = nlapiSubmitRecord(FMICRO24H,true);
              var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
newAttachment.setFolder(ID_FOL_24H_MICRO);
newAttachment.setEncoding('UTF-8');
nlapiSubmitFile(newAttachment);

     var FOLD10D = nlapiCreateRecord('folder');
    FOLD10D.setFieldValue('name','R10DIAS');
    FOLD10D.setFieldValue('parent',subFolderId);
    var ID_FOL_10D= nlapiSubmitRecord(FOLD10D,true);
                  var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
newAttachment.setFolder(ID_FOL_10D);
newAttachment.setEncoding('UTF-8');
nlapiSubmitFile(newAttachment);
    
    
              var FMICRO10D = nlapiCreateRecord('folder');
             FMICRO10D.setFieldValue('name','MC2');
             FMICRO10D.setFieldValue('parent',ID_FOL_10D);
             var ID_FOL_10D_MICRO = nlapiSubmitRecord(FMICRO10D,true);
                      var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
newAttachment.setFolder(ID_FOL_10D_MICRO);
newAttachment.setEncoding('UTF-8');
nlapiSubmitFile(newAttachment);
    
    var FOLD1MES = nlapiCreateRecord('folder');
    FOLD1MES.setFieldValue('name','R1MES');
    FOLD1MES.setFieldValue('parent',subFolderId);
    var ID_FOL_1MES= nlapiSubmitRecord(FOLD1MES,true);
                          var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
newAttachment.setFolder(ID_FOL_1MES);
newAttachment.setEncoding('UTF-8');
nlapiSubmitFile(newAttachment);
    
              var FMICRO1MES = nlapiCreateRecord('folder');
             FMICRO1MES.setFieldValue('name','MC3');
             FMICRO1MES.setFieldValue('parent',ID_FOL_1MES);
             var ID_FOL_1MES_MICRO = nlapiSubmitRecord(FMICRO1MES,true);
       var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
newAttachment.setFolder(ID_FOL_1MES_MICRO);
newAttachment.setEncoding('UTF-8');
nlapiSubmitFile(newAttachment);
    
     var FOLD3MESES = nlapiCreateRecord('folder');
    FOLD3MESES.setFieldValue('name','R3MESES');
    FOLD3MESES.setFieldValue('parent',subFolderId);
    var ID_FOL_3MESES= nlapiSubmitRecord(FOLD3MESES,true);
         var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
newAttachment.setFolder(ID_FOL_3MESES);
newAttachment.setEncoding('UTF-8');
nlapiSubmitFile(newAttachment);
    
              var FMICRO3MESES = nlapiCreateRecord('folder');
             FMICRO3MESES.setFieldValue('name','MC4');
             FMICRO3MESES.setFieldValue('parent',ID_FOL_3MESES);
             var ID_FOL_3MESES_MICRO = nlapiSubmitRecord(FMICRO3MESES,true);
          var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
newAttachment.setFolder(ID_FOL_3MESES_MICRO);
newAttachment.setEncoding('UTF-8');
nlapiSubmitFile(newAttachment);
    
     var FOLD6MESES = nlapiCreateRecord('folder');
    FOLD6MESES.setFieldValue('name','R5MESES');
    FOLD6MESES.setFieldValue('parent',subFolderId);
    var ID_FOL_6MESES= nlapiSubmitRecord(FOLD6MESES,true);
        var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
newAttachment.setFolder(ID_FOL_6MESES);
newAttachment.setEncoding('UTF-8');
nlapiSubmitFile(newAttachment);
    
              var FMICRO6MESES = nlapiCreateRecord('folder');
             FMICRO6MESES.setFieldValue('name','MC5');
             FMICRO6MESES.setFieldValue('parent',ID_FOL_6MESES);
             var ID_FOL_6MESES_MICRO = nlapiSubmitRecord(FMICRO6MESES,true);
            var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
            newAttachment.setFolder(ID_FOL_6MESES_MICRO);
            newAttachment.setEncoding('UTF-8');
            nlapiSubmitFile(newAttachment);
    
    var FOLD7MESES = nlapiCreateRecord('folder');
    FOLD7MESES.setFieldValue('name','R7MESES');
    FOLD7MESES.setFieldValue('parent',subFolderId);
    var ID_FOL_7MESES= nlapiSubmitRecord(FOLD7MESES,true);
     var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
            newAttachment.setFolder(ID_FOL_7MESES);
            newAttachment.setEncoding('UTF-8');
            nlapiSubmitFile(newAttachment);
    
              var FMICRO7MESES = nlapiCreateRecord('folder');
             FMICRO7MESES.setFieldValue('name','MC10');
             FMICRO7MESES.setFieldValue('parent',ID_FOL_7MESES);
             var ID_FOL_7MESES_MICRO = nlapiSubmitRecord(FMICRO7MESES,true);
        var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
            newAttachment.setFolder(ID_FOL_7MESES_MICRO);
            newAttachment.setEncoding('UTF-8');
            nlapiSubmitFile(newAttachment);

     var FOLD9MESES = nlapiCreateRecord('folder');
    FOLD9MESES.setFieldValue('name','R9MESES');
    FOLD9MESES.setFieldValue('parent',subFolderId);
    var ID_FOL_9MESES= nlapiSubmitRecord(FOLD9MESES,true);
     var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
            newAttachment.setFolder(ID_FOL_9MESES);
            newAttachment.setEncoding('UTF-8');
            nlapiSubmitFile(newAttachment);
    
    
              var FMICRO9MESES = nlapiCreateRecord('folder');
             FMICRO9MESES.setFieldValue('name','MC6');
             FMICRO9MESES.setFieldValue('parent',ID_FOL_9MESES);
             var ID_FOL_9MESES_MICRO = nlapiSubmitRecord(FMICRO9MESES,true);
        var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
            newAttachment.setFolder(ID_FOL_9MESES_MICRO);
            newAttachment.setEncoding('UTF-8');
            nlapiSubmitFile(newAttachment);
    
    
      var FOLD12MESES = nlapiCreateRecord('folder');
    FOLD12MESES.setFieldValue('name','R12MESES');
    FOLD12MESES.setFieldValue('parent',subFolderId);
    var ID_FOL_12MESES= nlapiSubmitRecord(FOLD12MESES,true);
       var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
            newAttachment.setFolder(ID_FOL_12MESES);
            newAttachment.setEncoding('UTF-8');
            nlapiSubmitFile(newAttachment);
    
              var FMICRO12MESES = nlapiCreateRecord('folder');
             FMICRO12MESES.setFieldValue('name','MC7');
             FMICRO12MESES.setFieldValue('parent',ID_FOL_12MESES);
             var ID_FOL_12MESES_MICRO = nlapiSubmitRecord(FMICRO12MESES,true);
       var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
            newAttachment.setFolder(ID_FOL_12MESES_MICRO);
            newAttachment.setEncoding('UTF-8');
            nlapiSubmitFile(newAttachment);
    
      var FOLD14MESES = nlapiCreateRecord('folder');
    FOLD14MESES.setFieldValue('name','R14MESES');
    FOLD14MESES.setFieldValue('parent',subFolderId);
    var ID_FOL_14MESES= nlapiSubmitRecord(FOLD14MESES,true);
     var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
            newAttachment.setFolder(ID_FOL_14MESES);
            newAttachment.setEncoding('UTF-8');
            nlapiSubmitFile(newAttachment);
    
              var FMICRO14MESES = nlapiCreateRecord('folder');
             FMICRO14MESES.setFieldValue('name','MC8');
             FMICRO14MESES.setFieldValue('parent',ID_FOL_14MESES);
             var ID_FOL_12MESES_MICRO = nlapiSubmitRecord(FMICRO14MESES,true);
        var newAttachment = nlapiCreateFile('NetSuiteInf.txt', 'PLAINTEXT', 'Archivo creado por script');
            newAttachment.setFolder(ID_FOL_12MESES_MICRO);
            newAttachment.setEncoding('UTF-8');
            nlapiSubmitFile(newAttachment);
    

  var n = myPDFfileID.toString();
  var LOADfile = nlapiLoadFile(myPDFfileID);
  var urlpdf= LOADfile.getURL();
   record.setFieldValue('custentity293',urlpdf);
record.setFieldValue('custentity114',n);
  nlapiSubmitRecord(record);
  }
  }else{
    var folderSub = nlapiCreateRecord('folder');
    folderSub.setFieldValue('name',sucursal+"_HAIR");
    folderSub.setFieldValue('parent',idPath);
    var subFolderId2 = nlapiSubmitRecord(folderSub,true);

    if(subFolderId2!=null){
var folderC = nlapiCreateRecord('folder');
var parentC = folderC.getField('parent');

var folderList = parentC.getSelectOptions(id+"_FOLDER");
  if(folderList.length!=0){
    var idsfol=folderList[0].getId();
    root.setFolder(idsfol);
root.setName('EXP_'+ id +'.pdf');
var myPDFfileID = nlapiSubmitFile(root);
    
    
   try{
         
  var FOLD24H = nlapiCreateRecord('folder');
    FOLD24H.setFieldValue('name','R24HORAS');
    FOLD24H.setFieldValue('parent',idsfol);
    var ID_FOL_24H= nlapiSubmitRecord(FOLD24H,true);
    
              var FMICRO24H = nlapiCreateRecord('folder');
             FMICRO24H.setFieldValue('name','MC1');
             FMICRO24H.setFieldValue('parent',ID_FOL_24H);
             var ID_FOL_24H_MICRO = nlapiSubmitRecord(FMICRO24H,true);
    
     var FOLD10D = nlapiCreateRecord('folder');
    FOLD10D.setFieldValue('name','R10DIAS');
    FOLD10D.setFieldValue('parent',idsfol);
    var ID_FOL_10D= nlapiSubmitRecord(FOLD10D,true);
    
              var FMICRO10D = nlapiCreateRecord('folder');
             FMICRO10D.setFieldValue('name','MC2');
             FMICRO10D.setFieldValue('parent',ID_FOL_10D);
             var ID_FOL_10D_MICRO = nlapiSubmitRecord(FMICRO10D,true);
    
    var FOLD1MES = nlapiCreateRecord('folder');
    FOLD1MES.setFieldValue('name','R1MES');
    FOLD1MES.setFieldValue('parent',idsfol);
    var ID_FOL_1MES= nlapiSubmitRecord(FOLD1MES,true);
    
              var FMICRO1MES = nlapiCreateRecord('folder');
             FMICRO1MES.setFieldValue('name','MC3');
             FMICRO1MES.setFieldValue('parent',ID_FOL_1MES);
             var ID_FOL_1MES_MICRO = nlapiSubmitRecord(FMICRO1MES,true);
    
     var FOLD3MESES = nlapiCreateRecord('folder');
    FOLD3MESES.setFieldValue('name','R3MESES');
    FOLD3MESES.setFieldValue('parent',idsfol);
    var ID_FOL_3MESES= nlapiSubmitRecord(FOLD3MESES,true);
    
              var FMICRO3MESES = nlapiCreateRecord('folder');
             FMICRO3MESES.setFieldValue('name','MC4');
             FMICRO3MESES.setFieldValue('parent',ID_FOL_3MESES);
             var ID_FOL_3MESES_MICRO = nlapiSubmitRecord(FMICRO3MESES,true);
    
    var FOLD6MESES = nlapiCreateRecord('folder');
    FOLD6MESES.setFieldValue('name','R5MESES');
    FOLD6MESES.setFieldValue('parent',idsfol);
    var ID_FOL_6MESES= nlapiSubmitRecord(FOLD6MESES,true);
    
              var FMICRO6MESES = nlapiCreateRecord('folder');
             FMICRO6MESES.setFieldValue('name','MC5');
             FMICRO6MESES.setFieldValue('parent',ID_FOL_6MESES);
             var ID_FOL_6MESES_MICRO = nlapiSubmitRecord(FMICRO6MESES,true);

    var FOLD7MESES = nlapiCreateRecord('folder');
    FOLD7MESES.setFieldValue('name','R7MESES');
    FOLD7MESES.setFieldValue('parent',idsfol);
    var ID_FOL_7MESES= nlapiSubmitRecord(FOLD7MESES,true);
    
              var FMICRO7MESES = nlapiCreateRecord('folder');
             FMICRO7MESES.setFieldValue('name','MC10');
             FMICRO7MESES.setFieldValue('parent',ID_FOL_7MESES);
             var ID_FOL_7MESES_MICRO = nlapiSubmitRecord(FMICRO7MESES,true);
    
     var FOLD9MESES = nlapiCreateRecord('folder');
    FOLD9MESES.setFieldValue('name','R9MESES');
    FOLD9MESES.setFieldValue('parent',idsfol);
    var ID_FOL_9MESES= nlapiSubmitRecord(FOLD9MESES,true);
    
              var FMICRO9MESES = nlapiCreateRecord('folder');
             FMICRO9MESES.setFieldValue('name','MC6');
             FMICRO9MESES.setFieldValue('parent',ID_FOL_9MESES);
             var ID_FOL_9MESES_MICRO = nlapiSubmitRecord(FMICRO9MESES,true);
    
      var FOLD12MESES = nlapiCreateRecord('folder');
    FOLD12MESES.setFieldValue('name','R12MESES');
    FOLD12MESES.setFieldValue('parent',idsfol);
    var ID_FOL_12MESES= nlapiSubmitRecord(FOLD12MESES,true);
    
              var FMICRO12MESES = nlapiCreateRecord('folder');
             FMICRO12MESES.setFieldValue('name','MC7');
             FMICRO12MESES.setFieldValue('parent',ID_FOL_12MESES);
             var ID_FOL_12MESES_MICRO = nlapiSubmitRecord(FMICRO12MESES,true);
    
      var FOLD14MESES = nlapiCreateRecord('folder');
    FOLD14MESES.setFieldValue('name','R14MESES');
    FOLD14MESES.setFieldValue('parent',idsfol);
    var ID_FOL_14MESES= nlapiSubmitRecord(FOLD14MESES,true);
    
              var FMICRO14MESES = nlapiCreateRecord('folder');
             FMICRO14MESES.setFieldValue('name','MC8');
             FMICRO14MESES.setFieldValue('parent',ID_FOL_14MESES);
             var ID_FOL_12MESES_MICRO = nlapiSubmitRecord(FMICRO14MESES,true);

}catch(e){
  
  
} 
    


  }else{
   var folder2 = nlapiCreateRecord('folder');
    folder2.setFieldValue('name',id+"_FOLDER");
    folder2.setFieldValue('parent',subFolderId2);
    var subFolderId = nlapiSubmitRecord(folder2,true);
    root.setFolder(subFolderId);
	root.setName('EXP_'+ id +'.pdf');
	var myPDFfileID = nlapiSubmitFile(root);
    
    
    try{
  var FOLD24H = nlapiCreateRecord('folder');
    FOLD24H.setFieldValue('name','R24HORAS');
    FOLD24H.setFieldValue('parent',subFolderId2);
    var ID_FOL_24H= nlapiSubmitRecord(FOLD24H,true);
    
              var FMICRO24H = nlapiCreateRecord('folder');
             FMICRO24H.setFieldValue('name','MC1');
             FMICRO24H.setFieldValue('parent',ID_FOL_24H);
             var ID_FOL_24H_MICRO = nlapiSubmitRecord(FMICRO24H,true);
    
     var FOLD10D = nlapiCreateRecord('folder');
    FOLD10D.setFieldValue('name','R10DIAS');
    FOLD10D.setFieldValue('parent',subFolderId2);
    var ID_FOL_10D= nlapiSubmitRecord(FOLD10D,true);
    
              var FMICRO10D = nlapiCreateRecord('folder');
             FMICRO10D.setFieldValue('name','MC2');
             FMICRO10D.setFieldValue('parent',ID_FOL_10D);
             var ID_FOL_10D_MICRO = nlapiSubmitRecord(FMICRO10D,true);
    
    var FOLD1MES = nlapiCreateRecord('folder');
    FOLD1MES.setFieldValue('name','R1MES');
    FOLD1MES.setFieldValue('parent',subFolderId2);
    var ID_FOL_1MES= nlapiSubmitRecord(FOLD1MES,true);
    
              var FMICRO1MES = nlapiCreateRecord('folder');
             FMICRO1MES.setFieldValue('name','MC3');
             FMICRO1MES.setFieldValue('parent',ID_FOL_1MES);
             var ID_FOL_1MES_MICRO = nlapiSubmitRecord(FMICRO1MES,true);
    
     var FOLD3MESES = nlapiCreateRecord('folder');
    FOLD3MESES.setFieldValue('name','R3MESES');
    FOLD3MESES.setFieldValue('parent',subFolderId2);
    var ID_FOL_3MESES= nlapiSubmitRecord(FOLD3MESES,true);
    
              var FMICRO3MESES = nlapiCreateRecord('folder');
             FMICRO3MESES.setFieldValue('name','MC4');
             FMICRO3MESES.setFieldValue('parent',ID_FOL_3MESES);
             var ID_FOL_3MESES_MICRO = nlapiSubmitRecord(FMICRO3MESES,true);
    
     var FOLD6MESES = nlapiCreateRecord('folder');
    FOLD6MESES.setFieldValue('name','R5MESES');
    FOLD6MESES.setFieldValue('parent',subFolderId2);
    var ID_FOL_6MESES= nlapiSubmitRecord(FOLD6MESES,true);
    
              var FMICRO6MESES = nlapiCreateRecord('folder');
             FMICRO6MESES.setFieldValue('name','MC5');
             FMICRO6MESES.setFieldValue('parent',ID_FOL_6MESES);
             var ID_FOL_6MESES_MICRO = nlapiSubmitRecord(FMICRO6MESES,true);

     var FOLD7MESES = nlapiCreateRecord('folder');
    FOLD7MESES.setFieldValue('name','R7MESES');
    FOLD7MESES.setFieldValue('parent',subFolderId2);
    var ID_FOL_7MESES= nlapiSubmitRecord(FOLD7MESES,true);
    
              var FMICRO7MESES = nlapiCreateRecord('folder');
             FMICRO7MESES.setFieldValue('name','MC10');
             FMICRO7MESES.setFieldValue('parent',ID_FOL_7MESES);
             var ID_FOL_7MESES_MICRO = nlapiSubmitRecord(FMICRO7MESES,true);
    
     var FOLD9MESES = nlapiCreateRecord('folder');
    FOLD9MESES.setFieldValue('name','R9MESES');
    FOLD9MESES.setFieldValue('parent',subFolderId2);
    var ID_FOL_9MESES= nlapiSubmitRecord(FOLD9MESES,true);
    
              var FMICRO9MESES = nlapiCreateRecord('folder');
             FMICRO9MESES.setFieldValue('name','MC6');
             FMICRO9MESES.setFieldValue('parent',ID_FOL_9MESES);
             var ID_FOL_9MESES_MICRO = nlapiSubmitRecord(FMICRO9MESES,true);
    
      var FOLD12MESES = nlapiCreateRecord('folder');
    FOLD12MESES.setFieldValue('name','R12MESES');
    FOLD12MESES.setFieldValue('parent',subFolderId2);
    var ID_FOL_12MESES= nlapiSubmitRecord(FOLD12MESES,true);
    
              var FMICRO12MESES = nlapiCreateRecord('folder');
             FMICRO12MESES.setFieldValue('name','MC7');
             FMICRO12MESES.setFieldValue('parent',ID_FOL_12MESES);
             var ID_FOL_12MESES_MICRO = nlapiSubmitRecord(FMICRO12MESES,true);
    
      var FOLD14MESES = nlapiCreateRecord('folder');
    FOLD14MESES.setFieldValue('name','R14MESES');
    FOLD14MESES.setFieldValue('parent',subFolderId2);
    var ID_FOL_14MESES= nlapiSubmitRecord(FOLD14MESES,true);
    
              var FMICRO14MESES = nlapiCreateRecord('folder');
             FMICRO14MESES.setFieldValue('name','MC8');
             FMICRO14MESES.setFieldValue('parent',ID_FOL_14MESES);
             var ID_FOL_12MESES_MICRO = nlapiSubmitRecord(FMICRO14MESES,true);

}catch(e){
  
  
}   
  }
    }
    }
    }else{
    var folderPath = nlapiCreateRecord('folder');
    folderPath.setFieldValue('name','EXP_COL');
    var parentFolderId = nlapiSubmitRecord(folderPath,true);

  }
  
 //----------------------FIN obtinene la carpeta o se verifica que exista-------- 
   response.setContentType('PDF','EXP_'+id+ '.pdf', 'inline');
   response.write(root.getValue());

  }
}
