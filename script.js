function chgClass(cb)
{
  if(cb.checked){
    cb.parentElement.style ="border: 2px solid green; text-decoration: line-through;";
  }else{
    cb.parentElement.style ="border: none; text-decoration: none;";
  }


}
