class Form {
  formArray = [];
  setForm(formArray){
    this.formArray= formArray;
   
  }

  setHeader(section,url,position){
   
    this.formArray.logo[section].push(url,position)
    
  }

  setFooter(section,url,position){
    this.formArray.logo[section].push(url,position)
  }

  getFooter(){
  
  }
  
  getBanner(){
    
  }
}
