class  Appuser{

  String uid='';
  String email= '';
  String phone ='';
  String name='';



  Appuser (this.uid ,this.email,this.phone,this.name);




  factory Appuser.fromMap(Map<String ,dynamic> map){
    return Appuser(map['uid'], map['email'], map['phone'], map['name']);
  }

  Map<String ,dynamic> toMap()=>{
    'uid':uid ,'email':email ,'phone':phone ,'name':name,
  };

}




