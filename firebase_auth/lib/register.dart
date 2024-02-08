
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

import 'myHome.dart';

class registerPage extends StatefulWidget {
  const registerPage({Key? key}) : super(key: key);

  @override
  State<registerPage> createState() => _registerPageState();
}

class _registerPageState extends State<registerPage> {

  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _phoneController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Register'),
        ),
      body:SafeArea(

        child: Padding(
          padding: EdgeInsets.all(16.0),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                TextFormField(
                  controller: _emailController,
                  keyboardType: TextInputType.emailAddress,
                  decoration: InputDecoration(labelText: 'Email',
                    border: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.black12, width: 2.0),
                      borderRadius: BorderRadius.circular(10.0),
                    ),),

                ),

                SizedBox(height: 16.0),
                TextFormField(
                  controller: _nameController,
                  decoration: InputDecoration(labelText: 'Name',
                    border: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.black12, width: 2.0),
                      borderRadius: BorderRadius.circular(10.0),
                    ),),
                ),
                SizedBox(height: 16.0),
                TextFormField(
                  controller: _passwordController,
                  obscureText: true,
                  decoration: InputDecoration(labelText: 'Password',
                    border: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.black12, width: 2.0),
                      borderRadius: BorderRadius.circular(10.0),
                    ),),
                ),
                SizedBox(height: 16.0),
                TextFormField(
                  controller: _phoneController,
                  keyboardType: TextInputType.phone,
                  decoration: InputDecoration(labelText: 'Phone Number',
                    border: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.black12, width: 2.0),
                      borderRadius: BorderRadius.circular(10.0),
                    ),),
                ),
                SizedBox(height: 32.0),
                ElevatedButton(
                  onPressed: () {
                    register();
                  },
                  child: Text('Register'),
                ),
              ],
            ),
          ),
        ),


      ) ,
    );
  }



  void register() async {
    try {
      UserCredential userCredential = await FirebaseAuth.instance.createUserWithEmailAndPassword(
        email: _emailController.text,
        password: _passwordController.text,
      );

      await FirebaseFirestore.instance.collection('user').doc(userCredential.user!.uid).set({
        "email":_emailController.text,
        "name":_nameController.text,
        "password":_passwordController.text,

        "phone":_phoneController.text,
      });

      print("sucess");
      Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => myHome(
            email:_emailController.text,
            password:_passwordController.text,
            name:_nameController.text,
            phone:_phoneController.text
          )),
      );

    } catch (e) {
      print('Error during sign up: $e');
    }
  }//        android:name="${applicationName}"

}

