import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_login/myapp.dart';
import 'package:firebase_login/register.dart';
import 'package:flutter/material.dart';

class myHome extends StatefulWidget {
  const myHome({Key? key}) : super(key: key);

  @override
  State<myHome> createState() => _myHomeState();
}

class _myHomeState extends State<myHome> {


  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          " LOGIN ",
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.deepPurpleAccent,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              SizedBox(height: 30.0),
              Form(
                 // Changed key reference
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: TextFormField(
                        controller: _emailController,
                        decoration: InputDecoration(
                          labelText: 'Email',
                          border: OutlineInputBorder(
                            borderSide: BorderSide(color: Colors.black12, width: 2.0),
                            borderRadius: BorderRadius.circular(10.0),
                          ),
                        ),
                        validator: (value) {
                          if (value!.isEmpty) {
                            return 'Please enter your Email';
                          }
                          return null;
                        },
                      ),
                    ),
                    SizedBox(height: 16.0),
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: TextFormField(
                        controller: _passwordController,
                        decoration: InputDecoration(
                          labelText: 'Password',
                          border: OutlineInputBorder(
                            borderSide: BorderSide(color: Colors.black12, width: 2.0),
                            borderRadius: BorderRadius.circular(10.0),
                          ),
                        ),
                        obscureText: true,
                        validator: (value) {
                          if (value!.isEmpty) {
                            return 'Please enter your password';
                          }
                          return null;
                        },
                      ),
                    ),
                    SizedBox(height: 32.0),
                    Container(
                      width: 200,
                      child: ElevatedButton(
                        onPressed: () {
                          // if (formKey.currentState!.validate()) {
                          //   // Perform login logic here
                          //   String username = _usernameController.text;
                          //   String password = _passwordController.text;
                          //   print('Username: $username');
                          //   print('Password: $password');
          
          
                          signIn();
                          // Navigator.push(context, MaterialPageRoute(builder: (context)=> myHome()));
                          // }
                        }       ,
                        child: Text('Login'),
                      ),
                    ),
          
                    Padding(
                      padding: EdgeInsets.symmetric(vertical: 20.0, horizontal: 80.0),
                      child: Row(
                        children:[
                          Center(child: Text("if you dont have?")),
                          TextButton(onPressed: (){
                            Navigator.push(context, MaterialPageRoute(builder: (context)=> registerPage()));
                          }, child: Text("Register"))
          
                        ]
                      ),
                    ),
                  ],
          
          
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }


void signIn()async {
  try {
    UserCredential userCredential =
    await FirebaseAuth.instance.signInWithEmailAndPassword(
      email: _emailController.text,
      password: _passwordController.text,
    );

    print('User signed in: ${userCredential.user!.uid}');
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => SuccessPage(userCredential.user!)),
    );




  } catch (e) {
    print('Error during sign in: $e');
  }
}
}